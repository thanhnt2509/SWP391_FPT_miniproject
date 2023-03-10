const config = require("../../src/config/config");

module.exports = {
    register: async (body) => {
        //body = {email, password, name, address, phone}
        let con = await config.connection();
        const defaultRole = 0; //0: user, 1: admin
        const defaultStatus = 1; //0: inactive, 1: active
        const defaultUserImg = null;
        const request = new con.Request();
        const returnData = await request
            .input("email", con.NVarChar, body.email)
            .input("password", con.NVarChar, body.password)
            .input("name", con.NVarChar, body.name)
            .input("address", con.NVarChar, body.address)
            .input("phone", con.NVarChar, body.phone)
            .input("role", con.Int, defaultRole)
            .input("status", con.Int, defaultStatus)
            .input("user_img", con.NVarChar, defaultUserImg)
            .query("INSERT INTO [User] (email, password, name, address, phone, role, status, user_img) \n" +
                "VALUES (@email, @password, @name, @address, @phone, @role, @status, @user_img)");
        return returnData.rowsAffected[0];
    },
    login: async (body) => {
        let con = await config.knexConnection();
        const returnData = await con('User')
            .where({
                email: body.email,
                password: body.password
            })
            .first();
        return returnData;
    },
    // login: async (body) => {
    //     //body = {email, password}
    //     let con = await config.connection();
    //     const request = new con.Request();
    //     const returnData = await request
    //         .input("email", con.NVarChar, body.email)
    //         .input("password", con.NVarChar, body.password)
    //         .query("SELECT [user_id],[email],[name],[address],[phone],[role],[status],[user_img],[token] FROM [User] \n" +
    //             "WHERE email = @email collate latin1_general_cs_as \n" +
    //             "AND password = @password collate latin1_general_cs_as");
    //     return (await returnData).recordset || null;
    // },
    validateEmail: async (email) => {
        let con = await config.connection();
        const request = new con.Request();
        const returnData = await request
            .input("email", con.NVarChar, email)
            .query("SELECT [user_id],[email],[role] FROM [User] \n" +
                "WHERE email = @email collate latin1_general_cs_as");
        if ((await returnData).recordset.length > 0) {
            return true;
        } else {
            return false;
        }
    },
    validatePhone: async (phone) => {
        let con = await config.connection();
        const request = new con.Request();
        const returnData = await request
            .input("phone", con.NVarChar, phone)
            .query("SELECT [user_id],[phone] FROM [User] \n" +
                "WHERE phone = @phone");
        if ((await returnData).recordset.length > 0) {
            return true;
        } else {
            return false;
        }
    },
    getAccountByID: async (user_id) => {
        let con = await config.connection();
        const request = new con.Request();
        const returnData = await request
            .input("user_id", con.Int, user_id)
            .query("SELECT [user_id],[email],[name],[address],[phone],[role],[status],[user_img],[token] FROM [User] \n" +
                "WHERE user_id = @user_id");
        return (await returnData).recordset || null;
    },
    getSearchAccount: async (body) => {
        let con = await config.connection();
        const request = new con.Request();
        const returnData = await request
            .input("name", con.NVarChar, body.name)
            .input("email", con.NVarChar, body.email)
            .input("phone", con.NVarChar, body.phone)
            .query("SELECT [user_id],[email],[name],[address],[phone],[role],[status],[user_img],[token] FROM [User] \n" +
                "WHERE COALESCE(name, '') LIKE '%' + COALESCE(@name, '') + '%' \n" +
                "AND COALESCE(email, '') LIKE '%' + COALESCE(@email, '') + '%' \n" +
                "AND COALESCE(phone, '') LIKE '%' + COALESCE(@phone, '') + '%'");
        return (await returnData).recordset || null;
    },
    changeAccountStatus: async (user_id, newStatus) => {
        let con = await config.connection();
        const request = new con.Request();
        const returnData = await request
            .input("user_id", con.Int, user_id)
            .input("status", con.Int, newStatus)
            .query("UPDATE [User] SET status = @status WHERE user_id = @user_id");
        return returnData.rowsAffected[0];
    },
    validateRole: async (email) => {
        let con = await config.connection();
        const request = new con.Request();
        const returnData = await request
            .input("email", con.NVarChar, email)
            .query("SELECT [role] FROM [User] \n" +
                "WHERE email = @email collate latin1_general_cs_as");
        return (await returnData).recordset[0].role || null;
    },
    getAllAccount: async () => {
        let con = await config.connection();
        const request = new con.Request();
        const returnData = await request
            .query("SELECT [user_id],[email],[name],[address],[phone],[role],[status],[user_img],[token] FROM [User]");
        return (await returnData).recordset || null;
    },
    updateUserName: async (user_id, name) => {
        let con = await config.connection();
        const request = new con.Request();
        const returnData = await request
            .input("user_id", con.Int, user_id)
            .input("name", con.NVarChar, name)
            .query("UPDATE [User] SET name = @name WHERE user_id = @user_id");
        return returnData.rowsAffected[0];
    },
    getUserId: async (email) => {
        let con = await config.connection();
        const request = new con.Request();
        const returnData = await request
            .input("email", con.NVarChar, email)
            .query("SELECT [user_id] FROM [User] \n" +
                "WHERE email = @email collate latin1_general_cs_as");
        return (await returnData).recordset[0].user_id || null;
    },
}