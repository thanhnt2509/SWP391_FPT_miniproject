const DBConnect = require("../../src/config/config");

module.exports = {
    getReportDetail: async (user_id, booking_id) => {
        let con = await DBConnect.connection();
        const transaction = new con.Transaction();
        await transaction.begin();

        try {
            //Get date_from, date_to
            let getBooking = await transaction.request()
                .input("booking_id", DBConnect.sql.Int, booking_id)
                .query("SELECT date_from, date_to FROM Booking WHERE booking_id = @booking_id");
            let date_from = new Date(getBooking.recordset[0].date_from);
            let date_to = new Date(getBooking.recordset[0].date_to);
            // Get Report by date
            let reportDetails = [];
            for (let d = new Date(date_from); d <= date_to; d.setDate(d.getDate() + 1)) {
                // Get Service [{service_name, service_report_image, service_report_text, booked_price}]

                let getServices = await transaction.request()
                    .input("booking_id", DBConnect.sql.Int, booking_id)
                    .input("date", DBConnect.sql.Date, new Date(d))
                    .query(`SELECT s.name AS service_name, dr.service_report_text, dr.service_report_image, bd.booked_price, date
                            FROM BookingDetail bd
                            JOIN DailyReport dr ON bd.bdetail_id = dr.bdetail_id
                            JOIN Service s ON bd.service_id = s.service_id
                            WHERE bd.booking_id = @booking_id AND dr.date = @date`);
                let services = getServices.recordset;

                let date = new Date(d.getTime()).toISOString().slice(0, 10);

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
            }
            date_from = date_from.toISOString().slice(0, 10);
            date_to = date_to.toISOString().slice(0, 10);

            return { booking_id, date_from, date_to, reportDetails };
        } catch (error) {
            await transaction.rollback();
            throw error;
        }
    },
    //DailyReport
    getAllReport: async (booking_id) => {
        let con = await DBConnect.connection();
        const request = new con.Request();
        const returnData = await request
            .input("booking_id", DBConnect.sql.Int, booking_id)
            .query(`SELECT 
                        dr.date,
                        dr.service_report_image,
                        dr.service_report_text,
                        dr.feedback_content
                    FROM 
                        BookingDetail bd 
                        JOIN DailyReport dr ON bd.bdetail_id = dr.bdetail_id 
                    WHERE 
                        bd.booking_id = @booking_id`);
        return returnData.recordset;
    },
    addNewReport: async (booking_id, service_report_image, service_report_text) => {
        let con = await DBConnect.connection();
        const request = new con.Request();
        const returnData = await request
            .input("booking_id", DBConnect.sql.Int, booking_id)
            .input("service_report_image", DBConnect.sql.NVarChar, service_report_image)
            .input("service_report_text", DBConnect.sql.NVarChar, service_report_text)
            .query(`INSERT INTO DailyReport (bdetail_id, date, service_report_image, service_report_text)
                    SELECT 
                        bd.bdetail_id,
                        GETDATE(),
                        @service_report_image,
                        @service_report_text
                    FROM 
                        BookingDetail bd 
                    WHERE 
                        bd.booking_id = @booking_id`);
        return returnData.recordset;
    },
};