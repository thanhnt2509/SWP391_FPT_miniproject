const statistics = require('../models/statistics.model')
const config = require('../config/config')

module.exports = {
    getTotalRevenueDay: async (req, res) => {
        try {
            let result = await statistics.getTotalRevenueDay();
            if (result) {
                result = result.map(item  => ({
                    ...item,
                    checkout_date: config.dateFormat(new Date(item.checkout_date))
                }))
                res.status(200).json(result);
            } else {
                res.status(404).json({ message: 'Not found' });
            }
        } catch (e) {
            console.log(e)
            res.status(500).json({ message: 'Internal server error' });
        }
    },
    //GET the most used service
    getTheMostUsedService: async (req, res) => {
        try {
            const result = await statistics.getTheMostUsedService();
            if (result) {
                res.status(200).json(result);
            } else {
                res.status(404).json({ message: 'Not found' });
            }
        } catch (e) {
            console.log(e)
            res.status(500).json({ message: 'Internal server error' });
        }
    },
    //GET completion rate of quantity and remain
    getCompletionRateOfQuantityAndRemain: async (req, res) => { // need service_name and completion_rate
        try {
            const result = await statistics.getCompletionRateOfQuantityAndRemain();
            if (result) {
                res.status(200).json(result);
            } else {
                res.status(404).json({ message: 'Not found' });
            }
        } catch (e) {
            console.log(e)
            res.status(500).json({ message: 'Internal server error' });
        }
    },
    //GET bird type frequently booked
    getBirdTypeFrequentlyBooked: async (req, res) => {
        try {
            const result = await statistics.getBirdTypeFrequentlyBooked();
            if (result) {
                res.status(200).json(result);
            } else {
                res.status(404).json({ message: 'Not found' });
            }
        } catch (e) {
            console.log(e)
            res.status(500).json({ message: 'Internal server error' });
        }
    },
    //GET  completion rate
    getCompletionRate: async (req, res) => {
        try {
            const result = await statistics.getCompletionRate();
            if (result) {
                res.status(200).json(result);
            } else {
                res.status(404).json({ message: 'Not found' });
            }
        } catch (e) {
            console.log(e)
            res.status(500).json({ message: 'Internal server error' });
        }
    },

    //Manage transaction
    //GET number of booking in each status in this month
    getNumberOfBookingInEachStatusInThisMonth: async (req, res) => {
        try {
            const result = await statistics.getNumberOfBookingInEachStatusInThisMonth();
            if (result) {
                res.status(200).json(result);
            } else {
                res.status(404).json({ message: 'Not found' });
            }
        } catch (e) {
            console.log(e)
            res.status(500).json({ message: 'Internal server error' });
        }
    },
    //GET number of Bills in each payment method
    getNumberOfBillsInEachPaymentMethod: async (req, res) => {
        try {
            const result = await statistics.getNumberOfBillInEachPaymentMethod();
            if (result) {
                res.status(200).json(result);
            } else {
                res.status(404).json({ message: 'Not found' });
            }
        } catch (e) {
            console.log(e)
            res.status(500).json({ message: 'Internal server error' });
        }
    },
    //GET number of booking in each month in this year (base on date_from)
    getNumberOfBookingsInEachMonth: async (req, res) => {
        try {
            const result = await statistics.getNumberOfBookingsInEachMonth();
            if (result) {
                res.status(200).json(result);
            } else {
                res.status(404).json({ message: 'Not found' });
            }
        } catch (e) {
            console.log(e)
            res.status(500).json({ message: 'Internal server error' });
        }
    },
    //GET number of bird booked in this month
    getNumberOfBirdBookedInThisMonth: async (req, res) => {
        try {
            const result = await statistics.getNumberOfBirdBookedInThisMonth();
            if (result) {
                res.status(200).json(result);
            } else {
                res.status(404).json({ message: 'Not found' });
            }
        } catch (e) {
            console.log(e)
            res.status(500).json({ message: 'Internal server error' });
        }
    },
    //GET top 5 user who spend the most
    getTop5UserWhoSpendTheMost: async (req, res) => {
        try {
            const result = await statistics.getTop5UserWhoSpendTheMost();
            if (result) {
                res.status(200).json(result);
            } else {
                res.status(404).json({ message: 'Not found' });
            }
        } catch (e) {
            console.log(e)
            res.status(500).json({ message: 'Internal server error' });
        }
    },

    //Manage Account
    //GET number of user in each role
    getNumberOfUserInEachRole: async (req, res) => {
        try {
            const result = await statistics.getNumberOfUser();
            if (result) {
                res.status(200).json(result);
            } else {
                res.status(404).json({ message: 'Not found' });
            }
        } catch (e) {
            console.log(e)
            res.status(500).json({ message: 'Internal server error' });
        }
    },
    //GET number of user in each status
    getNumberOfUserInEachStatus: async (req, res) => {
        try {
            const result = await statistics.getNumberOfUserInEachStatus();
            if (result) {
                res.status(200).json(result);
            } else {
                res.status(404).json({ message: 'Not found' });
            }
        } catch (e) {
            console.log(e)
            res.status(500).json({ message: 'Internal server error' });
        }
    },

    getTotalRevenueMonth: async (req, res) => {
        try {
            const result = await statistics.getTotalRevenueMonth();
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
            const result = await statistics.getTotalRevenueYear();
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
            const result = await statistics.getServiceByDate();
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
            const result = await statistics.getServiceByMonth();
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
            const result = await statistics.getServiceByYear();
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
