const express = require('express')
const report = require('../controller/report.controller')
const { verifyAdmin } = require('../middlewares/verifyAdmin.mdw')
const multerInstance = require('../middlewares/multer')

const router = express.Router();

// router.route('/')
//     .get(report.getAllReport)
router.route('/updateFeedback/:dreport_id')
    .post(report.updateFeedback)

router.route('/:booking_id')
    .get(report.getReportByBookingId)

router.route('/newReport')
    .post(verifyAdmin, multerInstance.uploadReport.array('files') , report.addNewReport)

router.route('/newReport/updateReportList')
    .post(verifyAdmin, report.updateReportList)



module.exports = router;