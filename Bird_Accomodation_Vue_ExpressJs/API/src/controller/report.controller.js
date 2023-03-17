const reportModel = require('../models/report.model');


module.exports = {
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
                // need to update this function, because it's high workload
                // const updateReport = await reportModel.updateReport(booking_id, {date, service_report_text} ,reportExist)
                // res.status(201).send("update report successfully !!")
                res.status(400).send("Report are existed !");
            }else{
                const { affected, dreport_id } = await reportModel.addNewReport(booking_id, { date, service_report_text});
                const reportImages = await reportModel.addNewReportImage(dreport_id, imagePath);
                // console.log(affected)
                // console.log(dreport_id)
                // console.log(reportImages);
                
                res.status(200).send("Add new report (text, images) successfully !")
            }
            // console.log(req.body)
            // console.log(req.files)

        } catch (error) {
           console.error(error.message);
            res.status(500).send("Internal server error");
        }
    },
    updateReportList: async (req, res, next) => {
        const { booking_id, date,  updateList } = req.body;
        try {
            const reportExist = await reportModel.isExistReportDate(booking_id, date);
            if(reportExist.length !== 0){
                console.log(`report are existed !`);
                console.log(reportExist);
                // need to update this function, because it's high workload
                // const updateReport = await reportModel.updateReport(booking_id, {date, service_report_text} ,reportExist)
                // res.status(201).send("update report successfully !!")
                res.status(400).send("Report are existed !");
            }else {
                const result = await reportModel.updateBookingServiceByBooking_id(booking_id, updateList);
                // console.log(booking_id);
                // console.log(updateList);
                res.status(200).send("Update report list successfully !");
            }
        }catch (e) {
            console.log(e.message)
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