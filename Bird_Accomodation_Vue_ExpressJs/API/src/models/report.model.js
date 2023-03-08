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
            for (let d = new Date(date_from); d <= date_to; d.setDate(d.getDate() + 1)) {
                // Get Service [{service_name, service_report_image, service_report_text, booked_price}]

                let getServices = await transaction.request()
                    .input("booking_id", con.Int, booking_id)
                    .input("date", con.Date, new Date(d))
                    .query(`SELECT s.name AS service_name, s.service_id, dr.service_report_text, dr.service_report_image, bd.booked_price, date
                            FROM BookingDetail bd
                            JOIN DailyReport dr ON bd.bdetail_id = dr.bdetail_id
                            JOIN Service s ON bd.service_id = s.service_id
                            WHERE bd.booking_id = @booking_id AND dr.date = @date`);
                let services = getServices.recordset;

                let date = dateFormat(d);

                if (services.length > 0) {
                    let serviceDetails = {
                        date: date,
                        services: services.map(service => ({
                            service_id: service.service_id,
                            service_name: service.service_name,
                            service_report_text: service.service_report_text,
                            service_report_image: service.service_report_image,
                            booked_price: service.booked_price
                        }))
                    };
                    reportDetails.push(serviceDetails);
                }
            }
            date_from = dateFormat(date_from);
            date_to = dateFormat(date_to);

            return { booking_id, date_from, date_to, reportDetails };
        } catch (error) {
            await transaction.rollback();
            con.close();
            throw error;
        }
    },
    //DailyReport
    getAllReport: async (booking_id) => {
        let con = await config.connection();
        const request = new con.Request();
        const returnData = await request
            .input("booking_id", con.Int, booking_id)
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
        con.close();
        return returnData.recordset;
    },
    addNewReport: async (booking_id, service_report_image, service_report_text) => {
        let con = await config.connection();
        const request = new con.Request();
        const returnData = await request
            .input("booking_id", con.Int, booking_id)
            .input("service_report_image", con.NVarChar, service_report_image)
            .input("service_report_text", con.NVarChar, service_report_text)
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
        con.close();
        return returnData.recordset;
    },
};