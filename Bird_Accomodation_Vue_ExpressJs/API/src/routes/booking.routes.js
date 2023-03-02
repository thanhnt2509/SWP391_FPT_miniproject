const express = require('express')
const booking = require('../controller/booking.controller')
const { verifyAdmin } = require('../middlewares/verifyAdmin.mdw')

const router = express.Router()

router.route('/')
    .get(verifyAdmin, booking.getAllBookings)
    
router.route('/:booking_id')
    .put(verifyAdmin, booking.changeBookingStatus)



module.exports = router