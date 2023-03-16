const config = require("../config/config");
const sql = require("mssql");

module.exports = {
    getAllRegistedBird: async (email) => {
        let con = await config.connection();
        const request = con.request();
        const data = await request
            .input("email", sql.VarChar, email)
            .query("SELECT B.*, BT.name as type_name FROM [Bird] B \n" +
                "LEFT JOIN [BirdType] BT ON B.type_id = BT.btype_id \n" +
                "WHERE user_id = (SELECT user_id FROM [User] WHERE email = @email collate latin1_general_cs_as)")

        // check if each bird that currently boarding
        for(let i = 0; i < data.recordset.length; i++) {
            const boardingData = await con.request()
                .input("bird_id", sql.Int, data.recordset[i].bird_id)
                .query("SELECT * FROM [Booking] WHERE bird_id = @bird_id")
            if(boardingData.recordset.length > 0) {
                data.recordset[i].is_boarding = true;
            } else {
                data.recordset[i].is_boarding = false;
            }
        }

        return data.recordset || null;
    },
    deleteBirdById: async (bird_id) => {
        let con = await config.connection();
        const request = con.request();
        const returnData = await request
            .input("bird_id", sql.Int, bird_id)
            .query("DELETE FROM [Bird] WHERE bird_id = @bird_id")
        return returnData.rowsAffected[0];
    },
    getBirdById: async (bird_id) => {
        let con = await config.connection();
        const request = con.request();
        const returnData = await request
            .input("bird_id", sql.Int, bird_id)
            .query("SELECT B.*, BT.name as type_name FROM [Bird] B \n" +
                "LEFT JOIN [BirdType] BT ON B.type_id = BT.btype_id \n" +
                "WHERE bird_id = @bird_id")
        return (await returnData).recordset[0] || null;
    },
    registerNewBird: async (data) => {
        let con = await config.connection();
        const request = con.request();
        const returnData = await request
            .input("user_id", sql.Int, data.user_id)
            .input("type_id", sql.Int, data.type_id)
            .input("bird_name", sql.NVarChar, data.bird_name)
            .input("age", sql.Int, data.age)
            .input("gender", sql.Int, data.gender)
            .input("breed", sql.NVarChar, data.breed)
            .input("description", sql.NVarChar, data.description)
            .input("image", sql.NVarChar, data.image)
            .query("INSERT INTO [Bird] (user_id, type_id, age, bird_name, breed, gender, [image], [description]) \n" +
                "VALUES (@user_id, @type_id, @age, @bird_name, @breed, @gender, @image, @description)")
        return returnData.rowsAffected[0];
    },
    getBirdTypeId: async (bird_type) => {
        let con = await config.connection();
        const request = con.request();
        const returnData = await request
            .input("bird_type", sql.VarChar, bird_type)
            .query("SELECT btype_id FROM [BirdType] WHERE name = @bird_type")
        return (await returnData).recordset[0].btype_id || null;
    },
    getAllBirdType: async () => {
        let con = await config.connection();
        let sql = `SELECT * FROM [BirdType]`;
        const returnData = con.request().query(sql);
        return (await returnData).recordset || null;
    },
    updateBirdById: async (data) => {
        let con = await config.connection();
        const request = con.request();
        const returnData = await request
            .input("bird_id", sql.Int, data.bird_id)
            .input("type_id", sql.Int, data.type_id)
            .input("bird_name", sql.NVarChar, data.bird_name)
            .input("age", sql.Int, data.age)
            .input("gender", sql.Int, data.gender)
            .input("breed", sql.NVarChar, data.breed)
            .input("description", sql.NVarChar, data.description)
            .input("image", sql.NVarChar, data.image)
            .query("UPDATE [Bird] SET \n" +
                "type_id = COALESCE(@type_id, type_id), \n" +
                "bird_name = COALESCE(@bird_name, bird_name), \n" +
                "age = COALESCE(@age, age), \n" +
                "gender = COALESCE(@gender, gender), \n" +
                "breed = COALESCE(@breed, breed), \n" +
                "[image] = COALESCE(@image, [image]), \n" +
                "[description] = COALESCE(@description, [description]) \n" +
                "WHERE bird_id = @bird_id")
        return returnData.rowsAffected[0];
    },
}