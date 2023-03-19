const config = require("../config/config");
const sql = require("mssql");

module.exports = {
    getTotalRevenueDay: async () => {
        let con = await config.connection();
        const request = con.request();
        const returnData = await request
            .query("select checkout_date, sum(total_service_amount) as total_revenue\n" +
                "from Bill\n" +
                "where checkout_date between '2023-01-01' and GETDATE()\n" +
                "group by checkout_date\n" +
                "go");
        return (await returnData).recordset || null;
    },
    getTotalRevenueMonth: async () => {

    },
    getTotalRevenueYear: async () => {

    },

}