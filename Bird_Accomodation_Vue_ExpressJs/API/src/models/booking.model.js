const db = require("../utils/dbConnect");

module.exports = {
    changeBookingStatus: async (bookingId, status) => {
        return await db('Booking')
            .where('booking_id', bookingId)
            .update({
                status: status
            }) || null;
    },
    getAllBookings: async () => {
        const result = await db.select("b.*", "bi.bird_name", "u.address", "u.name")
            .from("Booking as b")
            .join("Bird as bi", "b.bird_id", "bi.bird_id")
            .join("User as u", "b.user_id", "u.user_id");
        return result || null;
    },
    getBookingServices: async (bookingId) => {
        const result = await db.select("s.service_id", "s.name", "s.price", "s.description")
            .from("Booking as b")
            .join("BookingDetail as bd", "b.booking_id", "bd.booking_id")
            .join("Service as s", "bd.service_id", "s.service_id")
            .where({
                "b.booking_id": bookingId
            });
        return result || null;
    },
    getMyBookings: async (email) => {
        const result = await db.select("b.*", "bi.bird_name", "u.address")
            .from("Booking as b")
            .join("Bird as bi", "b.bird_id", "bi.bird_id")
            .join("User as u", "b.user_id", "u.user_id")
            .where("b.user_id", db.select("user_id").from("User").where({email: email}));
        return result || null;
    },
    addNewBooking: async (data) => {
        try {
            await db.transaction(async (trx) => {
                const booking_id = await trx('Booking').insert({
                    user_id: data.user_id,
                    bird_id: data.bird_id,
                    date_from: data.date_from,
                    date_to: data.date_to,
                    status: data.status
                }).returning('booking_id').then((id) => {
                    return id[0].booking_id;
                });
                const services = await trx('Service')
                    .select('service_id', 'price')
                    .whereIn('service_id', data.services);
                const bookingDetails = services.map((service) => {
                    return {
                        booking_id: booking_id,
                        service_id: service.service_id,
                        booked_price: service.price
                    }
                });
                await trx('BookingDetail').insert(bookingDetails);
            });
            return true;
        } catch (error) {
            return false;
        }
    },
    getBooking: async (booking_status) => {
        //code here
    },
    checkoutBooking: async (payload) => {
        const { booking_id, checkout_date, payment_method, checkout_img_filename } = payload;
        const successCheckoutStatus = 1;
        const returnData = await db('Bill')
            .where('booking_id', booking_id)
            .update({
                checkout_date: checkout_date,
                payment_status: successCheckoutStatus,
                payment_method: payment_method,
                checkout_img: checkout_img_filename
            });
        return returnData || null;
    }
}