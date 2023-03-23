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
                "group by checkout_date\n");
        return (await returnData).recordset || null;
    },

    getTotalRevenueMonth: async () => {
        let con = await config.connection();
        const request = con.request();
        const returnData = await request
            .query("select MONTH(checkout_date) AS month, YEAR(checkout_date) AS year, sum(total_service_amount) as total_revenue\n" +
                "from Bill " +      
                "WHERE checkout_date >= '2023-01-01'\n" +
                "GROUP BY YEAR(checkout_date), MONTH(checkout_date)\n" +
                "ORDER BY YEAR(checkout_date), MONTH(checkout_date)");
        return (await returnData).recordset || null;
    },

    getTotalRevenueYear: async () => {
        let con = await config.connection();
        const request = con.request();
        const returnData = await request
            .query("SELECT YEAR(checkout_date) AS year, SUM(total_service_amount) AS revenue\n" +
                "from Bill" +
                "WHERE checkout_date >= '2023-01-01'\n" +
                "GROUP BY YEAR(checkout_date)\n" +
                "ORDER BY YEAR(checkout_date)");
        return (await returnData).recordset || null;
    },

    getServiceByDate: async () => {
        let con = await config.connection();
        const request = con.request();
        const returnData = await request
          .query("SELECT CONVERT(date, b.checkout_date) AS usage_date, s.name, SUM(CASE WHEN s.isPack = 1 THEN 0 ELSE bd.quantity END) AS used_quantity\n" +
            "FROM BookingDetail bd\n " +
            "INNER JOIN service s ON bd.service_id = s.service_id\n " +
            "join Bill b on b.booking_id = bd.booking_id\n " +
            "WHERE b.checkout_date BETWEEN '2023-01-01' AND GETDATE()\n " +
            "GROUP BY CONVERT(date, b.checkout_date), s.name\n" +
            "ORDER BY usage_date ASC, used_quantity ASC");
        return (await returnData).recordset || null;
      },
      

    getServiceByMonth: async()=>{
        let con = await config.connection();
        const request = con.request();
        const returnData = await request
            .query("SELECT YEAR(b.checkout_date) AS year, MONTH(b.checkout_date) AS month, s.name, SUM(CASE WHEN s.isPack = 1 THEN 1 ELSE bd.quantity END) AS used_quantity\n"+
            "FROM BookingDetail bd\n"+
            "INNER JOIN service s ON bd.service_id = s.service_id\n" +
            "join Bill b on b.booking_id = bd.booking_id\n"+
            "WHERE b.checkout_date >= '2023-01-01'\n" +
            "GROUP BY YEAR(b.checkout_date), MONTH(b.checkout_date), s.name\n" +
            "ORDER BY YEAR(b.checkout_date), MONTH(b.checkout_date), used_quantity ASC");
        return (await returnData).recordset || null;    
    },

    getServiceByYear: async()=>{
        let con = await config.connection();
        const request = con.request();
        const returnData = await request
            .query("SELECT YEAR(b.checkout_date) AS year, s.name, SUM(CASE WHEN s.isPack = 1 THEN 1 ELSE bd.quantity END) AS used_quantity\n"+
            "FROM BookingDetail bd\n"+
            "INNER JOIN service s ON bd.service_id = s.service_id\n" +
            "join Bill b on b.booking_id = bd.booking_id\n"+
            "WHERE b.checkout_date >= '2023-01-01'\n" +
            "GROUP BY YEAR(b.checkout_date), s.name\n" +
            "ORDER BY YEAR(b.checkout_date), used_quantity ASC");
        return (await returnData).recordset || null;    
    },

}