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
    }
}