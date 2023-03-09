const reportModel = require('../models/report.model');
const { dateFormat } = require('../config/config');

module.exports = {
    getReportDetail: async (req, res, next) => {
        
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
            const { booking_id, 
                services } = req.body;
            const reportDetail = {
                booking_id: booking_id,
                services: services
            }
            // console.log(reportDetail);
            const result = await reportModel.addNewReport(reportDetail);
            if (result){
                res.status(200).send({
                    exitcode: 0,
                    message: 'Add new report successfully'
                });
            } else {
                res.status(400).send({
                    exitcode: 1,
                    message: 'Add new report failed'
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