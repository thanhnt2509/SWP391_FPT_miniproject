const config = require("../config/config");

module.exports = {
    getAllServices: async () => {
        let con = await config.knexConnection();
        const result = await con("Service")
            .where({ status: config.serviceStatus.AVAILABLE })
        return result || null;
    },
    getServiceByName: async (name) => {
        // let con = await config.connection();
        // const request = new con.Request();
        // const returnData = await request
        //     .input("name", con.NVarChar, name)
        //     .query("SELECT * FROM Service WHERE name = @name");
        // return (await returnData).recordset || null;
        let con = await config.knexConnection();
        const result = await con("Service")
            .where({
                name: name,
                status: config.serviceStatus.AVAILABLE
            })
        return result || null;
    },
    getServiceById: async (service_id) => {
        let con = await config.knexConnection();
        const result = await con("Service")
            .where({ 
                service_id: service_id,
                // status: config.serviceStatus.AVAILABLE 
            })
        return result || null;
    },
    addService: async (body) => {
        let con = await config.knexConnection();
        const result = await con("Service")
            .insert({
                name: body.name,
                description: body.description,
                status: config.serviceStatus.AVAILABLE,
                price: body.price
            })
            .returning("service_id");
        return result || null;
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
    updateServiceById: async (data) => {
        let con = await config.knexConnection();
        const result = await con("Service")
            .where({ service_id: data.service_id })
            .update({
                name: data.name,
                description: data.description,
                price: data.price
            })
        return result || null;
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
        let con = await config.knexConnection();
        const result = await con("Service")
            .where({ service_id: service_id })
            .update({
                status: config.serviceStatus.UNAVAILABLE
            })
        return result || null;
    }
}