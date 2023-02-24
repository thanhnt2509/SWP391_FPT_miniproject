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
                    '${body.bird_name}','${body.breed}','${body.gender}','${body.image}','${body.description}')`
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
    
}