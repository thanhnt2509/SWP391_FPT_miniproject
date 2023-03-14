const reportModel = require('../models/report.model');
const { ErrorHandler } = require('../middlewares/errorHandler.mdw');
const { dateFormat } = require('../config/config');

module.exports = {
    getReportDetail: async (req, res, next) => {
        try {

        } catch (error) {
           console.log(error.message);
            res.status(500).send("Internal server error");
        }
    },
    //DailyReport
    getAllReport: async (req, res, next) => {
        try {

        } catch (error) {
           console.log(error.message);
            res.status(500).send("Internal server error");
        }
    },
    addNewReport: async (req, res, next) => {
        try {

        } catch (error) {
           console.log(error.message);
            res.status(500).send("Internal server error");
        }
    },
    getReportByBookingId: async (req, res, next) => {
        try {

        } catch (error) {
           console.log(error.message);
            res.status(500).send("Internal server error");
        }
    },
};