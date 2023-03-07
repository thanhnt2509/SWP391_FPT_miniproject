const config = require("../config/config");

module.exports = {
    changeBookingStatus: async (bookingId, status) => {
        let con = await config.connection();
        const request = new con.Request();
        const returnData = request
            .input("booking_id", con.Int, bookingId)
            .input("status", con.Int, status)
            .query("UPDATE [Booking] SET status = @status WHERE booking_id = @booking_id");
        return (await returnData).rowsAffected[0];
    },
    getAllBookings: async () => {
        let con = await config.connection();
        const request = new con.Request();
        const returnData = request.query("SELECT b.*, bi.bird_name, u.address, u.name as user_name FROM [Booking] b join [Bird] bi on b.bird_id = bi.bird_id join [User] u on b.user_id = u.user_id");
        return (await returnData).recordset || null;
    },
    getMyBookings: async (email) => {
        let con = await config.connection();
        const request = new con.Request();
        const returnData = request
            .input("email", con.NVarChar, email)
            .query("SELECT b.*, bi.bird_name, u.address FROM [Booking] b join [Bird] bi on b.bird_id = bi.bird_id join [User] u on b.user_id = u.user_id \n" +
                "WHERE b.user_id = (SELECT user_id FROM [User] WHERE email = @email collate latin1_general_cs_as)");
        return (await returnData).recordset || null;
    },
    addNewBooking: async (data) => {
        let con = await config.connection();
        const transaction = new con.Transaction();
        await transaction.begin();
        try {
            await transaction.request()
                .input('user_id', con.Int, data.user_id)
                .input('bird_id', con.Int, data.bird_id)
                .input('date_from', con.Date, data.date_from)
                .input('date_to', con.Date, data.date_to)
                .input('status', con.Int, data.status)
                .query(`INSERT INTO [Booking] (user_id, bird_id, date_from, date_to, status) \n`
                    + `VALUES (@user_id, @bird_id, @date_from, @date_to, @status)`);
            const booking_id = await transaction.request()
                .query(`SELECT TOP 1 booking_id FROM [Booking] ORDER BY booking_id DESC`);
            for (let i = 0; i < data.services.length; i++) {
                let booked_price = await transaction.request()
                    .query(`SELECT price from [Service] WHERE service_id = ${data.services[i]}`);
                await transaction.request()
                    .input('booking_id', con.Int, booking_id.recordset[0].booking_id)
                    .input('service_id', con.Int, data.services[i])
                    .input('booked_price', con.Int, booked_price.recordset[0].price)
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
}