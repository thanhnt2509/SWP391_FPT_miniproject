const config = require("../config/config");
const sql = require("mssql");

module.exports = {
    getAllServices: async () => {
        let con = await config.connection();
        const request = con.request();
        const returnData = await request
            .query("SELECT * FROM Service WHERE status = 1");
        return (await returnData).recordset || null;
    },
    getAllServiceHightLights: async () => {
        let con = await config.connection();
        const request = con.request();
        const returnData = await request
            .query("SELECT * FROM Service WHERE status = 1 and isHighLight = 1");
        return (await returnData).recordset || null;
    },
    getServiceById: async (service_id) => {
        let con = await config.connection();
        const request = con.request();
        const returnData = await request
            .input("service_id", sql.NVarChar, service_id)
            .query("SELECT * FROM Service WHERE service_id = @service_id");
        return (await returnData).recordset || null;
    },
    addService: async (body) => {
        //body includes: name, description, price
        const defaultStatus = 1;
        let con = await config.connection();
        const request = con.request();
        const returnData = await request
            .input("name", sql.NVarChar, body.name)
            .input("description", sql.NVarChar, body.description)
            .input("status", sql.Int, defaultStatus)
            .input("price", sql.Int, body.price)
            .input("isHighLight", sql.Int, 0)
            .input("isPack", sql.Int, 0)
            .query("INSERT INTO Service (name, description, status, price, isHighLight, isPack) \n" +
                "VALUES (@name, @description, @status, @price, @isHighLight, @isPack)");
        return returnData.rowsAffected[0];
    },
    updateServiceById: async (service_id, content, imagePath) => {
        //content includes: name, description, price
        let con = await config.connection();
        const request = con.request();
        const returnData = await request
            .input("service_id", sql.NVarChar, service_id)
            .input("name", sql.NVarChar, content.name)
            .input("description", sql.NVarChar, content.description)
            .input("price", sql.Int, content.price)
            .input("isHighlight", sql.Int, content.isHighlight)
            .input("isPack", sql.Int, content.isPack)
            .input("image", sql.NVarChar, imagePath)
            .query("UPDATE Service SET name = @name, description = @description, image = @image, isHighlight = @isHighlight, isPack = @isPack, price = @price WHERE service_id = @service_id");
        return returnData.rowsAffected[0];
    },
    deleteServiceById: async (service_id) => {
        const deleteStatus = 0;
        let con = await config.connection();
        const request = con.request();
        const returnData = await request
            .input("service_id", sql.NVarChar, service_id)
            .input("status", sql.Int, deleteStatus)
            .query("UPDATE Service SET status = @status WHERE service_id = @service_id");
        return returnData.rowsAffected[0];
    }
}