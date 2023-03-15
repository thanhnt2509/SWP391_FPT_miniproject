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
    getReportByBookingId: async (booking_id) => {
        let reportData = await db("DailyReport")
            .where({ booking_id: booking_id })
            .select("date", "dreport_id")
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
    getImageByDreportId: async (dreport_id) => {
        const result = await db("DailyReportImage")
            .where({ dreport_id: dreport_id })
            .select("service_report_image")
        return result || null;
    },
    addNewReport: async (booking_id, { date, service_report_text }) => {
        const result = await db("DailyReport")
            .insert({
                booking_id: booking_id,
                date: date,
                service_report_text: service_report_text
            })
            .returning("dreport_id");
        return { affected: result.length, dreport_id: result[0]}
    },
    addNewReportImage: async (dreport_id, imagePaths) => {
        const returnData = [];
        for (let i = 0; i < imagePaths.length; i++) {
            let result = await db("DailyReportImage")
                .insert({
                    dreport_id: dreport_id,
                    service_report_image: imagePaths[i].imgPath
                })
            returnData.push(result)
        }
        return returnData;
    },
    isExistReportDate: async (booking_id, date) => {
        const result = await db("DailyReport")
            .where({
                booking_id: booking_id,
                date: date
            })
        return result || null;
    },
    // need to update this function, because it's high workload
    updateReport: async (booking_id, { date, service_report_text }, origin) => {
        if (date === '' || !date) date = origin.date
        if (service_report_text === '' || !service_report_text) service_report_text = origin
        let result = await db("DailyReport")
            .where({
                booking_id: booking_id,
                date: date
            })
            .update({
                service_report_text: service_report_text
            })
        return result || null;
    },
    // handle for update report service on both customer and admin side
    updateReportServiceByBooking_id: async (booking_id, service_report_update) => {
        // const { service_id, quantity, remain, isPack } = service_report_update
        const returnData = [];
        for (let i = 0; i < service_report_update.length; i++) {
            const isExistBookingService = await db("BookingDetail")
                .where({
                    booking_id: booking_id,
                    service_id: service_report_update[i].service_id
                })
            // does not exist the service_id of booking_id in BookingDetail -> insert
            if (isExistBookingService.length === 0 || !isExistBookingService) {
                const insertBookingService = await db("BookingDetail")
                    .insert({
                        booking_id: booking_id,
                        service_id: service_report_update[i].service_id,
                        quantity: service_report_update[i].quantity,
                        remain: service_report_update[i].remain
                    })
                returnData.push(insertBookingService.length)
            } else {
                // exist the service_id of booking_id in BookingDetail -> update
                const updateBookingService = await db("BookingDetail")
                    .where({
                        booking_id: booking_id,
                        service_id: service_report_update[i].service_id
                    })
                    .update({
                        quantity: service_report_update[i].quantity,
                        remain: service_report_update[i].remain
                    })
                returnData.push(updateBookingService.length)
            }
        }
        return returnData
    }
};