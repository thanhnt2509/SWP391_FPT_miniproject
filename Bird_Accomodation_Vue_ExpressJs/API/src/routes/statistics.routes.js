const express = require('express')
const stat = require('../controller/statistics.controller')

const router = express.Router()

router.route("/total-revenue/day")
    .get(stat.getTotalRevenueDay)

router.route("/total-revenue/month")
    .get(stat.getTotalRevenueMonth)

router.route("/total-revenue/year")
    .get(stat.getTotalRevenueYear)

<<<<<<< HEAD
router.route("/use-services/day")
    .get(stat.getServiceByDay)

router.route("/use-services/month")
    .get(stat.getServiceByMonth)

router.route("/use-services/year")
    .get(stat.getServiceByYear)
=======
router.route("/most-used-service")
    .get(stat.getTheMostUsedService)

router.route("/completion-rate/quantity-remain")    // wrong output
    .get(stat.getCompletionRateOfQuantityAndRemain)

router.route("/bird-type-frequently-booked")
    .get(stat.getBirdTypeFrequentlyBooked)

router.route("/completion-rate")       // wrong output -> data is not correct
    .get(stat.getCompletionRate)

//Mange transaction
router.route("/transaction/number-booking-status")
    .get(stat.getNumberOfBookingInEachStatusInThisMonth)

router.route("/transaction/number-bill-status")
    .get(stat.getNumberOfBillsInEachPaymentMethod)

router.route("/transaction/number-booking-month") // wrong output
    .get(stat.getNumberOfBookingsInEachMonth)

router.route("/transaction/number-bird-month")  // wrong output
    .get(stat.getNumberOfBirdBookedInThisMonth)

//Need more data
// router.route("/transaction/top-5-user")
//     .get(stat.getTop5UserWhoSpendTheMost)

//Manage Account
router.route("/account/number-account-status")// wrong output
    .get(stat.getNumberOfUserInEachStatus)

router.route("/account/number-account-role")// wrong output
    .get(stat.getNumberOfUserInEachRole)
>>>>>>> 186e5bedaa628e4fdd2b331239890de4f88b664c

module.exports = router