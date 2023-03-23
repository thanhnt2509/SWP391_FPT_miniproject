const statisticsModel = require('../models/statistics.model');

module.exports = {
    getTotalRevenueDay: async (req, res) => {
        try {
            const result = await statisticsModel.getTotalRevenueDay();
            if(result) {
                res.status(200).json(result);
            } else {
                res.status(404).json({message: 'Not found'});
            }
        }catch (e) {
            console.log(e)
            res.status(500).json({message: 'Internal server error'});
        }
    },

    getTotalRevenueMonth: async (req, res) => {
        try {
            const result = await statisticsModel.getTotalRevenueMonth();
            if(result){
                res.status(200).json(result);
            } else{
                res.status(404).json({message: 'Not found'});
            }
        } catch (e) {
            console.log(e)
            res.status(500).json({message: 'Internal server error'});
        }
    },

    getTotalRevenueYear: async (req, res) => {
        try {
            const result = await statisticsModel.getTotalRevenueYear();
            if(result){
                res.status(200).json(result);
            } else{
                res.status(404).json({message: 'Not found'});
            }
        } catch (e) {
            console.log(e)
            res.status(500).json({message: 'Internal server error'});
        }
    },

    getServiceByDay: async(req, res) =>{
        try {
            const result = await statisticsModel.getServiceByDate();
            if(result){
                res.status(200).json(result);
            } else{
                res.status(404).json({message: 'Not found'});
            }
        } catch (e) {
            console.log(e)
            res.status(500).json({message: 'Internal server error'});
        }
    },

    getServiceByMonth: async(req, res) =>{
        try {
            const result = await statisticsModel.getServiceByMonth();
            if(result){
                res.status(200).json(result);
            } else{
                res.status(404).json({message: 'Not found'});
            }
        } catch (e) {
            console.log(e)
            res.status(500).json({message: 'Internal server error'});
        }
    },

    getServiceByYear: async(req, res) =>{
        try {
            const result = await statisticsModel.getServiceByYear();
            if(result){
                res.status(200).json(result);
            } else{
                res.status(404).json({message: 'Not found'});
            }
        } catch (e) {
            console.log(e)
            res.status(500).json({message: 'Internal server error'});
        }
    },
    
}