const config = require("../config/config");

module.exports = {
    getAllRegistedBird: async (email) => {
        let con = await config.connection();
        const request = new con.Request();
        const returnData = await request
            .input("email", con.VarChar, email)
            .query("SELECT B.*, BT.name as type_name FROM [Bird] B \n" +
                "LEFT JOIN [BirdType] BT ON B.type_id = BT.btype_id \n" +
                "WHERE user_id = (SELECT user_id FROM [User] WHERE email = @email collate latin1_general_cs_as)")
        return (await returnData).recordset || null;
    },
    deleteBirdById: async (bird_id) => {
        let con = await config.connection();
        const request = new con.Request();
        const returnData = await request
            .input("bird_id", con.Int, bird_id)
            .query("DELETE FROM [Bird] WHERE bird_id = @bird_id")
        return returnData.rowsAffected[0];
    },
    getBirdById: async (bird_id) => {
        let con = await config.connection();
        const request = new con.Request();
        const returnData = await request
            .input("bird_id", con.Int, bird_id)
            .query("SELECT B.*, BT.name as type_name FROM [Bird] B \n" +
                "LEFT JOIN [BirdType] BT ON B.type_id = BT.btype_id \n" +
                "WHERE bird_id = @bird_id")
        return (await returnData).recordset[0] || null;
    },
    registerNewBird: async (data) => {
        let con = await config.connection();
        const request = new con.Request();
        const returnData = await request
            .input("user_id", con.Int, data.user_id)
            .input("type_id", con.Int, data.type_id)
            .input("bird_name", con.NVarChar, data.bird_name)
            .input("age", con.Int, data.age)
            .input("gender", con.Int, data.gender)
            .input("breed", con.NVarChar, data.breed)
            .input("description", con.NVarChar, data.description)
            .input("image", con.NVarChar, data.image)
            .query("INSERT INTO [Bird] (user_id, type_id, age, bird_name, breed, gender, [image], [description]) \n" +
                "VALUES (@user_id, @type_id, @age, @bird_name, @breed, @gender, @image, @description)")
        return returnData.rowsAffected[0];
    },
    getBirdTypeId: async (bird_type) => {
        let con = await config.connection();
        const request = new con.Request();
        const returnData = await request
            .input("bird_type", con.VarChar, bird_type)
            .query("SELECT btype_id FROM [BirdType] WHERE name = @bird_type")
        return (await returnData).recordset[0].btype_id || null;
    },
    getAllBirdType: async () => {
        let con = await config.connection();
        let sql = `SELECT * FROM [BirdType]`;
        const returnData = con.query(sql);
        return (await returnData).recordset || null;
    },
    updateBirdById: async (data) => {
        let con = await config.connection();
        const request = new con.Request();
        const returnData = await request
            .input("bird_id", con.Int, data.bird_id)
            .input("type_id", con.Int, data.type_id)
            .input("bird_name", con.NVarChar, data.bird_name)
            .input("age", con.Int, data.age)
            .input("gender", con.Int, data.gender)
            .input("breed", con.NVarChar, data.breed)
            .input("description", con.NVarChar, data.description)
            .input("image", con.NVarChar, data.image)
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