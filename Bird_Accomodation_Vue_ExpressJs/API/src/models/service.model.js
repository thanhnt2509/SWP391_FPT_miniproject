const DBConnect = require("../config/config");

module.exports = {
    getAllServices: async () => {
        let con = await DBConnect.connection();
        const request = new con.Request();
        const returnData = await request
            .query("SELECT * FROM Service WHERE status = 1");
        return (await returnData).recordset || null;
    },
    // getServiceByName: async (name) => {
    //     let con = await DBConnect.connection();
    //     const request = new con.Request();
    //     const returnData = await request
    //         .input("name", DBConnect.sql.NVarChar, name)
    //         .query("SELECT * FROM Service WHERE name = @name");
    //     return (await returnData).recordset || null;
    // },
    getServiceById: async (service_id) => {
        let con = await DBConnect.connection();
        const request = new con.Request();
        const returnData = await request
            .input("service_id", DBConnect.sql.NVarChar, service_id)
            .query("SELECT * FROM Service WHERE service_id = @service_id");
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
            .query("INSERT INTO Service (name, description, status, price) \n" +
                "VALUES (@name, @description, @status, @price)");
        return returnData.rowsAffected[0];
    },
    // updateServiceByName: async (name, body) => {
    //     //body includes: name, description, price
    //     let con = await DBConnect.connection();
    //     const request = new con.Request();
    //     const returnData = await request
    //         .input("name", DBConnect.sql.NVarChar, name)
    //         .input("description", DBConnect.sql.NVarChar, body.description)
    //         .input("price", DBConnect.sql.Int, body.price)
    //         .query("UPDATE Service SET description = @description, price = @price WHERE name = @name");
    //     return returnData.rowsAffected[0];
    // },
    updateServiceById: async (service_id, body) => {
        //body includes: name, description, price
        let con = await DBConnect.connection();
        const request = new con.Request();
        const returnData = await request
        .input("service_id", DBConnect.sql.NVarChar, service_id)
        .input("name", DBConnect.sql.NVarChar, body.name)
            .input("description", DBConnect.sql.NVarChar, body.description)
            .input("status", DBConnect.sql.Int, body.status)
            .input("price", DBConnect.sql.Int, body.price)
            .query("UPDATE Service SET status = @status, name = @name, description = @description, price = @price WHERE service_id = @service_id");
        return returnData.rowsAffected[0];
    },
    // deleteServiceByName: async (name) => {
    //     let con = await DBConnect.connection();
    //     const deleteStatus = 0;
    //     const request = new con.Request();
    //     const returnData = await request
    //         .input("name", DBConnect.sql.NVarChar, name)
    //         .input("status", DBConnect.sql.Int, deleteStatus)
    //         .query("UPDATE Service SET status = @status WHERE name = @name");
    //     return returnData.rowsAffected[0];
    // },
    deleteServiceById: async (service_id) => {
        let con = await DBConnect.connection();
        const deleteStatus = 0;
        const request = new con.Request();
        const returnData = await request
            .input("service_id", DBConnect.sql.NVarChar, service_id)
            .input("status", DBConnect.sql.Int, deleteStatus)
            .query("UPDATE Service SET status = @status WHERE service_id = @service_id");
        return returnData.rowsAffected[0];
    }
}