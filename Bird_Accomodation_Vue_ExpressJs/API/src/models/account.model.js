const { connection } = require("../../database/Connection");

module.exports = {
    register: async (body) => {
        //body = {email, password, name, address, phone, role, status, user_img}
        try {
            let con = await connection();
            const defaultRole = 0;
            const defaultStatus = 1;
            const defaultUserImg = null;
            let sql = `INSERT INTO [User] (email, password, name, address, phone, role, status, user_img) \n`
            sql += `VALUES ('${body.email}', '${body.password}', '${body.name}', 
                    '${body.address}', '${body.phone}', ${defaultRole}, ${defaultStatus}, '${defaultUserImg}')`;
            return con.query(sql);
        } catch (error) {
            throw error;
        }
    },
    login: async (body) => {
        //body = {email, password}
        try {
            let con = await connection();
            let sql = `SELECT * FROM [User] WHERE email = '${body.email}' COLLATE Latin1_General_CS_AS \n`
            sql += `AND password = '${body.password}' COLLATE Latin1_General_CS_AS`;
            return con.query(sql);
        } catch (error) {
            throw error;
        }
    },
    validateEmail: async (email) => {
        try {
            let con = await connection();
            let sql = `SELECT * FROM [User] WHERE email = '${email}' COLLATE Latin1_General_CS_AS`;
            return con.query(sql);
        } catch (error) {
            throw error;
        }
    },
    getAccountByID: async (user_id) => {
        try {
            let con = await connection();
            let sql = `SELECT * FROM [User] WHERE user_id = ${user_id}`;
            return con.query(sql);
        } catch (error) {
            throw error;
        }
    },
    getBirdByUserID: async (user_id) => {
        try {
            let con = await connection();
            let sql = `SELECT * FROM [Birds] WHERE user_id = ${user_id}`;
            return con.query(sql);
        } catch (error) {
            throw error;
        }
    },
    getBirdByBirdID_UserID: async (bird_id, user_id) => {
        try {
            let con = await connection();
            let sql = `SELECT * FROM [Birds] WHERE bird_id = ${bird_id} AND user_id = ${user_id}`;
            return con.query(sql);
        } catch (error) {
            throw error;
        }
    },
    addNewBird_UserID: async (body, user_id) => {
        // body include {type_id, age, bird_name, breed, gender, image, description}
        try {
            let con = await connection();
            let sql = `insert into Birds(user_id, type_id, age, bird_name, breed, gender, image, description) \n`
            sql += `values (${user_id},${body.type_id},${body.age},
                    '${body.bird_name}','${body.breed}','${body.gender}','${body.image || null}','${body.description}')`
            return con.query(sql);
        } catch (error) {
            throw error;
        }
    },
    deleteBirdID_UserID: async (bird_id, user_id) => {
        try {
            let con = await connection();
            let sql = `DELETE FROM [Birds] WHERE bird_id = ${bird_id} AND user_id = ${user_id}`;
            return con.query(sql);
        } catch (error) {
            throw error;
        }
    },
    getAllBirdType: async () => {
        try {
            let con = await connection();
            let sql = `SELECT * FROM BirdType`;
            return con.query(sql);
        } catch (error) {
            throw error;
        }
    },

    getBirdType: async (name) => {
        try {
            let con = await connection();
            let sql = `SELECT btype_id FROM [BirdType] WHERE name = '${name}'`;
            return con.query(sql);
        } catch (error) {
            throw error;
        }
    },
    getNewBirdByUserID: async (user_id) => {
        try {
            let con = await connection();
            let sql = `SELECT TOP 1 * FROM [Birds] WHERE user_id = ${user_id} ORDER BY bird_id DESC`;
            return con.query(sql);
        } catch (error) {
            throw error;
        }
    },
    updateBirdType: async (bird_id, type_id) => {
        try {
            let con = await connection();
            let sql = `UPDATE [Birds] SET type_id = ${type_id} WHERE bird_id = ${bird_id}`;
            return con.query(sql);
        } catch (error) {
            throw error;
        }
    },
    addNewBooking: async (body, user_id) => {
        //body = {bird_id, services[array], date_from, date_to, status:0 as pending}
        try {
            let con = await connection();
            const transaction = new con.Transaction();
            await transaction.begin();
            const defaultStatus = 0; //pending
            try {
                const bookingQueryResult = await transaction.request()
                    .input('user_id', con.Int, user_id)
                    .input('bird_id', con.Int, body.bird_id)
                    .input('date_from', con.Date, body.date_from)
                    .input('date_to', con.Date, body.date_to)
                    .input('status', con.Int, defaultStatus)
                    .query(`INSERT INTO [Bookings] (user_id, bird_id, date_from, date_to, status) \n`
                        + `VALUES (@user_id, @bird_id, @date_from, @date_to, @status)`);
                const booking_id = await transaction.request()
                    .query(`SELECT TOP 1 booking_id FROM [Bookings] ORDER BY booking_id DESC`);
                for (let i = 0; i < body.services.length; i++) {
                    let booked_price = await transaction.request()
                        .query(`SELECT price from [Services] WHERE service_id = ${body.services[i]}`);
                    await transaction.request()
                        .input('booking_id', con.Int, booking_id.recordset[0].booking_id)
                        .input('service_id', con.Int, body.services[i])
                        .input('booked_price', con.Int, booked_price.recordset[0].price)
                        .query(`INSERT INTO [BookingDetail] (booking_id, service_id, booked_price) \n`
                            + `VALUES (@booking_id, @service_id, @booked_price)`);
                }
                await transaction.commit();
                return true;
            } catch (error) {
                await transaction.rollback();
                return false;
            }
        } catch (error) {
            throw error;
        }
    },
}