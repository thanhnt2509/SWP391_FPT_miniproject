const bookingModel = require('../models/booking.model');
const config = require("../../src/config/config");
const { validateRole } = require("../../src/models/account.model");
const { ErrorHandler } = require('../middlewares/errorHandler.mdw');
const { dateFormat } = require('../config/config');

module.exports = {
    changeBookingStatus: async (req, res, next) => {
        try {
            const booking_id = req.params.booking_id;
            const state = req.params.state;
            let status;
            console.log(`booking_id: ${booking_id}, state: ${state}`);
            switch (state) {
                case 'approve':
                    status = config.bookingStatus.APPROVED;
                    break;
                case 'check_in':
                    status = config.bookingStatus.ON_GOING;
                    break;
                case 'cancel':
                    status = config.bookingStatus.CANCLED;
                    break;
                case 'check_out':
                    status = config.bookingStatus.COMPLETED;
                    break;
                default:
                    return res.status(400).send({
                        message: 'Invalid state'
                    });
            }
            const result = await bookingModel.changeBookingStatus(booking_id, status);
            if (result.affectedRows === 0) {
                res.status(404).send({
                    exitcode: 1,
                    message: 'Booking not found'
                });
            } else {
                res.status(200).send({
                    exitcode: 0,
                    message: 'Change booking status successfully',
                    booking_id: booking_id,
                    state: state,
                    status: status
                });
            }
        } catch (error) {
            next(error);
        }
    },
    cancelBooking: async (req, res, next) => {
        const { booking_id } = req.params.booking_id;
        const cancelStatus = config.bookingStatus.CANCLED;
        try {
            const result = await bookingModel.changeBookingStatus(booking_id, cancelStatus);
            if (result.affectedRows === 0) {
                res.status(404).send({
                    exitcode: 1,
                    message: 'Booking not found'
                });
            } else {
                res.status(200).send({
                    exitcode: 0,
                    message: 'Cancel booking successfully',
                    booking_id: booking_id,
                    state: 'cancel',
                    status: cancelStatus
                });
            }
        } catch (error) {
            next(error);
        }
    },
    getAllBookings: async (req, res, next) => {
        try {
            const email = await req.payload.email;
            const validateResult = await validateRole(email);
            let result;
            if (validateResult === config.role.ADMIN) {
                result = await bookingModel.getAllBookings();
            } else {
                result = await bookingModel.getMyBookings(email);
            }
            if (result.length === 0) {
                throw new ErrorHandler(404, 'No booking found');
            } else {
                const bookingList = result.map(item => ({
                    booking_id: item.booking_id,
                    user_id: item.user_id,
                    bird_id: item.bird_id,
                    bird_name: item.bird_name,
                    user_name: item.name,
                    address: item.address,
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
    createBooking: async (req, res, next) => {
        try {
            const { user_id, bird_id, date_from, date_to, services } = req.body;
            const bookingStatus = config.bookingStatus.PENDING;
            const booking = {
                user_id: user_id,
                bird_id: bird_id,
                date_from: date_from,
                date_to: date_to,
                services: services,
                status: bookingStatus,
            };
            let check = await bookingModel.addNewBooking(booking);
            if (check === false) {
                throw new ErrorHandler(400, 'Add new booking failed');
            } else {
                res.status(201).send({
                    exitcode: 0,
                    message: 'Create new booking successfully',
                });
            }
        } catch (error) {
            next(error);
        }
    },
    getBookingByStatus: async (req, res, next) => {
        //code here
    },
}