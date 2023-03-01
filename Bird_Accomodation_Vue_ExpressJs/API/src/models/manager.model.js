const { connection } = require("../../src/config/Connection");

module.exports = {
    getTransactions: async (bookingStatus) => {
        //return all transactions that status is on-going
        // return [booking_id, bird_id, bird_image, date_from, date_to, status, payment_method]
        try {
            let con = await connection();
            let sql = `select b.booking_id, b.bird_id, bs.image as bird_image, b.date_from, b.date_to, b.status, bl.payment_method`
            sql += ` from Bookings b`
            sql += ` inner join Birds bs on b.bird_id = bs.bird_id`
            sql += ` left join Bills bl on b.booking_id = bl.booking_id`
            sql += ` where b.status = ${bookingStatus}`
            return con.query(sql);
        } catch (error) {
            throw error;
        }
    },
    approveTransaction: async (booking_id) => {
        try {
            let con = await connection();
            let sql = `update Bookings set status = 1 where booking_id = ${booking_id}`
            return con.query(sql);
        } catch (error) {
            throw error;
        }
    },
    completeTransaction: async (booking_id) => {
        try {
            let con = await connection();
            let sql = `update Bookings set status = 2 where booking_id = ${booking_id}`
            return con.query(sql);
        } catch (error) {
            throw error;
        }

    },
    rejectTransaction: async (booking_id) => {
        try {
            let con = await connection();
            let sql = `update Bookings set status = 3 where booking_id = ${booking_id}`
            return con.query(sql);
        } catch (error) {
            throw error;
        }
    },
    addPost: async (body) => {
        //body include: {title, content, reference}
        try {
            let con = await connection();
            let sql = `INSERT INTO [Post] (title, content, reference) \n`
                sql += `VALUES ('${body.title}', '${body.content}', '${body.reference}')`;
            return con.query(sql);
        } catch (error) {
            throw error;
        }
    },
}