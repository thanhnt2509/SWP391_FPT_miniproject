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
            next(error);
        }
    },
    //DailyReport
    getAllReport: async (req, res, next) => {
        try {
            const result = await reportModel.getAllReport();
            if (result.length === 0) {
                res.status(404).send({
                    exitcode: 1,
                    message: 'No report found'
                });
            } else {
                const reportList = result.map(item => ({
                    report_id: item.dreport_id,
                    date: dateFormat(item.date),
                    service_name: item.name,
                    report_text: item.service_report_text,
                    report_img: item.service_report_image,
                }));
                res.status(200).send({
                    exitcode: 0,
                    message: 'Get all reports successfully',
                    reports: reportList
                });
            }

        } catch (error) {
            next(error);
        }
    },
    addNewReport: async (req, res, next) => {
        try {
            const booking_id = req.body.booking_id;
            const services = req.body.services;
            const result = await reportModel.addNewReport(booking_id, services);

            if (result < 0) {
                throw new ErrorHandler(400, 'Failed to add new report');
            } else if (result === 0) {
                res.status(200).send({
                    exitcode: 0,
                    message: 'Add new report successfully'
                });
            } else {
                res.status(200).send({
                    exitcode: 0,
                    message: 'Update report successfully'
                });
            }
        } catch (error) {
            next(error);
        }
    },
    getReportByBookingId: async (req, res, next) => {
        try {
            const { booking_id } = req.params;
            const result = await reportModel.getReportByBookingId(booking_id);
            if (result.length === null) {
                res.status(404).send({
                    exitcode: 1,
                    message: 'No report found'
                });
            } else {
                const reportList = result.map(item => ({
                    report_id: item.dreport_id,
                    date: dateFormat(item.date),
                    service_name: item.name,
                    report_text: item.service_report_text,
                    report_img: item.service_report_image,
                }));
                res.status(200).send({
                    exitcode: 0,
                    message: 'Get all reports successfully',
                    reports: reportList
                });
            }
        } catch (error) {
            next(error);
        }
    },
};