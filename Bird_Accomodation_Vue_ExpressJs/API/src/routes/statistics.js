const express = require('express')
const stat = require('../controller/statistics.controller')

const router = express.Router()

router.route("/total-revenue/day")
    .get(stat.getTotalRevenueDay)

module.exports = router