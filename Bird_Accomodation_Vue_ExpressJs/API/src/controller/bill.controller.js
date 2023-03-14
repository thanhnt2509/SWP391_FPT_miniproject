const billModel = require('../models/bill.model');
const { ErrorHandler } = require('../middlewares/errorHandler.mdw');
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
            const bill = await billModel.getBill(booking_id);
            const billService = await billModel.getBillServiceDetail(booking_id);
            if (billService === null && bill === null || billService.length === 0 && bill.length === 0) {
                throw new ErrorHandler(404, 'Bill not found');
            } else {
                const serviceList = billService.map(item => ({
                    service_id: item.service_id,
                    service_name: item.name,
                    booked_price: item.booked_price,
                }));

                const billInfo = {
                    user: {
                        user_name: bill[0].name,
                        address: bill[0].address,
                        phone: bill[0].phone,
                    },
                    bird: {
                        bird_id: bill[0].bird_id,
                        bird_name: bill[0].bird_name,
                    },
                    booking: {
                        booking_id: bill[0].booking_id,
                        date_from: dateFormat(bill[0].date_from),
                        date_to: dateFormat(bill[0].date_to),
                        status: bill[0].status,
                    },
                    services: serviceList,
                    bill: {
                        total_amount: bill[0].total_amount,
                        checkout_date: bill[0].checkout_date,
                    }
                };
                res.status(200).send({
                    exitcode: 0,
                    message: 'Get bill successfully',
                    billInfo
                });
            }
        } catch (error) {
           console.log(error.message);
            res.status(500).send("Internal server error");
        }
    },
}