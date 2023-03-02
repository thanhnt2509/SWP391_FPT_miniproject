const birdModel = require('../models/bird.model');

module.exports = {
    getAllRegistedBird: async (req, res, next) => {
        try {
            const { user_id } = req.params;
            
        } catch (error) {
            next(error);
        }
    },
}