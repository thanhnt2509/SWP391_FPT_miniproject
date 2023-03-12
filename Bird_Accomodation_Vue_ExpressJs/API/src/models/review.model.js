const config = require("../../src/config/config");

module.exports = {
    getAllReviews: async () => {
        let con = await config.knexConnection();
        const result = await con('Review')
            .select('r.review_id', 'u.name', 'u.user_img', 'b.date_from', 'b.date_to', 'b.status', 'r.rating', 'r.comment')
            .from('Review as r')
            .join('User as u', 'r.user_id', 'u.user_id')
            .join('Booking as b', 'r.booking_id', 'b.booking_id')
            .orderBy('r.rating', 'desc');
        return result || null;
    },
    filterReview: async (star) => {
        let con = await config.knexConnection();
        const result = await con('Review')
            .select('r.review_id', 'u.name', 'u.user_img', 'b.date_from', 'b.date_to', 'b.status', 'r.rating', 'r.comment')
            .from('Review as r')
            .join('User as u', 'r.user_id', 'u.user_id')
            .join('Booking as b', 'r.booking_id', 'b.booking_id')
            .where('r.rating', '=', star)
            .orderBy('r.rating', 'desc');
        return result || null;
    },
    addReview: async (data) => {
        let con = await config.knexConnection();
        return await con('Review')
            .insert({
                user_id: data.user_id,
                booking_id: data.booking_id,
                rating: data.rating,
                comment: data.comment
            }) || null;
    },
    editReview: async (data) => {
        let con = await config.knexConnection();
        return await con('Review')
            .where('review_id', data.review_id)
            .update({
                rating: data.rating,
                comment: data.comment
            }) || null;
    },
    deleteReview: async (review_id) => {
        let con = await config.knexConnection();
        return await con('Review')
            .where('review_id', review_id)
            .del() || null;
    },
}