const config = require("../../src/config/config");
const { dateFormat } = require("../../src/config/config");

module.exports = {
    getReportDetail: async (user_id, booking_id) => {
        let con = await config.connection();
        const transaction = new con.Transaction();
        await transaction.begin();
        try {
            //Get date_from, date_to
            let getBooking = await transaction.request()
                .input("booking_id", con.Int, booking_id)
                .query("SELECT date_from, date_to FROM Booking WHERE booking_id = @booking_id");
            let date_from = dateFormat(getBooking.recordset[0].date_from);
            let date_to = dateFormat(getBooking.recordset[0].date_to);
            // Get Report by date
            let reportDetails = [];
            let d = new Date(date_from);

            // console.log(d);
            while (d <= new Date(date_to)) {
                console.log('date_from:', date_from, 'date_to:', date_to);
                console.log(d);
                let getServices = await transaction.request()
                    .input("booking_id", con.Int, booking_id)
                    .input("date", con.Date, new Date(d))
                    .query(`SELECT s.name AS service_name, dr.service_report_text, dr.service_report_image, bd.booked_price, date
                            FROM BookingDetail bd
                            JOIN DailyReport dr ON bd.bdetail_id = dr.bdetail_id
                            JOIN Service s ON bd.service_id = s.service_id
                            WHERE bd.booking_id = @booking_id AND dr.date = @date`);
                let services = getServices.recordset;
                console.log(services, d);

                let date = dateFormat(d);

                if (services.length > 0) {
                    let serviceDetails = {
                        date: date,
                        services: services.map(service => ({
                            service_name: service.service_name,
                            service_report_text: service.service_report_text,
                            service_report_image: service.service_report_image,
                            booked_price: service.booked_price
                        }))
                    };
                    reportDetails.push(serviceDetails);
                }

                d.setDate(d.getDate() + 1);
            }
            console.log('d after increment:', d);
            date_from = dateFormat(date_from);
            date_to = dateFormat(date_to);

            await transaction.commit();
            console.log(booking_id, date_from, date_to, reportDetails);
            return { booking_id, date_from, date_to, reportDetails };
        } catch (error) {
            await transaction.rollback();
            throw error;
        }
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
            console.log(reportCount);
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