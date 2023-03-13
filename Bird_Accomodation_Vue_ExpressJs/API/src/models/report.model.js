const config = require("../../src/config/config");

module.exports = {
    getReportDetail: async (booking_id) => {
        let con = await config.connection();
        const request = new con.Request()
        const data = await request
            .input('booking_id', booking_id)
            .query("select * from DailyReport where booking_id = @booking_id")
        return data.recordset
    },
    //DailyReport
    getAllReport: async () => {
        let con = await config.connection();
        const request = new con.Request();
        const returnData = await request
            .query("SELECT dr.*, s.name \n " +
                "FROM DailyReport AS dr \n " +
                "JOIN BookingDetail AS bk ON dr.bdetail_id = bk.bdetail_id\n " +
                "JOIN Service AS s ON bk.service_id = s.service_id");

        return returnData.recordset;
    },
    addNewReport: async (booking_id, services) => {
        let con = null;
        let transaction = null;
        try {
            con = await config.connection();
            transaction = new con.Transaction();
            await transaction.begin();
            let reportCount = -1;

            for (const service of services) {
                let getBookingDetailID = await transaction.request()
                    .input("booking_id", con.Int, booking_id)
                    .input("service_id", con.Int, service.service_id)
                    .query(`SELECT bdetail_id
                            FROM BookingDetail
                            WHERE booking_id = @booking_id AND service_id = @service_id`);
                let bdetail_id = getBookingDetailID.recordset[0].bdetail_id;

                // Check if report already exists for the given bdetail_id and date
                let checkReportExists = await transaction.request()
                    .input("bdetail_id", con.Int, bdetail_id)
                    .query(`SELECT COUNT(*) AS report_count
                            FROM DailyReport
                            WHERE bdetail_id = @bdetail_id AND date = CONVERT(date, GETDATE())`);
                reportCount = checkReportExists.recordset[0].report_count;

                if (reportCount > 0) {
                    // Report already exists, update the existing record
                    let updateReport = await transaction.request()
                        .input("bdetail_id", con.Int, bdetail_id)
                        .input("service_report_image", con.NVarChar, service.service_report_image)
                        .input("service_report_text", con.NVarChar, service.service_report_text)
                        .query(`UPDATE DailyReport
                                SET service_report_image = @service_report_image, service_report_text = @service_report_text
                                WHERE bdetail_id = @bdetail_id AND date = CONVERT(date, GETDATE())`);
                } else {
                    // Report doesn't exist, insert a new record
                    let insertReport = await transaction.request()
                        .input("bdetail_id", con.Int, bdetail_id)
                        .input("service_report_image", con.NVarChar, service.service_report_image)
                        .input("service_report_text", con.NVarChar, service.service_report_text)
                        .query(`INSERT INTO DailyReport (bdetail_id, date, service_report_image, service_report_text)
                                VALUES (@bdetail_id, CONVERT(date, GETDATE()), @service_report_image, @service_report_text)`);
                }
            }

            await transaction.commit();
            // console.log(reportCount);
            return reportCount;
        } catch (error) {
            console.log(error);
            if (transaction) {
                await transaction.rollback();
            }
            throw error;
        } finally {
            if (con) {
                con.close();
            }
        }
    },
    getReportByBookingId: async (booking_id) => {
        let con = await config.connection();
        const request = new con.Request();
        const returnData = await request
            .input("booking_id", con.Int, booking_id)
            .query("SELECT dr.*, s.name \n " +
                "FROM DailyReport AS dr \n " +
                "JOIN BookingDetail AS bk ON dr.bdetail_id = bk.bdetail_id\n " +
                "JOIN Service AS s ON bk.service_id = s.service_id \n " +
                "WHERE bk.booking_id = @booking_id");

        return returnData.recordset;
    },
    // addNewReport: async (data) => {
    //     let con = await config.connection();
    //     const transaction = new con.Transaction();
    //     await transaction.begin();
    //     try {
    //         for (let i = 0; i < data.services.length; i++) {
    //             let service = data.services[i];
    //             // let getBdetailId = await transaction.request()
    //             //     .input("booking_id", con.Int, data.booking_id)
    //             //     .input("service_id", con.Int, service.service_id)
    //             //     .query("SELECT bd.bdetail_id FROM BookingDetail bd WHERE bd.booking_id = @booking_id AND bd.service_id = @service_id");
    //             // let bdetail_id = getBdetailId.recordset[0].bdetail_id;
    //             let addReport = await transaction.request()
    //                 .input("booking_id", con.Int, data.booking_id)
    //                 // .input("bdetail_id", con.Int, bdetail_id)
    //                 // .input("date", con.Date, new Date(data.date))
    //                 .input("service_report_image", con.NVarChar, service.service_report_image)
    //                 .input("service_report_text", con.NVarChar, service.service_report_text)
    //                 .query("INSERT INTO DailyReport (bdetail_id, date, service_report_image, service_report_text) \n " +
    //                     "SELECT bd.bdetail_id, GETDATE(), @service_report_image, @service_report_text \n " +
    //                     "FROM BookingDetail bd \n " +
    //                     "WHERE bd.booking_id = @booking_id");
    //         }
    //         await transaction.commit();

    //         return true;
    //     } catch (error) {
    //         await transaction.rollback();

    //         return false;
    //     }
    //     // const request = new con.Request();
    //     // const returnData = await request
    //     //     .input("booking_id", con.Int, data.booking_id)
    //     //     .input("service_report_image", con.NVarChar, data.report_image)
    //     //     .input("service_report_text", con.NVarChar, data.report_text)
    //     //     .query("INSERT INTO DailyReport (bdetail_id, date, service_report_image, service_report_text) \n " +
    //     //         "SELECT bd.bdetail_id, GETDATE(), @service_report_image, @service_report_text \n " +
    //     //         "FROM BookingDetail bd \n " +
    //     //         "WHERE bd.booking_id = @booking_id");
    //     // 
    //     // return returnData.rowsAffected[0];
    // },
};