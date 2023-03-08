const config = require("../config/config");

module.exports = {
    getAllServices: async () => {
        let con = await config.connection();
        const request = new con.Request();
        const returnData = await request
            .query("SELECT * FROM Service WHERE status = 1");
        return (await returnData).recordset || null;
    },
    // getServiceByName: async (name) => {
    //     let con = await config.connection();
    //     const request = new con.Request();
    //     const returnData = await request
    //         .input("name", con.NVarChar, name)
    //         .query("SELECT * FROM Service WHERE name = @name");
    //     return (await returnData).recordset || null;
    // },
    getServiceById: async (service_id) => {
        let con = await config.connection();
        const request = new con.Request();
        const returnData = await request
            .input("service_id", con.NVarChar, service_id)
            .query("SELECT * FROM Service WHERE service_id = @service_id");
        return (await returnData).recordset || null;
    },
    addService: async (body) => {
        //body includes: name, description, price
        let con = await config.connection();
        const defaultStatus = 1;
        const request = new con.Request();
        const returnData = await request
            .input("name", con.NVarChar, body.name)
            .input("description", con.NVarChar, body.description)
            .input("status", con.Int, defaultStatus)
            .input("price", con.Int, body.price)
            .query("INSERT INTO Service (name, description, status, price) \n" +
                "VALUES (@name, @description, @status, @price)");
        return returnData.rowsAffected[0];
    },
    // updateServiceByName: async (name, body) => {
    //     //body includes: name, description, price
    //     let con = await config.connection();
    //     const request = new con.Request();
    //     const returnData = await request
    //         .input("name", con.NVarChar, name)
    //         .input("description", con.NVarChar, body.description)
    //         .input("price", con.Int, body.price)
    //         .query("UPDATE Service SET description = @description, price = @price WHERE name = @name");
    //     return returnData.rowsAffected[0];
    // },
    updateServiceById: async (service_id, body) => {
        //body includes: name, description, price
        let con = await config.connection();
        const request = new con.Request();
        const returnData = await request
        .input("service_id", con.NVarChar, service_id)
        .input("name", con.NVarChar, body.name)
            .input("description", con.NVarChar, body.description)
            .input("status", con.Int, body.status)
            .input("price", con.Int, body.price)
            .query("UPDATE Service SET status = @status, name = @name, description = @description, price = @price WHERE service_id = @service_id");
        return returnData.rowsAffected[0];
    },
    // deleteServiceByName: async (name) => {
    //     let con = await config.connection();
    //     const deleteStatus = 0;
    //     const request = new con.Request();
    //     const returnData = await request
    //         .input("name", con.NVarChar, name)
    //         .input("status", con.Int, deleteStatus)
    //         .query("UPDATE Service SET status = @status WHERE name = @name");
    //     return returnData.rowsAffected[0];
    // },
    deleteServiceById: async (service_id) => {
        let con = await config.connection();
        const deleteStatus = 0;
        const request = new con.Request();
        const returnData = await request
            .input("service_id", con.NVarChar, service_id)
            .input("status", con.Int, deleteStatus)
            .query("UPDATE Service SET status = @status WHERE service_id = @service_id");
        return returnData.rowsAffected[0];
    }
}