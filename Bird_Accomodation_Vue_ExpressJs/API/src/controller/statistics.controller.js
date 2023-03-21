const statistics = require('../models/statistics.model')

module.exports = {
    getTotalRevenueDay: async (req, res) => {
        try {
            const result = await statistics.getTotalRevenueDay();
            if(result) {
                res.status(200).json(result);
            } else {
                res.status(404).json({message: 'Not found'});
            }
        }catch (e) {
            console.log(e)
            res.status(500).json({message: 'Internal server error'});
        }
    }
}