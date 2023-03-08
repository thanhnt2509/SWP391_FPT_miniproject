const reportModel = require('../models/report.model');

module.exports = {
    getReportDetail: async (req, res, next) => {
        try {
            const { user_id, booking_id } = req.body;
            const result = await reportModel.getReportDetail(user_id, booking_id);
            if (result.length === 0) {
                throw new ErrorHandler(404, 'No report found');
            } else {
                res.status(200).send({
                    exitcode: 0,
                    message: "Get report detail successfully",
                    reports: result
                });
            }
        } catch (error) {
            next(error);
        }
    },


    //DailyReport
    getAllReport: async (req, res, next) => {
        try {
            const { booking_id } = req.body;
            const result = await reportModel.getAllReport(booking_id);
            if (result.length === 0) {
                throw new ErrorHandler(404, 'No report found');
            } else {
                const reportList = result.map(item => ({
                    date: new Date(item.date).toISOString().slice(0, 10),
                    service_report_image: item.service_report_image,
                    service_report_text: item.service_report_text,
                    content: item.content
                }));
                res.status(200).send({
                    exitcode: 0,
                    message: 'Get all reports successfully',
                    reports: reportList // sửa lại thành reportList
                });
            }

        } catch (error) {
            next(error);
        }
    },
    addNewReport: async (req, res, next) => {
        try {
            const { booking_id, service_report_image, service_report_text } = req.body;
            const result = await reportModel.addNewReport(booking_id, service_report_image, service_report_text);
            if (result === 0) {
                throw new ErrorHandler(400, 'Failed to add new report');
            } else {
                res.status(200).send({
                    exitcode: 0,
                    message: 'Add new report successfully',
                });
            }
        } catch (error) {
            next(error);
        }
    }

};