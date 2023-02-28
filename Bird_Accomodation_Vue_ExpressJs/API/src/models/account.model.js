const DBConnect = require("../../src/config/config");

module.exports = {
    register: async (body) => {
        //body = {email, password, name, address, phone}
        let con = await DBConnect.connection();
        const defaultRole = 0; //0: user, 1: admin
        const defaultStatus = 1; //0: inactive, 1: active
        const defaultUserImg = null;
        const request = new con.Request();
        const returnData = await request
            .input("email", DBConnect.sql.NVarChar, body.email)
            .input("password", DBConnect.sql.NVarChar, body.password)
            .input("name", DBConnect.sql.NVarChar, body.name)
            .input("address", DBConnect.sql.NVarChar, body.address)
            .input("phone", DBConnect.sql.NVarChar, body.phone)
            .input("role", DBConnect.sql.Int, defaultRole)
            .input("status", DBConnect.sql.Int, defaultStatus)
            .input("user_img", DBConnect.sql.NVarChar, defaultUserImg)
            .query("INSERT INTO [User] (email, password, name, address, phone, role, status, user_img) \n" +
                "VALUES (@email, @password, @name, @address, @phone, @role, @status, @user_img)");
        return returnData.rowsAffected[0];
    },
    login: async (body) => {
        //body = {email, password}
        let con = await DBConnect.connection();
        const request = new con.Request();
        const returnData = await request
            .input("email", DBConnect.sql.NVarChar, body.email)
            .input("password", DBConnect.sql.NVarChar, body.password)
            .query("SELECT [user_id],[email],[name],[address],[phone],[role],[status],[user_img],[token] FROM [User] \n" +
                "WHERE email = @email collate latin1_general_cs_as \n" +
                "AND password = @password collate latin1_general_cs_as");
        return (await returnData).recordset || null;
    },
    validateEmail: async (email) => {
        let con = await DBConnect.connection();
        const request = new con.Request();
        const returnData = await request
            .input("email", DBConnect.sql.NVarChar, email)
            .query("SELECT [user_id],[email],[role] FROM [User] \n" +
                "WHERE email = @email collate latin1_general_cs_as");
        if ((await returnData).recordset.length > 0) {
            return true;
        } else {
            return false;
        }
    },
    validatePhone: async (phone) => {   
        let con = await DBConnect.connection();
        const request = new con.Request();
        const returnData = await request
            .input("phone", DBConnect.sql.NVarChar, phone)
            .query("SELECT [user_id],[phone] FROM [User] \n" +
                "WHERE phone = @phone");
        if ((await returnData).recordset.length > 0) {
            return true;
        } else {
            return false;
        }
    },
    // getAccountByID: async (user_id) => {
    //     try {
    //         let con = await connection();
    //         let sql = `SELECT * FROM [User] WHERE user_id = ${user_id}`;
    //         return con.query(sql);
    //     } catch (error) {
    //         throw error;
    //     }
    // },
    // getBirdByUserID: async (user_id) => {
    //     try {
    //         let con = await connection();
    //         let sql = `SELECT * FROM [Birds] WHERE user_id = ${user_id}`;
    //         return con.query(sql);
    //     } catch (error) {
    //         throw error;
    //     }
    // },
    // getBirdByBirdID_UserID: async (bird_id, user_id) => {
    //     try {
    //         let con = await connection();
    //         let sql = `SELECT * FROM [Birds] WHERE bird_id = ${bird_id} AND user_id = ${user_id}`;
    //         return con.query(sql);
    //     } catch (error) {
    //         throw error;
    //     }
    // },
    // addNewBird_UserID: async (body, user_id) => {
    //     // body include {type_id, age, bird_name, breed, gender, image, description}
    //     try {
    //         let con = await connection();
    //         let sql = `insert into Birds(user_id, type_id, age, bird_name, breed, gender, image, description) \n`
    //         sql += `values (${user_id},${body.type_id},${body.age},
    //                 '${body.bird_name}','${body.breed}','${body.gender}','${body.image || null}','${body.description}')`
    //         return con.query(sql);
    //     } catch (error) {
    //         throw error;
    //     }
    // },
    // deleteBirdID_UserID: async (bird_id, user_id) => {
    //     try {
    //         let con = await connection();
    //         let sql = `DELETE FROM [Birds] WHERE bird_id = ${bird_id} AND user_id = ${user_id}`;
    //         return con.query(sql);
    //     } catch (error) {
    //         throw error;
    //     }
    // },
    // getAllBirdType: async () => {
    //     try {
    //         let con = await connection();
    //         let sql = `SELECT * FROM BirdType`;
    //         return con.query(sql);
    //     } catch (error) {
    //         throw error;
    //     }
    // },

    // getBirdType: async (name) => {
    //     try {
    //         let con = await connection();
    //         let sql = `SELECT btype_id FROM [BirdType] WHERE name = '${name}'`;
    //         return con.query(sql);
    //     } catch (error) {
    //         throw error;
    //     }
    // },
    // getNewBirdByUserID: async (user_id) => {
    //     try {
    //         let con = await connection();
    //         let sql = `SELECT TOP 1 * FROM [Birds] WHERE user_id = ${user_id} ORDER BY bird_id DESC`;
    //         return con.query(sql);
    //     } catch (error) {
    //         throw error;
    //     }
    // },
    // updateBirdType: async (bird_id, type_id) => {
    //     try {
    //         let con = await connection();
    //         let sql = `UPDATE [Birds] SET type_id = ${type_id} WHERE bird_id = ${bird_id}`;
    //         return con.query(sql);
    //     } catch (error) {
    //         throw error;
    //     }
    // },
    // addNewBooking: async (body, user_id) => {
    //     //body = {bird_id, services[array], date_from, date_to, status:0 as pending}
    //     try {
    //         let con = await connection();
    //         const transaction = new con.Transaction();
    //         await transaction.begin();
    //         const defaultStatus = 0; //pending
    //         try {
    //             const bookingQueryResult = await transaction.request()
    //                 .input('user_id', con.Int, user_id)
    //                 .input('bird_id', con.Int, body.bird_id)
    //                 .input('date_from', con.Date, body.date_from)
    //                 .input('date_to', con.Date, body.date_to)
    //                 .input('status', con.Int, defaultStatus)
    //                 .query(`INSERT INTO [Bookings] (user_id, bird_id, date_from, date_to, status) \n`
    //                     + `VALUES (@user_id, @bird_id, @date_from, @date_to, @status)`);
    //             const booking_id = await transaction.request()
    //                 .query(`SELECT TOP 1 booking_id FROM [Bookings] ORDER BY booking_id DESC`);
    //             for (let i = 0; i < body.services.length; i++) {
    //                 let booked_price = await transaction.request()
    //                     .query(`SELECT price from [Services] WHERE service_id = ${body.services[i]}`);
    //                 await transaction.request()
    //                     .input('booking_id', con.Int, booking_id.recordset[0].booking_id)
    //                     .input('service_id', con.Int, body.services[i])
    //                     .input('booked_price', con.Int, booked_price.recordset[0].price)
    //                     .query(`INSERT INTO [BookingDetail] (booking_id, service_id, booked_price) \n`
    //                         + `VALUES (@booking_id, @service_id, @booked_price)`);
    //             }
    //             await transaction.commit();
    //             return true;
    //         } catch (error) {
    //             await transaction.rollback();
    //             return false;
    //         }
    //     } catch (error) {
    //         throw error;
    //     }
    // },
    // getAllBooking: async (user_id) => {
    //     try {
    //         let con = await connection();
    //         let sql = `SELECT * FROM [Bookings] WHERE user_id = ${user_id}`;
    //         return con.query(sql);
    //     } catch (error) {
    //         throw error;
    //     }
    // },
    // getBookingService_booking_id: async (booking_id) => {
    //     try {
    //         let con = await connection();
    //         let sql = `select bd.*, s.name 
    //                 from Bookings b join BookingDetail bd on b.booking_id = bd.booking_id
    //                 join Services s on bd.service_id = s.service_id 
    //                 where b.booking_id = ${booking_id}`;
    //         return con.query(sql);
    //     } catch (error) {
    //         throw error;
    //     }
    // },
    // getBookingReport_booking_id: async (booking_id) => {
    //     try {
    //         let con = await connection();
    //         let sql = `select s.service_id, s.name,  drd.service_report_image, drd.service_report_text, dr.date, dr.booking_id
    //                 from BookingDetail bd join Services s on bd.service_id = s.service_id
    //                     join DailyReportDetail drd on bd.bdetail_id = drd.bdetail_id
    //                     join DailyReport dr on drd.dreport_id = dr.dreport_id
    //                 where dr.booking_id = ${booking_id}`;
    //         return con.query(sql);
    //     } catch (error) {
    //         throw error;
    //     }
    // }
}