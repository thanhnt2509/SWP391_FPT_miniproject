const bookingModel = require('../models/booking.model');
const { ErrorHandler } = require('../middlewares/errorHandler.mdw');
const { dateFormat } = require('../config/config');

module.exports = {
    changeBookingStatus: async (req, res, next) => {
        try {
            const { booking_id } = req.params;
            const { currentStatus } = req.body;
            if (currentStatus === undefined || currentStatus === null) {
                throw new ErrorHandler(400, 'Missing current status');
            } else {
                let newStatus = currentStatus++;
                if (newStatus > 3) {
                    res.status(400).send({
                        exitcode: 1,
                        message: 'Invalid status',
                    });
                }
                const result = await bookingModel.changeBookingStatus(booking_id, newStatus);
                if (result === 0) {
                    throw new ErrorHandler(404, 'Booking not found');
                } else {
                    res.status(200).send({
                        exitcode: 0,
                        message: 'Change booking status successfully',
                    });
                }
            }
        } catch (error) {
            next(error);
        }
    },
    getAllBookings: async (req, res, next) => {
        try {
            const result = await bookingModel.getAllBookings();
            if (result.length === 0) {
                throw new ErrorHandler(404, 'No booking found');
            } else {
                const bookingList = result.map(item => ({
                    booking_id: item.booking_id,
                    user_id: item.user_id,
                    bird_id: item.bird_id,
                    date_from: dateFormat(item.date_from),
                    date_to: dateFormat(item.date_to),
                    status: item.status,
                }));
                res.status(200).send({
                    exitcode: 0,
                    message: 'Get all bookings successfully',
                    bookings: bookingList
                });
            }
        } catch (error) {
            next(error);
        }
    },

    //DailyReport
    getAllReport: async (req, res, next) => {
        try {
            const { booking_id } = req.params;
            const result = await bookingModel.getAllReport(booking_id);
            if (result.length === 0) {
                throw new ErrorHandler(404, 'No report found');
            } else {
                const reportList = result.map(item => ({
                    date: item.date,
                    service_report_image: item.service_report_image,
                    service_report_text: item.service_report_text,
                    feedback_content: item.content
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
            const booking_id = req.params.booking_id;
            const { service_report_image, service_report_text } = req.body;
            const result = await bookingModel.addNewReport(booking_id, service_report_image, service_report_text);
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
}