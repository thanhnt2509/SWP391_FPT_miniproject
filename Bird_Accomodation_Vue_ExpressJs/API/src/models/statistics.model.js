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
<<<<<<< HEAD
                "group by checkout_date\n");
=======
                "group by checkout_date");
>>>>>>> 186e5bedaa628e4fdd2b331239890de4f88b664c
        return (await returnData).recordset || null;
    },

    getTotalRevenueMonth: async () => {
        let con = await config.connection();
        const request = con.request();
        const returnData = await request
            .query("select MONTH(checkout_date) AS month, YEAR(checkout_date) AS year, sum(total_service_amount) as total_revenue\n" +
<<<<<<< HEAD
                "from Bill " +      
                "WHERE checkout_date >= '2023-01-01'\n" +
                "GROUP BY YEAR(checkout_date), MONTH(checkout_date)\n" +
                "ORDER BY YEAR(checkout_date), MONTH(checkout_date)");
        return (await returnData).recordset || null;
    },

=======
                "        from Bill\n" +
                "        where checkout_date >= '2023-01-01'\n" +
                "        GROUP BY YEAR(checkout_date), MONTH(checkout_date)\n" +
                "        ORDER BY YEAR(checkout_date), MONTH(checkout_date)");
        return (await returnData).recordset || null;
    },
