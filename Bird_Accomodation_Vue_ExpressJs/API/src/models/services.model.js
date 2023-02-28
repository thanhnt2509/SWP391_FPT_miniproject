const { connection } = require("../../src/config/Connection");

module.exports = {
    getAllServices: async () => {
        try {
            let con = await connection();
            let sql = `SELECT * FROM Services WHERE status = 1`;
            return con.query(sql);
        } catch (error) {
            throw error;
        }
    },
    getServiceByName: async (name) => {
        try {
            let con = await connection();
            let sql = `SELECT * FROM Services WHERE name = '${name}'`;
            return con.query(sql);
        } catch (error) {
            throw error;
        }
    },
    addService: async (body) => {
        //body includes: name, description, price
        try {
            let con = await connection();
            const defaultStatus = 1;
            let sql = `INSERT INTO Services (name, description, status, price) \n`
                sql += `VALUES ('${body.name}', '${body.description}', '${defaultStatus}', '${body.price}')`;
            return con.query(sql);
        } catch (error) {
            throw error;
        }
    },
    updateServiceByName: async (name, body) => {
        //body includes: name, description, price
        try {
            let con = await connection();
            let sql = `UPDATE Services SET \n`
                sql += `description = '${body.description}', price = '${body.price}' WHERE name = '${name}'`;
            return con.query(sql);
        } catch (error) {
            throw error;
        }
    },
    deleteServiceByName: async (name) => {
        try {
            let con = await connection();
            let sql = `UPDATE Services SET status = 0 WHERE name = '${name}'`;
            return con.query(sql);
        } catch (error) {
            throw error;
        }
    }
}