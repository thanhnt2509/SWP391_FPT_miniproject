const config = require("../../src/config/config");
const sql = require("mssql");

module.exports = {
    getReportDetail: async (booking_id) => {
        let con = await config.connection();
        const request = con.request();
        const returnData = await request
            .input('booking_id', sql.Int, booking_id)
            .query("select * from DailyReport where booking_id = @booking_id")
        return data.recordset
    },
    //DailyReport
    getAllReport: async () => {
        let con = await config.connection();
        const request = con.request();
        const returnData = await request
            .query("SELECT dr.*, s.name \n " +
                "FROM DailyReport AS dr \n " +
                "JOIN BookingDetail AS bk ON dr.bdetail_id = bk.bdetail_id\n " +
                "JOIN Service AS s ON bk.service_id = s.service_id");

        return returnData.recordset;
    },

    getReportByBookingId: async (booking_id) => {
        let con = await config.connection();
        const request = con.request();
        const returnData = await request
            .input("booking_id", sql.Int, booking_id)
            .query("select dr.*\n" +
                "from DailyReport dr\n" +
                "where dr.booking_id = @booking_id \n"
            );
        return returnData.recordset.map(item => (
            {
                dreport_id: item.dreport_id,
                date: new Date(item.date).toISOString().slice(0, 10),
                service_report_text: item.service_report_text,
                feedback_content: item.feedback_content,
            }))
        // console.log(reportData)
        /*
        * [
               { date: '2023-03-10', dreport_id: 116 },
               { date: '2023-03-11', dreport_id: 124 },
               { date: '2023-03-12', dreport_id: 137 }

            ]
        * */
        // console.log(await getImageByDreportId(116))
    },

   getImageByDreportId:  async (dreport_id) => {

        let con = await config.connection();
        const request = con.request();
        const returnData = await request
            .input("dreport_id", sql.Int, dreport_id)
            .query("select dri.service_report_image\n" +
                "from DailyReportImage dri\n" +
                "where dri.dreport_id = @dreport_id")

        return returnData.recordset
    },
    addNewReport: async (booking_id, {date, service_report_text}) => {
        let con = await config.connection();
        const request = con.request();
        const dailyReport = await request
            .input("booking_id", sql.Int, booking_id)
            .input("date", sql.Date, date)
            .input("service_report_text", sql.NVarChar, service_report_text)
            .query("INSERT INTO DailyReport (booking_id, date, service_report_text) \n" +
                "VALUES (@booking_id, @date, @service_report_text)")

        // console.log(dailyReport.rowsAffected.length)

        // get last inserted dreport_id
        const lastInsertedId = await request
            .query("SELECT IDENT_CURRENT('DailyReport') AS lastId")


        // console.log(lastInsertedId.recordset[0].lastId)

        return { affected: dailyReport.rowsAffected.length, dreport_id: lastInsertedId.recordset[0].lastId}
    },
    isExistReportDate: async (booking_id, date) => {
        let con = await config.connection();
        const request = con.request();
        const returnData = await request
            .input("booking_id", sql.Int, booking_id)
            .input("date", sql.Date, date)
            .query("select * from DailyReport where booking_id = @booking_id and date = @date")

        return returnData.recordset
    },
    updateReport: async (booking_id, {date, service_report_text}) => {

    }
};