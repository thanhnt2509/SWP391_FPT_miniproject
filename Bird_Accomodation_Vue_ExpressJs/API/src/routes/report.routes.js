const express = require('express')
const report = require('../controller/report.controller')


const router = express.Router();

router.route('/detail')
    .get(report.getReportDetail);

// DailyReport
router.route('/')
    .get(report.getAllReport)

router.route('/newReport')
    .post(report.addNewReport)


module.exports = router;