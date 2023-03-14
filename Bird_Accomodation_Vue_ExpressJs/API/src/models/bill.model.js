const config = require('../config/config');

module.exports = {
    getBill: async (booking_id) => {
        let con = await config.connection();
        const request = new con.Request();
        const returnData = await request
            .input("booking_id", con.Int, booking_id)
            .query("SELECT us.name, us.address, us.phone, br.bird_id, br.bird_name, bk.date_from, bk.date_to, bk.[status], b.total_amount, b.checkout_date \n" +
                "FROM Bill AS b \n" +
                "JOIN Booking AS bk ON b.booking_id = bk.booking_id \n" +
                "JOIN [User] AS us ON bk.user_id = us.user_id \n" +
                "JOIN Bird AS br ON bk.bird_id = br.bird_id \n" +
                "WHERE bk.booking_id = @booking_id");
        return (await returnData).recordset || null;
    },
    getBillServiceDetail: async (booking_id) => {
        let con = await config.connection();
        const request = new con.Request();
        const returnData = await request
            .input("booking_id", con.Int, booking_id)
            .query("SELECT s.service_id, s.name, bd.booked_price \n" +
                "FROM BookingDetail AS bd \n" +
                "JOIN Service AS s ON bd.service_id = s.service_id \n" +
                "WHERE bd.booking_id = @booking_id");
        return (await returnData).recordset || null;
    },
}