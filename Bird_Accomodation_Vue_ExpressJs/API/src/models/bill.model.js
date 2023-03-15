const config = require('../config/config');
const sql = require("mssql");

module.exports = {
    getBillServiceDetail: async (booking_id) => {
        let con = await config.connection();
        const request = con.request();
        const returnData = await request
            .input("booking_id", sql.Int, booking_id)
            .query("SELECT s.service_id, s.name, bd.booked_price \n" +
                "FROM BookingDetail AS bd \n" +
                "JOIN Service AS s ON bd.service_id = s.service_id \n" +
                "WHERE bd.booking_id = @booking_id");
        return (await returnData).recordset || null;
    },
    publishBill: async (booking_id) => {
        let con = await config.connection();
        const transaction = con.transaction();
        await transaction.begin();
        try {
            await transaction.request()
                .input('booking_id', sql.Int, booking_id)
                .query(`INSERT INTO [Bill] (booking_id, total_amount, checkout_date) \n`
                    + `VALUES (@booking_id, 0, GETDATE())`);
            await transaction.commit();
        } catch (err) {
            console.log(err);
            await transaction.rollback();
        }
    },
    getTotalAmountBooking_id: async (booking_id) => {
        let con = await config.connection();
        const request = con.request();
        const returnData = await request
            .input("booking_id", sql.Int, booking_id)
            .query("SELECT SUM(booked_price) AS total_amount \n" +
                "FROM BookingDetail \n" +
                "WHERE booking_id = @booking_id");
        return (await returnData).recordset || null;
    },
}