const config = require("../config/config");
const sql = require("mssql")

module.exports = {
    changeBookingStatus: async (bookingId, status) => {
        let con = await config.connection();
        const request = con.request();
        const returnData = await request
            .input("booking_id", sql.Int, bookingId)
            .input("status", sql.Int, status)
            .query("UPDATE [Booking] SET status = @status WHERE booking_id = @booking_id");

        return (await returnData).rowsAffected[0];
    },
    getAllBookings: async () => {
        let con = await config.connection();
        const request = con.request();
        const returnData = await request
            .query("SELECT b.*, bi.bird_name, u.address, u.name \n" +
                "FROM [Booking] AS b \n" +
                "JOIN [Bird] AS bi ON b.bird_id = bi.bird_id \n" +
                "JOIN [User] AS u ON b.user_id = u.user_id");
        return (await returnData).recordset || null;
    },
    getBookingServices: async (bookingId) => {
        let con = await config.connection();
        const request = con.request();
        const returnData = await request
            .input("booking_id", sql.Int, bookingId)
            .query("select s.service_id, s.name, s.price " +
                "from Booking b join BookingDetail bd on b.booking_id = bd.booking_id " +
                " join Service s on bd.service_id = s.service_id " +
                "where b.booking_id = @booking_id");
        return (await returnData).recordset || null;
    },
    getMyBookings: async (email) => {
        let con = await config.connection();
        const request = con.request();
        const returnData = await request
            .input("email", sql.NVarChar, email)
            .query("SELECT b.*, bi.bird_name, u.address FROM [Booking] b join [Bird] bi on b.bird_id = bi.bird_id join [User] u on b.user_id = u.user_id \n" +
                "WHERE b.user_id = (SELECT user_id FROM [User] WHERE email = @email collate latin1_general_cs_as)");

        return (await returnData).recordset || null;
    },
    addNewBooking: async (data) => {
        let con = await config.connection();
        const transaction = con.transaction();
        await transaction.begin();
        try {
            await transaction.request()
                .input('user_id', sql.Int, data.user_id)
                .input('bird_id', sql.Int, data.bird_id)
                .input('date_from', sql.Date, data.date_from)
                .input('date_to', sql.Date, data.date_to)
                .input('status', sql.Int, data.status)
                .query(`INSERT INTO [Booking] (user_id, bird_id, date_from, date_to, status) \n`
                    + `VALUES (@user_id, @bird_id, @date_from, @date_to, @status)`);
            const booking_id = await transaction.request()
                .query(`SELECT TOP 1 booking_id FROM [Booking] ORDER BY booking_id DESC`);
            for (let i = 0; i < data.services.length; i++) {
                let booked_price = await transaction.request()
                    .query(`SELECT price from [Service] WHERE service_id = ${data.services[i]}`);
                await transaction.request()
                    .input('booking_id', sql.Int, booking_id.recordset[0].booking_id)
                    .input('service_id', sql.Int, data.services[i])
                    .input('booked_price', sql.Int, booked_price.recordset[0].price)
                    .query(`INSERT INTO [BookingDetail] (booking_id, service_id, booked_price) \n`
                        + `VALUES (@booking_id, @service_id, @booked_price)`);
            }
            await transaction.commit();

            return true;
        } catch (error) {
            await transaction.rollback();

            return false;
        }
    },
    getBooking: async (booking_status) => {
        //code here
    },
    checkoutBooking: async (payload) => {
        const { booking_id, checkout_date, payment_method, checkout_img_filename } = payload;
        let con = await config.connection();
        const request = con.request();
        const successCheckoutStatus = 1;
        const returnData = await request
            .input("booking_id", sql.Int, booking_id)
            .input("checkout_date", sql.Date, checkout_date)
            .input("payment_method", sql.NVarChar, payment_method)
            .input("payment_status", sql.Int, successCheckoutStatus)
            .input("checkout_img", sql.NVarChar, checkout_img_filename)
            .query("UPDATE [Bill] SET checkout_date = @checkout_date, payment_status = @payment_status, payment_method = @payment_method, checkout_img = @checkout_img WHERE booking_id = @booking_id");
        return (await returnData).rowsAffected[0];
    }
}