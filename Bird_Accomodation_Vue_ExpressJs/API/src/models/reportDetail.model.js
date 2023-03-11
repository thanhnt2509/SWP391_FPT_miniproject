const DBConnect = require("../config/config");


module.exports = {
    getReportDetailByBooking_Id: async (booking_id) => {
        try {
            // get report by booking_id
            let con = await DBConnect.connection();
            let sql = `select dr.dreport_id, s.name, s.description, dr.service_report_image, dr.service_report_text, dr.date, bd.booked_price,  dr.feedback_content`
            sql += ` from BookingDetail bd`
            sql += ` join Service s on bd.service_id = s.service_id`
            sql += ` join DailyReport dr on dr.bdetail_id = bd.bdetail_id`
            sql += ` where bd.booking_id = ${booking_id}`
            //return (await con).recordset || null;
             return con.query(sql);
        } catch (error) {
            throw error;
        }
    },
    getReportDetailByBookingID_DreportID: async (booking_id, dreport_id) => {
        try {
            //get report by booking_id and dreport_id
            let con = await DBConnect.connection();
            let sql = `select dr.dreport_id, s.name, s.description, dr.service_report_image, dr.service_report_text, dr.date, bd.booked_price,  dr.feedback_content`
            sql += ` from BookingDetail bd`
            sql += ` join Service s on bd.service_id = s.service_id`
            sql += ` join DailyReport dr on dr.bdetail_id = bd.bdetail_id`
            sql += ` where bd.booking_id = ${booking_id} AND dr.dreport_id = ${dreport_id}`
            return con.query(sql);
        } catch (error) {
            throw error;
        }
    },
    // deleteReportDetail:async (booking_id,dreport_id) =>{
    //     try {
    //         let con = await DBConnect.connection();
    //         let sql = `DELETE FROM DailyReport`
    //         sql += ` WHERE booking_id =${booking_id} dreport_id = ${dreport_id}`;
    //         return con.query(sql);
    //     }
    //         catch (error) {
    //             throw error;
    //     }
    // },
}