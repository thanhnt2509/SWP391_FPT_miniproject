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
            .query("SELECT b.*, bi.bird_name, bt.name as bird_type, bi.gender, bi.image, bi.description, u.address, u.name, u.email \n" +
                "FROM [Booking] AS b \n" +
                "JOIN [Bird] AS bi ON b.bird_id = bi.bird_id \n" +
                "JOIN [User] AS u ON b.user_id = u.user_id \n" +
                "JOIN [BirdType] AS bt ON bi.type_id = bt.btype_id");
        return (await returnData).recordset || null;
    },
    getBookingServices: async (bookingId) => {
        let con = await config.connection();
        const request = con.request();
        const returnData = await request
            .input("booking_id", sql.Int, bookingId)
            .query("select s.service_id, s.name, s.price as current_price, s.isPack, bd.booked_price, bd.quantity, bd.remain\n" +
                "from BookingDetail bd join Service s on bd.service_id = s.service_id\n" +
                "where bd.booking_id = @booking_id");
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

            // get last booking id
            const booking_id = await transaction.request()
                .query(`SELECT IDENT_CURRENT('Booking') AS lastId`);

            // process service list add to Booking Detail
            const serviceList = data.services.map(service => {
                return {
                    service_id: service.service_id,
                    quantity: service.quantity,
                    price: service.price,
                    checked: service.checked,
                }
            }).filter(service => service.checked === true);

            for(let i = 0; i < serviceList.length; i++) {
                await transaction.request()
                    .input('booking_id', sql.Int, booking_id.recordset[0].lastId)
                    .input('service_id', sql.Int, serviceList[i].service_id)
                    .input('quantity', sql.Int, serviceList[i].quantity)
                    .input('remain', sql.Int, serviceList[i].quantity)
                    .input('booked_price', sql.Int, serviceList[i].price)
                    .query(`INSERT INTO [BookingDetail] (booking_id, service_id, quantity, booked_price, remain) \n`
                        + `VALUES (@booking_id, @service_id, @quantity, @booked_price, @remain)`);
            }

            // creat a bill for this booking with empty data
            const payment_status = 0;   // not paid
            const total_service_amount = 0; // no service
            await transaction.request() // booking_id inputted
                .query(`INSERT INTO [Bill] (booking_id, payment_status, total_service_amount) \n`
                    + `VALUES (${booking_id.recordset[0].lastId}, ${payment_status}, ${total_service_amount})`);

            await transaction.commit();

            return true;
        } catch (error) {
            console.log(error)
            await transaction.rollback();

            return false;
        }
    },
    checkoutBooking: async (payload) => {
        const { booking_id, checkout_date, payment_method, checkout_img_filename, total_service_amount } = payload;
        let con = await config.connection();
        const request = con.request();
        const successCheckoutStatus = 1;
        const completeBookingStatus = 3;
        const returnData = await request
            .input("booking_id", sql.Int, booking_id)
            .input("checkout_date", sql.Date, checkout_date)
            .input("payment_method", sql.NVarChar, payment_method)
            .input("payment_status", sql.Int, successCheckoutStatus)
            .input("checkout_img", sql.NVarChar, checkout_img_filename)
            .input("total_service_amount", sql.Int, total_service_amount)
            .query("UPDATE [Bill] SET total_service_amount = @total_service_amount, checkout_date = @checkout_date, payment_status = @payment_status, payment_method = @payment_method, checkout_img = @checkout_img WHERE booking_id = @booking_id");

        // upload booking status as successful
        const changeStatus = await con.request()
            .input("booking_id", sql.Int, booking_id)
            .input("status", sql.Int, completeBookingStatus)
            .query("UPDATE [Booking] SET status = @status WHERE booking_id = @booking_id");

        return returnData.rowsAffected[0];
    },
    registerNewBookingService: async (booking_id, newBookingService) => {
        let con = await config.connection();
        const result = [];

        // process service list add to Booking Detail
        newBookingService = newBookingService.map(service => {
            return {
                service_id: service.service_id,
                quantity: service.quantity,
                price: service.price,
                checked: service.checked,
            }
        }).filter(service => service.checked === true);

        for(let i = 0; i < newBookingService.length; i++) {
            const query = await con.request()
                .input("booking_id", sql.Int, booking_id)
                .input("service_id", sql.Int, newBookingService[i].service_id)
                .input("quantity", sql.Int, newBookingService[i].quantity)
                .input("booked_price", sql.Int, newBookingService[i].price)
                .input("remain", sql.Int, newBookingService[i].quantity)
                .query("INSERT INTO [BookingDetail] (booking_id, service_id, quantity, booked_price, remain) \n" +
                    "VALUES (@booking_id, @service_id, @quantity, @booked_price, @remain)");
            result.push(query.rowsAffected[0]);
        }
        return result.length !== 0;
    }
}