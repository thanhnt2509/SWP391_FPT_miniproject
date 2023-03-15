const db = require('../utils/dbConnect');

module.exports = {
    // createBill: async (data) => {

    // },
    // getBill: async (booking_id) => {
    //     const returnData = await db('Bill AS b')
    //         .join('Booking AS bk', 'b.booking_id', 'bk.booking_id')
    //         .join('User AS us', 'bk.user_id', 'us.user_id')
    //         .join('Bird AS br', 'bk.bird_id', 'br.bird_id')
    //         .where('bk.booking_id', booking_id)
    //         .select(
    //             'us.name',
    //             'us.address',
    //             'us.phone',
    //             'br.bird_id',
    //             'br.bird_name',
    //             'bk.date_from',
    //             'bk.date_to',
    //             'bk.status',
    //             'b.total_amount'
    //         );
    //     return returnData || null;
    // },
    getBillServiceDetail: async (booking_id) => {
        const returnData = await db('BookingDetail AS bd')
            .join('Service AS s', 'bd.service_id', 's.service_id')
            .where('bd.booking_id', booking_id)
            .select(
                's.service_id',
                's.name',
                'bd.booked_price'
            );
        return returnData || null;
    },
    publishBill: async (booking_id) => {
        let con = await config.connection();
        const transaction = con.transaction();
        await transaction.begin();
        try {
            await transaction.request()
                .input('booking_id', sql.Int, booking_id)
                .query(`INSERT INTO [Bill] (booking_id, total_amount, checkout_date) \n`
                    + `VALUES (@booking_id, 0, GETDATE())`);
            await transaction.commit();
        } catch (err) {
            console.log(err);
            await transaction.rollback();
        }
    },
    getTotalAmountBooking_id: async (booking_id) => {
        let con = await config.connection();
        const request = con.request();
        const returnData = await request
            .input("booking_id", sql.Int, booking_id)
            .query("SELECT SUM(booked_price) AS total_amount \n" +
                "FROM BookingDetail \n" +
                "WHERE booking_id = @booking_id");
        return (await returnData).recordset || null;
    },
}