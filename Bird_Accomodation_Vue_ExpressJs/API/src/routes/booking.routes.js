const express = require('express')
const booking = require('../controller/booking.controller')
const { verifyAdmin } = require('../middlewares/verifyAdmin.mdw')

const router = express.Router()

// only use for ADMIN ??
//GET: /api/booking
router.route('/')
    .get(verifyAdmin, booking.getAllBookings)

// only use for ADMIN ??
router.route('/:booking_id')
    .put(verifyAdmin, booking.changeBookingStatus)


module.exports = router