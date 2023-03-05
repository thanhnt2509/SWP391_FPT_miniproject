const { connection } = require("../../src/config/Connection");

module.exports = {
    getTransactions: async (bookingStatus) => {
        //return all transactions that status is on-going
        // return [booking_id, bird_id, bird_image, date_from, date_to, status, payment_method]
        try {
            let con = await connection();
            let sql = `select b.booking_id, b.bird_id, bs.image as bird_image, b.date_from, b.date_to, b.status, bl.payment_method`
            sql += ` from Booking b`
            sql += ` inner join Bird bs on b.bird_id = bs.bird_id`
            sql += ` left join Bill bl on b.booking_id = bl.booking_id`
            sql += ` where b.status = ${bookingStatus}`
            return con.query(sql);
        } catch (error) {
            throw error;
        }
    }
}