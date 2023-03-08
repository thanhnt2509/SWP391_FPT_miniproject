const express = require('express')
const reportDetail = require('../models/reportDetail.model');

const router = express.Router();

router.route('/:booking_id')
    .get(async (req, res) => {
        try {
            let data = await reportDetail.getReportDetailByBooking_Id(req.params.booking_id);

            //map to config date _ NEED TO put it to controller
            res.status(200).json(data.recordset.map((item) => ({
                dreport_id: item.dreport_id,
                name: item.name,
                description: item.description,
                service_report_image: item.service_report_image,
                service_report_text: item.service_report_text,
                date: new Date(item.date).toISOString().slice(0, 10),
                booked_price: item.booked_price,
                feedback_content: item.feedback_content
            })));
        } catch (error) {
            res.status(400).json(error);
        }
});

router.route('/:booking_id/:dreport_id')
        .get(async (req, res) => {
            try {
                let data = await reportDetail.getReportDetailByBookingID_DreportID(req.params.booking_id, req.params.dreport_id);
                if (data.recordset.length === 0) {
                    res.status(404).json({ message: 'ReportDetail not found' });
                } else {
                    //map to config date _ NEED TO put it to controller
                    res.status(200).json({...data.recordset[0], date: new Date(data.recordset[0].date).toISOString().slice(0, 10) });
                }
            } catch (error) {
                res.status(404).json(error);
            }
        });
// router.route('/booking_id/:dreport_id')
//         .delete(async (req, res)=> {
//             try {
//                 let data = await reportDetail.deleteReportDetail(req.params.booking_id, req.params.dreport_id);
//                 if (data.rowsAffected[0] === 0) {
//                     res.status(404).json({ message: 'reportDetail not found' });
//                 } else {
//                     res.status(200).json({ message: 'reportDetail deleted' });
//                 }
//             } catch (error) {
//                 res.status(404).json(error);
//             }
//         }),        

module.exports = router;    