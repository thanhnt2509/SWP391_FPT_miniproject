const express = require('express')
const { getAllUser } = require('../modules/user_M')
const { getUserById } = require('../modules/user_M')
const { updateUserStatus } = require('../modules/user_M')
const { getAllServices } = require('../modules/user_M')
const { getAllBills } = require('../modules/user_M')
const { getAllBookings } = require('../modules/user_M')
const { getBookingDetail } = require('../modules/user_M')
const { getReviewByUserId } = require('../modules/user_M')
const { getDailyReport } = require('../modules/user_M')
const { getDailyFeedback } = require('../modules/user_M')
const { makeBooking } = require('../modules/user_M')
const { checkUserName } = require('../modules/user_M')

const router = express.Router();


// GET localhost:5000/users
// get all users
router.get('/users', async (req, res) => {
    // const data = await getAllCustomer()
    // console.log(data);

    res.json(await getAllUser())
})

// PUT localhost:5000/users/:userId/:status
// change user status
router.put('/:userId/:status', async (req, res) => {
    //status 0: unban, 1: ban
    res.json(await updateUserStatus(req.params.userId, req.params.status == 0 ? 'unban' : 'ban'))
})

// GET localhost:5000/users/:userId
// get user by id
router.get('/:userId', async (req, res) => {
    //get user with id = userId

    res.json(await getUserById(req.params.userId))
})

// GET localhost:5000/services
// get all services
router.get('/services', async (req, res) => {
    res.json(await getAllServices())
})

// GET localhost:5000/bills
// get all bills
router.get('/bills', async (req, res) => {
    res.json(await getAllBills())
})

// GET localhost:5000/bookings
// get all bookings
router.get('/bookings', async (req, res) => {
    res.json(await getAllBookings())
})

// GET localhost:5000/bookings/:bookingId
// get booking detail
router.get('/bookings/:bookingId', async (req, res) => {
    res.json(await getBookingDetail(req.params.bookingId))
})

// GET localhost:5000/reviews/:userId
// get specific user's reviews
router.get('/reviews/:userId', async (req, res) => {
    res.json(await getReviewByUserId(req.params.userId))
})

// GET localhost:5000/daily_report/:birdId/:bookingId
// get daily report, params: birdId, bookingId
// router.get('/daily_report/:birdId/:bookingId', async (req, res) => {
//     res.json(await getDailyReport(req.params.birdId, req.params.bookingId))
// })

// GET localhost:5000/daily_feedback/:reportId
// get daily feedback, params: reportId
// router.get('/daily_feedback/:reportId', async (req, res) => {
//     res.json(await getDailyFeedback(req.params.reportId))
// })

// POST localhost:5000/bookings
// make a booking
router.post('/bookings', async (req, res) => {
    res.json(await makeBooking(req.body))
})

// POST localhost:5000/check_username
// validate username in db
router.post('/check_username', async (req, res) => {
    res.json(await checkUserName(req.body.username))
})



module.exports = router