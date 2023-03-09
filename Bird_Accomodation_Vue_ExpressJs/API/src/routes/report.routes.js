const express = require('express')
const report = require('../controller/report.controller')
const { verifyAdmin } = require('../middlewares/verifyAdmin.mdw')


const router = express.Router();

// Need to change database 
router.route('/')
    .get(report.getAllReport)

router.route('/:booking_id')
    .get(report.getReportByBookingId)

router.route('/detail')
    .get(report.getReportDetail);

router.route('/newReport')
    .post(verifyAdmin, report.addNewReport)


module.exports = router;