const reviewModel = require('../models/review.model');

module.exports = {
    getAllReviews: async (req, res, next) => {
        try {
            // code here
        } catch (error) {
            console.log(error.message);
            res.status(500).send("Internal server error");
        }
    }
}