>>>>>>> 186e5bedaa628e4fdd2b331239890de4f88b664c
    getTotalRevenueYear: async () => {
        let con = await config.connection();
        const request = con.request();
        const returnData = await request
            .query("SELECT YEAR(checkout_date) AS year, SUM(total_service_amount) AS revenue\n" +
<<<<<<< HEAD
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
=======
                "        FROM Bill\n" +
                "        WHERE checkout_date >= '2023-01-01'\n" +
                "        GROUP BY YEAR(checkout_date)\n" +
                "        ORDER BY YEAR(checkout_date)");
        return (await returnData).recordset || null;
    },
    //GET the most used service
    //return: service_name, booking_count
    getTheMostUsedService: async () => {
        let con = await config.connection();
        const request = con.request();
        const returnData = await request
            .query(`SELECT s.name, COUNT(*) AS booking_count
                    FROM Booking AS bo
                    INNER JOIN BookingDetail AS bd ON bo.booking_id = bd.booking_id
                    INNER JOIN Service AS s ON bd.service_id = s.service_id
                    GROUP BY s.name
                    ORDER BY booking_count DESC`);
        return (await returnData).recordset || null;
    },
    //GET completion rate of quantity and remain
    //return: service_id, total_bookings, completed_bookings, completion_rate
    getCompletionRateOfQuantityAndRemain: async () => {
        let con = await config.connection();
        const request = con.request();
        const returnData = await request
            .query(`SELECT 
                        service_id, 
                        COUNT(*) AS total_bookings, 
                        SUM(CASE WHEN remain = 0 THEN 1 ELSE 0 END) AS completed_bookings, 
                        (SUM(CASE WHEN remain = 0 THEN 1 ELSE 0 END) * 100.0 / COUNT(*)) AS completion_rate
                    FROM BookingDetail
                    GROUP BY service_id`);
        return (await returnData).recordset || null;
    },
    //GET bird type frequently booked
    //return: bird_type_name, booking_count
    getBirdTypeFrequentlyBooked: async () => {
        let con = await config.connection();
        const request = con.request();
        const returnData = await request
            .query(`SELECT bt.name AS bird_type_name, COUNT(*) AS booking_count
                    FROM Booking AS bo
                    INNER JOIN Bird AS b ON bo.bird_id = b.bird_id
                    INNER JOIN BirdType AS bt ON b.type_id = bt.btype_id
                    GROUP BY bt.name
                    ORDER BY booking_count DESC`);
        return (await returnData).recordset || null;
    },
    //Get report completion rate
    //return: date, total_booking, completed_booking, completion_rate
    getCompletionRate: async () => {
        let con = await config.connection();
        const request = con.request();
        const returnData = await request
            .query(`SELECT 
                    dr.date,
                        COUNT(*) AS total_bookings,
                        SUM(CASE WHEN b.date_from <= dr.date AND b.date_to >= dr.date THEN 1 ELSE 0 END) AS completed_bookings,
                        (SUM(CASE WHEN b.date_from <= dr.date AND b.date_to >= dr.date THEN 1 ELSE 0 END) * 100.0 / COUNT(*)) AS completion_rate
                    FROM DailyReport AS dr
                    LEFT JOIN Booking AS b ON dr.date >= b.date_from AND dr.date <= b.date_to
                    GROUP BY dr.date`);
        return (await returnData).recordset || null;
>>>>>>> 186e5bedaa628e4fdd2b331239890de4f88b664c
    },

    // Manage Transaction
    //GET number of booking in each status in this month
    //return: status, total_booking
    getNumberOfBookingInEachStatusInThisMonth: async () => {
        let con = await config.connection();
        const request = con.request();
        const returnData = await request
            .query(`SELECT status, COUNT(*) as total_booking
                    FROM Booking
                    WHERE MONTH(date_from) = MONTH(GETDATE())
                      AND MONTH(date_to) = MONTH(GETDATE())
                      AND YEAR(date_from) = YEAR(GETDATE())
                      AND YEAR(date_to) = YEAR(GETDATE())
                    GROUP BY status;`);
        return (await returnData).recordset || null;
    },

    //GET number of Bills in each payment method
    //return: payment_method, total_bill
    getNumberOfBillInEachPaymentMethod: async () => {
        let con = await config.connection();
        const request = con.request();
        const returnData = await request
            .query(`SELECT payment_method, COUNT(*) as total_bill
                    FROM Bill
                    WHERE payment_status = 1
                    GROUP BY payment_method;`);
        return (await returnData).recordset || null;
    },

    //GET number of booking in each month in this year (base on date_from)
    //return: booking_month, total_booking
    getNumberOfBookingsInEachMonth: async () => {
        let con = await config.connection();
        const request = con.request();
        const returnData = await request
            .query(`SELECT  MONTH(date_from) as booking_month, COUNT(*) as total_booking
                    FROM Booking
                    WHERE YEAR(date_from) = YEAR(GETDATE()) AND YEAR(date_to) = YEAR(GETDATE())
                    GROUP BY MONTH(date_from)
                    ORDER BY MONTH(date_from)`);
        return (await returnData).recordset || null;
    },

    //GET number of bird booked in this month
    //return: bird_name, total_booking
    getNumberOfBirdBookedInThisMonth: async () => {
        let con = await config.connection();
        const request = con.request();
        const returnData = await request
            .query(`SELECT b.bird_name, COUNT(*) as total_booking
                    FROM Booking AS bo
                    INNER JOIN Bird AS b ON bo.bird_id = b.bird_id
                    WHERE MONTH(bo.date_from) = MONTH(GETDATE())
                        AND MONTH(bo.date_to) = MONTH(GETDATE())
                        AND YEAR(bo.date_from) = YEAR(GETDATE())    
                        AND YEAR(bo.date_to) = YEAR(GETDATE())
                    GROUP BY b.bird_name;`);
        return (await returnData).recordset || null;
    },

    //GET top 5 user who spend the most
    //return: user_name, total_amount
    getTop5UserWhoSpendTheMost: async () => {
        let con = await config.connection();
        const request = con.request();
        const returnData = await request
            .query(`SELECT TOP 5 u.name, SUM(b.total_service_amount) as total_amount
                    FROM Bill AS b
                    INNER JOIN Booking AS bo ON b.booking_id = bo.booking_id
                    INNER JOIN [User] AS u ON bo.user_id = u.user_id
                    GROUP BY u.name
                    ORDER BY total_amount DESC;`);
        return (await returnData).recordset || null;
    },

    //Manage Account
    //GET number of user in each role
    //return: total_accounts, total_admin_accounts, total_user_accounts
    getNumberOfUser: async () => {
        let con = await config.connection();
        const request = con.request();
        const returnData = await request
            .query(`SELECT 
                        COUNT(*) AS total_accounts,
                        SUM(CASE WHEN role = 1 THEN 1 ELSE 0 END) AS total_admin_accounts,
                        SUM(CASE WHEN role = 0 THEN 1 ELSE 0 END) AS total_user_accounts
                    FROM [dbo].[User];`);
        return (await returnData).recordset || null;
    },

    //GET number of user in each status
    //return: total_active_accounts, total_inactive_accounts
    getNumberOfUserInEachStatus: async () => {
        let con = await config.connection();
        const request = con.request();
        const returnData = await request
            .query(`SELECT 
                        SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS total_active_accounts,
                        SUM(CASE WHEN status = 0 THEN 1 ELSE 0 END) AS total_inactive_accounts
                    FROM [dbo].[User];`);
        return (await returnData).recordset || null;
    },
}