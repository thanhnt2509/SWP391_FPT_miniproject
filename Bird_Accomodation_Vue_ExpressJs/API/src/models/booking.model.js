const DBConnect = require("../config/config");

module.exports = {
    changeBookingStatus: async (bookingId, status) => {
        let con = await DBConnect.connection();
        const request = new con.Request();
        const returnData = request
            .input("booking_id", DBConnect.sql.Int, bookingId)
            .input("status", DBConnect.sql.Int, status)
            .query("UPDATE [Bookings] SET status = @status WHERE booking_id = @booking_id");
        return (await returnData).rowsAffected[0];
    },
    getAllBookings: async () => {
        let con = await DBConnect.connection();
        const request = new con.Request();
        const returnData = request.query("SELECT * FROM [Bookings]");
        return (await returnData).recordset || null;
    },
    addNewBooking: async (body, user_id) => {
        let con = await DBConnect.connection();
        const transaction = new con.Transaction();
        await transaction.begin();
        const defaultStatus = 0; //pending
        try {
            const bookingQueryResult = await transaction.request()
                .input('user_id', con.Int, user_id)
                .input('bird_id', con.Int, body.bird_id)
                .input('date_from', con.Date, body.date_from)
                .input('date_to', con.Date, body.date_to)
                .input('status', con.Int, defaultStatus)
                .query(`INSERT INTO [Bookings] (user_id, bird_id, date_from, date_to, status) \n`
                    + `VALUES (@user_id, @bird_id, @date_from, @date_to, @status)`);
            const booking_id = await transaction.request()
                .query(`SELECT TOP 1 booking_id FROM [Bookings] ORDER BY booking_id DESC`);
            for (let i = 0; i < body.services.length; i++) {
                let booked_price = await transaction.request()
                    .query(`SELECT price from [Services] WHERE service_id = ${body.services[i]}`);
                await transaction.request()
                    .input('booking_id', con.Int, booking_id.recordset[0].booking_id)
                    .input('service_id', con.Int, body.services[i])
                    .input('booked_price', con.Int, booked_price.recordset[0].price)
                    .query(`INSERT INTO [BookingDetail] (booking_id, service_id, booked_price) \n`
                        + `VALUES (@booking_id, @service_id, @booked_price)`);
            }
            await transaction.commit();
            return true;
        } catch (error) {
            await transaction.rollback();
            throw error;//check this
        }
    },
}