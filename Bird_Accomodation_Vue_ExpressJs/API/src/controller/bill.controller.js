const billModel = require('../models/bill.model');
const { dateFormat } = require('../config/config');

module.exports = {
    createBill: async (req, res, next) => {
        try{
            const { booking_id, user_id } = req.body;
        } catch (error) {
            next(error);
        }
    },
    getBill: async (req, res, next) => {
        try {
            const { booking_id } = req.params;
            const billContent = await billModel.getBillContentOfBooking_id(booking_id);
            const billService = await billModel.getBillServiceOfBooking_id(booking_id);
            billContent[0].service = billService.service
            billContent[0].total_service_amount = billService.total_service_amount
            console.log(`bill content`);
            console.log(billContent);
            console.log(`detail booking content service`);
            console.log(billContent[0].service);
            // console.log(`bill service`);
            // console.log(billService);
            res.status(200).send(billContent)
        } catch (error) {
           console.log(error.message);
           res.status(500).send("Internal server error");
        }
    },
    createBill: async (req, res, next) => {
        const { booking_id } = req.params;

        try {
            // get total amount of booking_id
        }catch (error) {
            console.log(error.message);
            res.status(500).send("Internal server error");
        }
    },
}