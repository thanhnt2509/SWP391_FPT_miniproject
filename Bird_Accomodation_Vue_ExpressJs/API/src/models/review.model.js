const config = require("../../src/config/config");
const sql = require("mssql");

module.exports = {
    getAllReviews: async () => {
        let con = await config.connection();
        const returnData = con.request()
            .query("select u.name, r.*, bil.checkout_date, bil.checkout_img\n" +
                "from Booking b join [User] u on b.user_id = u.user_id\n" +
                "\tjoin Bill bil on b.booking_id = bil.booking_id\n" +
                "\tjoin Review r on b.booking_id = r.booking_id\n" +
                "\twhere isGood = 1");
        return (await returnData).recordset || null;
    },
    createReview: async (payload) => {
        let con = await config.connection();
        console.log(payload);
        const defaultReview = 0;
        const returnData = await con.request()
            .input("booking_id", sql.Int, payload.booking_id)
            .input("comment", sql.NVarChar, payload.comment)
            .input("rating", sql.Int, payload.rating)
            .input("user_id", sql.Int, payload.user_id)
            .input("isGood", sql.Int, defaultReview)
            .query("INSERT INTO Review (booking_id, comment, rating, user_id, isGood) \n" +
                "VALUES (@booking_id, @comment, @rating, @user_id, @isGood)");
        return returnData.rowsAffected[0];
    }
}