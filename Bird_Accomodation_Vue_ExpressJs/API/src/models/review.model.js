const config = require("../../src/config/config");

module.exports = {
    getAllReviews: async () => {
        let con = await config.connection();
        const returnData = con.request()
            .query("select u.name, r.*, bil.checkout_date, bil.checkout_img\n" +
                "from Booking b join [User] u on b.user_id = u.user_id\n" +
                "\tjoin Bill bil on b.booking_id = bil.booking_id\n" +
                "\tjoin Review r on b.booking_id = r.booking_id\n" +
                "\t");
        return (await returnData).recordset || null;
    }
}