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
    }
}