const reviewModel = require('../models/review.model');

module.exports = {
    getAllReviews: async (req, res, next) => {
        try {
            // code here
            const result = await reviewModel.getAllReviews();
            if(result.length > 0) {
                res.status(200).json(result);
            }else{
                res.status(404).send("No reviews found");
            }
        } catch (error) {
            console.log(error.message);
            res.status(500).send("Internal server error");
        }
    },
    createReview: async (req, res, next) => {
        try {
            // code here
            const { booking_id, comment, rating, user_id } = req.body;
            const result = await reviewModel.createReview({ booking_id, comment, rating, user_id });
            if(result > 0) {
                res.status(200).send("Create review successfully");
            }else{
                res.status(404).send("Create review failed");
            }
        } catch (error) {
            console.log(error.message);
            res.status(500).send("Internal server error");
        }
    }
}