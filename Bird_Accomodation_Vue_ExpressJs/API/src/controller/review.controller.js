const reviewModel = require('../models/review.model');
const { dateFormat } = require('../config/config');

module.exports = {
    getAllReviews: async (req, res, next) => {
        try {
            const result = await reviewModel.getAllReviews();
            if (result !== null){
                const reviewList = result.map(item => ({
                    review_id: item.review_id,
                    user_name: item.name,
                    user_img: item.user_img,
                    date_from: dateFormat(item.date_from),
                    date_to: dateFormat(item.date_to),
                    status: item.status,
                    rating: item.rating,
                    comment: item.comment
                }));
                res.status(200).send({
                    exitcode: 0,
                    message: "Get review list successfully",
                    reviews: reviewList
                })
            } else {
                res.status(404).send({
                    exitcode: 101,
                    message: "There is no review"
                })
            }
        } catch (error) {
            console.log(error.message);
            res.status(500).send("Internal server error");
        }
    },
    filterReview: async (req, res, next) => {
        const { star } = req.body;
        const result = await reviewModel.filterReview(star);
        if (result !== null && result.length !== 0){
            const reviewList = result.map(item => ({
                review_id: item.review_id,
                user_name: item.name,
                user_img: item.user_img,
                date_from: dateFormat(item.date_from),
                date_to: dateFormat(item.date_to),
                status: item.status,
                rating: item.rating,
                comment: item.comment
            }));
            res.status(200).send({
                exitcode: 0,
                message: "Get review list successfully",
                reviews: reviewList
            })
        } else {
            res.status(404).send({
                exitcode: 101,
                message: "There is no review"
            })
        }
    },
    addReview: async (req, res, next) => {
        const { user_id, booking_id, rating, comment } = req.body;
        const reviewDetail = {
            user_id: user_id,
            booking_id: booking_id,
            rating: rating,
            comment: comment
        }
        const result = await reviewModel.addReview(reviewDetail);
        if (result !== null){
            res.status(200).send({
                exitcode: 0,
                message: "Add review successfully"
            })
        } else {
            res.status(200).send({
                exitcode: 101,
                message: "Add review failed"
            })
        }
    },
    editReview: async (req, res, next) => {
        const { review_id } = req.params;
        const { rating, comment } = req.body;
        const reviewDetail = {
            rating: rating,
            comment: comment,
            review_id
        }
        const result = await reviewModel.editReview(reviewDetail);
        if (result !== null){
            res.status(200).send({
                exitcode: 0,
                message: "Edit review successfully"
            })
        } else {
            res.status(400).send({
                exitcode: 101,
                message: "Edit review failed"
            })
        }
    },
    deleteReview: async (req, res, next) => {
        const { review_id } = req.params;
        const result = await reviewModel.deleteReview(review_id);
        if (result !== null){
            res.status(200).send({
                exitcode: 0,
                message: "Delete review successfully"
            })
        } else {
            res.status(400).send({
                exitcode: 101,
                message: "Delete review failed"
            })
        }
    },
}