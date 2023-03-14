const db = require("../utils/dbConnect");

module.exports = {
    getReportDetail: async (booking_id) => {
        const result = await db("DailyReport")
            .where({ booking_id: booking_id })
        return result || null;
    },
    //DailyReport
    getAllReport: async () => {
        const result = await db("DailyReport")
            .join("BookingDetail", "DailyReport.bdetail_id", "BookingDetail.bdetail_id")
            .join("Service", "BookingDetail.service_id", "Service.service_id")
            .select("DailyReport.*", "Service.name")
        return result || null;
    },
    // addNewReport: async (booking_id, services) => {
    //     let con = null;
    //     let transaction = null;
    //     try {
    //         con = await config.connection();
    //         transaction = new con.Transaction();
    //         await transaction.begin();
    //         let reportCount = -1;

    //         for (const service of services) {
    //             let getBookingDetailID = await transaction.request()
    //                 .input("booking_id", con.Int, booking_id)
    //                 .input("service_id", con.Int, service.service_id)
    //                 .query(`SELECT bdetail_id
    //                         FROM BookingDetail
    //                         WHERE booking_id = @booking_id AND service_id = @service_id`);
    //             let bdetail_id = getBookingDetailID.recordset[0].bdetail_id;

    //             // Check if report already exists for the given bdetail_id and date
    //             let checkReportExists = await transaction.request()
    //                 .input("bdetail_id", con.Int, bdetail_id)
    //                 .query(`SELECT COUNT(*) AS report_count
    //                         FROM DailyReport
    //                         WHERE bdetail_id = @bdetail_id AND date = CONVERT(date, GETDATE())`);
    //             reportCount = checkReportExists.recordset[0].report_count;

    //             if (reportCount > 0) {
    //                 // Report already exists, update the existing record
    //                 let updateReport = await transaction.request()
    //                     .input("bdetail_id", con.Int, bdetail_id)
    //                     .input("service_report_image", con.NVarChar, service.service_report_image)
    //                     .input("service_report_text", con.NVarChar, service.service_report_text)
    //                     .query(`UPDATE DailyReport
    //                             SET service_report_image = @service_report_image, service_report_text = @service_report_text
    //                             WHERE bdetail_id = @bdetail_id AND date = CONVERT(date, GETDATE())`);
    //             } else {
    //                 // Report doesn't exist, insert a new record
    //                 let insertReport = await transaction.request()
    //                     .input("bdetail_id", con.Int, bdetail_id)
    //                     .input("service_report_image", con.NVarChar, service.service_report_image)
    //                     .input("service_report_text", con.NVarChar, service.service_report_text)
    //                     .query(`INSERT INTO DailyReport (bdetail_id, date, service_report_image, service_report_text)
    //                             VALUES (@bdetail_id, CONVERT(date, GETDATE()), @service_report_image, @service_report_text)`);
    //             }
    //         }
    //         await transaction.commit();
    //         // console.log(reportCount);
    //         return reportCount;
    //     } catch (error) {
    //         console.log(error);
    //         if (transaction) {
    //             await transaction.rollback();
    //         }
    //         throw error;
    //     } finally {
    //         if (con) {
    //             con.close();
    //         }
    //     }
    // },
    getReportByBookingId: async (booking_id) => {
        const result = await db("DailyReport")
            .join("BookingDetail", "DailyReport.bdetail_id", "BookingDetail.bdetail_id")
            .join("Service", "BookingDetail.service_id", "Service.service_id")
            .where({ booking_id: booking_id })
            .select("DailyReport.*", "Service.name")
        return result || null;
    },
};