const express = require('express')
const report = require('../controller/report.controller')


const router = express.Router();

router.route('/detail')
    .patch(report.getReportDetail);

// Need to change database 
router.route('/')
    .get(report.getAllReport)

router.route('/newReport')
    .post(report.addNewReport)


module.exports = router;