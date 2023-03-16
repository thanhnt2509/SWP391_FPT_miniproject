const express = require('express')
const booking = require('../controller/booking.controller')
const { verifyAdmin } = require('../middlewares/verifyAdmin.mdw')
const multerInstance = require('../middlewares/multer');

const router = express.Router()

router.route('/')
    .get(booking.getAllBookings)
    .post(booking.createBooking)

router.route('/:booking_id/services')
    .get(booking.getBookingServices)

// stack on router /:booking_id/:state
router.route('/:booking_id/cancel')
    .put(booking.cancelBooking)

router.route('/:booking_id/:state')
    .put(verifyAdmin, booking.changeBookingStatus)

router.route('/:booking_id/checkout')
    .post(multerInstance.uploadCheckout.single('file') ,booking.checkoutBooking)




module.exports = router