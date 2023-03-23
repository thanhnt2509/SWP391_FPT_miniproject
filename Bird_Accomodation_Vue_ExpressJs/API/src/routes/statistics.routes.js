const express = require('express')
const stat = require('../controller/statistics.controller')

const router = express.Router()

router.route("/total-revenue/day")
    .get(stat.getTotalRevenueDay)

router.route("/total-revenue/month")
    .get(stat.getTotalRevenueMonth)

router.route("/total-revenue/year")
    .get(stat.getTotalRevenueYear)

router.route("/use-services/day")
    .get(stat.getServiceByDay)

router.route("/use-services/month")
    .get(stat.getServiceByMonth)

router.route("/use-services/year")
    .get(stat.getServiceByYear)

module.exports = router