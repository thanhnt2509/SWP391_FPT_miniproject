const express = require('express')
const stat = require('../controller/statistics.controller')

const router = express.Router()

router.route("/total-revenue/day")
    .get(stat.getTotalRevenueDay)

router.route("/most-used-service")
    .get(stat.getTheMostUsedService)

router.route("/completion-rate/quantity-remain")
    .get(stat.getCompletionRateOfQuantityAndRemain)

router.route("/bird-type-frequently-booked")
    .get(stat.getBirdTypeFrequentlyBooked)

router.route("/completion-rate")
    .get(stat.getCompletionRate)

//Mange transaction
router.route("/transaction/number-booking-status")
    .get(stat.getNumberOfBookingInEachStatusInThisMonth)

router.route("/transaction/number-bill-status")
    .get(stat.getNumberOfBillsInEachPaymentMethod)

router.route("/transaction/number-booking-month")
    .get(stat.getNumberOfBookingsInEachMonth)

router.route("/transaction/number-bird-month")
    .get(stat.getNumberOfBirdBookedInThisMonth)

//Need more data
// router.route("/transaction/top-5-user")
//     .get(stat.getTop5UserWhoSpendTheMost)

//Manage Account
router.route("/account/number-account-status")
    .get(stat.getNumberOfUserInEachStatus)

router.route("/account/number-account-role")
    .get(stat.getNumberOfUserInEachRole)

module.exports = router