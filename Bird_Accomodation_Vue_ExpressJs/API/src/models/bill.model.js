const db = require('../utils/dbConnect');

module.exports = {
    createBill: async (data) => {

    },
    getBill: async (booking_id) => {
        const returnData = await db('Bill AS b')
            .join('Booking AS bk', 'b.booking_id', 'bk.booking_id')
            .join('User AS us', 'bk.user_id', 'us.user_id')
            .join('Bird AS br', 'bk.bird_id', 'br.bird_id')
            .where('bk.booking_id', booking_id)
            .select(
                'us.name',
                'us.address',
                'us.phone',
                'br.bird_id',
                'br.bird_name',
                'bk.date_from',
                'bk.date_to',
                'bk.status',
                'b.total_amount'
            );
        return returnData || null;
    },
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
}