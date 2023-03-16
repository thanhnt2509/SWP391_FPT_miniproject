const db = require('../utils/dbConnect');

module.exports = {
    getBillContentOfBooking_id: async (booking_id) => {
        const dataContent = await db
            .select(
                'u.name as user_name',
                'u.email',
                'u.address',
                'u.phone',
                'bi.bird_name',
                'bi.gender',
                'bi.image',
                'b.booking_id',
                'b.date_from',
                'b.date_to',
                'bil.bill_id',
                'bil.total_service_amount',
                'bil.checkout_date',
                'bil.payment_method',
                'bil.payment_status'
            )
            .from('Booking as b')
            .join('User as u', 'b.user_id', 'u.user_id')
            .join('Bird as bi', 'b.bird_id', 'bi.bird_id')
            .join('Bill as bil', 'bil.booking_id', 'b.booking_id')
            .where('b.booking_id', booking_id);

        const result = dataContent.map(data => ({
            user: {
                name: data.user_name,
                email: data.email,
                phone: data.phone,
                address: data.address
            },
            bird: {
                bird_name: data.bird_name,
                gender: data.gender,
                image: data.image
            },
            booking: {
                booking_id: data.booking_id,
                date_from: config.dateFormat(data.date_from),
                date_to: config.dateFormat(data.date_to),
            },
            bill: {
                bill_id: data.bill_id,
                total_amount: data.total_service_amount,
                checkout_date: config.dateFormat(data.checkout_date),
                payment_method: data.payment_method,
                payment_status: data.payment_status
            }
        }));

        return result;
    },

    getBillServiceOfBooking_id: async (booking_id) => {
        let service_total = 0;
        const dataService = await db
            .select(
                'bd.bdetail_id',
                'bd.service_id',
                's.name',
                's.isPack',
                's.image',
                'bd.booked_price',
                'bd.quantity',
                db.raw(
                    'CASE WHEN bd.quantity = 0 THEN bd.booked_price ELSE bd.quantity * bd.booked_price END AS total_amount'
                )
            )
            .from('BookingDetail as bd')
            .join('Service as s', 'bd.service_id', 's.service_id')
            .where({
                'bd.booking_id': booking_id,
                's.status': 1
            })

        // total of service
        dataService.forEach(data => {
            service_total += data.total_amount
        })

        // map data
        const result = {
            service: [],
            total_service_amount: service_total
        };

        dataService.forEach(data => {
            result.service.push({
                service_id: data.service_id,
                name: data.name,
                isPack: data.isPack,
                booked_price: data.booked_price,
                quantity: data.quantity
            });
        });

        return result;
    },
}