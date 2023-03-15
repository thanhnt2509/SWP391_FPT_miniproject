const reportModel = require('../models/report.model');


module.exports = {
    getReportDetail: async (req, res, next) => {
        try {

        } catch (error) {
           console.error(error.message);
            res.status(500).send("Internal server error");
        }
    },
    //DailyReport
    getAllReport: async (req, res, next) => {
        try {

        } catch (error) {
           console.error(error.message);
            res.status(500).send("Internal server error");
        }
    },
    addNewReport: async (req, res, next) => {
        try {
            // add to report
            const { booking_id, date, service_report_text } = req.body;
            const images = req.files;
            // console.log(req.files);

            const imagePath = images.map(item => ({
                imgPath: item.filename
            }))
            // console.log(imagePath);
            // check if report exist
            const reportExist = await reportModel.isExistReportDate(booking_id, date);
            if(reportExist.length !== 0){
                console.log(`report are existed !`);
                console.log(reportExist);
                const updateReport = await reportModel.updateReport(booking_id, {date, service_report_text} ,reportExist)
                res.status(201).send("update report successfully !!")
                return;
            }else{
                const { affected, dreport_id } = await reportModel.addNewReport(booking_id, { date, service_report_text});
                const reportImages = await reportModel.addNewReportImage(dreport_id, imagePath);
                console.log(affected)
                console.log(dreport_id)
                console.log(reportImages);
                
                res.status(200).send("Add new report successfully !")
            }
            // console.log(req.body)
            // console.log(req.files)

        } catch (error) {
           console.error(error.message);
            res.status(500).send("Internal server error");
        }
    },
    getReportByBookingId: async (req, res, next) => {
        try {
            const { booking_id } = req.params;
            const reportData = await reportModel.getReportByBookingId(booking_id);

            for(const report of reportData){
                report.images= await reportModel.getImageByDreportId(report.dreport_id);
            }
            res.status(200).send(reportData)
        } catch (error) {
           console.error(error.message);
            res.status(500).send("Internal server error");
        }
    },
};