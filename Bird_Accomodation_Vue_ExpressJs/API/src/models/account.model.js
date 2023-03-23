const config = require("../config/config");
const sql = require("mssql")

module.exports = {
    register: async (body) => {
        //body = {email, password, name, address, phone}
        const defaultUserImg = null;
        let con = await config.connection();
        const request = con.request();
        const returnData = await request
            .input("email", sql.NVarChar, body.email)
            .input("password", sql.NVarChar, body.password)
            .input("name", sql.NVarChar, body.name)
            .input("address", sql.NVarChar, body.address)
            .input("phone", sql.NVarChar, body.phone)
            .input("role", sql.Int, config.role.USER)
            .input("status", sql.Int, config.userStatus.ACTIVE)
            .input("user_img", sql.NVarChar, defaultUserImg)
            .query("INSERT INTO [User] (email, password, name, address, phone, role, status, user_img) \n" +
                "VALUES (@email, @password, @name, @address, @phone, @role, @status, @user_img)");
        return returnData.rowsAffected[0];
    },
    login: async (body) => {
        //body = {email, password}
        let con = await config.connection();
        const request = con.request();
        const returnData = await request
            .input("email", sql.NVarChar, body.email)
            .input("password", sql.NVarChar, body.password)
            .query("SELECT [user_id],[email],[name],[address],[phone],[role],[status],[user_img],[token] FROM [User] \n" +
                "WHERE email = @email collate latin1_general_cs_as \n" +
                "AND password = @password collate latin1_general_cs_as");
        return (await returnData).recordset || null;
    },
    validateEmail: async (email) => {
        let con = await config.connection();
        const request = con.request();
        const returnData = await request
            .input("email", sql.NVarChar, email)
            .query("SELECT [user_id],[email],[role] FROM [User] \n" +
                "WHERE email = @email collate latin1_general_cs_as");
        return (await returnData).recordset.length > 0;
    },
    validatePhone: async (phone) => {
        let con = await config.connection();
        const request = con.request();
        const returnData = await request
            .input("phone", sql.NVarChar, phone)
            .query("SELECT [user_id],[phone],[role] FROM [User] \n" +
                "WHERE phone = @phone collate latin1_general_cs_as");
        return (await returnData).recordset.length > 0;
    },
    getAccountByID: async (user_id) => {
        let con = await config.connection();
        const request = con.request();
        const returnData = await request
            .input("user_id", sql.Int, user_id)
            .query("SELECT [user_id],[email],[name],[address],[phone],[role],[status],[user_img],[token] FROM [User] \n" +
                "WHERE user_id = @user_id");
        return (await returnData).recordset || null;
    },
    getSearchAccount: async (body) => {
        let con = await config.connection();
        const request = con.request();
        const returnData = await request
            .input("name", sql.NVarChar, body.name)
            .input("email", sql.NVarChar, body.email)
            .input("phone", sql.NVarChar, body.phone)
            .query("SELECT [user_id],[email],[name],[address],[phone],[role],[status],[user_img],[token] FROM [User] \n" +
                "WHERE COALESCE(name, '') LIKE '%' + COALESCE(@name, '') + '%' \n" +
                "AND COALESCE(email, '') LIKE '%' + COALESCE(@email, '') + '%' \n" +
                "AND COALESCE(phone, '') LIKE '%' + COALESCE(@phone, '') + '%'");
        return (await returnData).recordset || null;
    },
    changeAccountStatus: async (user_id, newStatus) => {
        let con = await config.connection();
        const request = con.request();
        const returnData = await request
            .input("user_id", sql.Int, user_id)
            .input("status", sql.Int, newStatus)
            .query("UPDATE [User] SET status = @status WHERE user_id = @user_id");
        return returnData.rowsAffected[0];
    },
    validateRole: async (email) => {
        let con = await config.connection();
        const request = con.request();
        const returnData = await request
            .input("email", sql.NVarChar, email)
            .query("SELECT [role] FROM [User] \n" +
                "WHERE email = @email collate latin1_general_cs_as");
        return (await returnData).recordset[0].role || null;
    },
    getAllAccount: async () => {
        let con = await config.connection();
        const request = con.request();
        const returnData = await request
            .query("SELECT [user_id],[email],[name],[address],[phone],[role],[status],[user_img],[token] FROM [User]");
        return (await returnData).recordset || null;
    },
    updateUserName: async (user_id, name) => {
        let con = await config.connection();
        const request = con.request();
        const returnData = await request
            .input("user_id", sql.Int, user_id)
            .input("name", sql.NVarChar, name)
            .query("UPDATE [User] SET name = @name WHERE user_id = @user_id");
        return returnData.rowsAffected[0];
    },
    getUserId: async (email) => {
        let con = await config.connection();
        const request = con.request();
        const returnData = await request
            .input("email", sql.NVarChar, email)
            .query("SELECT [user_id] FROM [User] \n" +
                "WHERE email = @email collate latin1_general_cs_as");
        return (await returnData).recordset[0].user_id || null;
    },
}