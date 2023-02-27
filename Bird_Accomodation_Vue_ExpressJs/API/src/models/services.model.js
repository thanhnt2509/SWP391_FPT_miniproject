const DBConnect = require("../../src/config/Connection");

module.exports = {
    getAllServices: async () => {
        let con = await DBConnect.connection();
        const request = new con.Request();
        const returnData = await request
            .query("SELECT * FROM Services WHERE status = 1");
        return (await returnData).recordset || null;
    },
    getServiceByName: async (name) => {
        let con = await DBConnect.connection();
        const request = new con.Request();
        const returnData = await request
            .input("name", DBConnect.sql.NVarChar, name)
            .query("SELECT * FROM Services WHERE name = @name");
        return (await returnData).recordset || null;
    },
    addService: async (body) => {
        //body includes: name, description, price
        let con = await DBConnect.connection();
        const defaultStatus = 1;
        const request = new con.Request();
        const returnData = await request
            .input("name", DBConnect.sql.NVarChar, body.name)
            .input("description", DBConnect.sql.NVarChar, body.description)
            .input("status", DBConnect.sql.Int, defaultStatus)
            .input("price", DBConnect.sql.Int, body.price)
            .query("INSERT INTO Services (name, description, status, price) \n" +
                "VALUES (@name, @description, @status, @price)");
        return returnData.rowsAffected[0];
    },
    updateServiceByName: async (name, body) => {
        //body includes: name, description, price
        let con = await DBConnect.connection();
        const request = new con.Request();
        const returnData = await request
            .input("name", DBConnect.sql.NVarChar, name)
            .input("description", DBConnect.sql.NVarChar, body.description)
            .input("price", DBConnect.sql.Int, body.price)
            .query("UPDATE Services SET description = @description, price = @price WHERE name = @name");
        return returnData.rowsAffected[0];
    },
    deleteServiceByName: async (name) => {
        let con = await DBConnect.connection();
        const deleteStatus = 0;
        const request = new con.Request();
        const returnData = await request
            .input("name", DBConnect.sql.NVarChar, name)
            .input("status", DBConnect.sql.Int, deleteStatus)
            .query("UPDATE Services SET status = @status WHERE name = @name");
        return returnData.rowsAffected[0];
    }
}