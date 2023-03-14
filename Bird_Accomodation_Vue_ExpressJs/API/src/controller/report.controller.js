const reportModel = require('../models/report.model');
const { ErrorHandler } = require('../middlewares/errorHandler.mdw');
const { dateFormat } = require('../config/config');

module.exports = {
    getReportDetail: async (req, res, next) => {
        try {
            const { booking_id } = req.body;
            const result = await reportModel.getReportDetail(booking_id);
            if (result === null || result.length === 0) {
                throw new ErrorHandler(404, 'No report found');
            } else {
                const reportDetail = result.map(item => ({
                    report_id: item.dreport_id,
                    date: dateFormat(item.date),
                    report_text: item.service_report_text,
                    report_img: item.service_report_image,
                }));
                res.status(200).send({
                    exitcode: 0,
                    message: 'Get report detail successfully',
                    report: reportDetail
                });
            }
        } catch (error) {
           console.log(error.message);
            res.status(500).send("Internal server error");
        }
    },
    //DailyReport
    getAllReport: async (req, res, next) => {
        try {

        } catch (error) {
           console.log(error.message);
            res.status(500).send("Internal server error");
        }
    },
    addNewReport: async (req, res, next) => {
        try {

        } catch (error) {
           console.log(error.message);
            res.status(500).send("Internal server error");
        }
    },
    getReportByBookingId: async (req, res, next) => {
        try {

        } catch (error) {
           console.log(error.message);
            res.status(500).send("Internal server error");
        }
    },
};