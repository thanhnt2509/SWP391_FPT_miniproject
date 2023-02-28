const DBConnect = require("../../src/config/config");

module.exports = {
    register: async (body) => {
        //body = {email, password, name, address, phone}
        let con = await DBConnect.connection();
        const defaultRole = 0; //0: user, 1: admin
        const defaultStatus = 1; //0: inactive, 1: active
        const defaultUserImg = null;
        const request = new con.Request();
        const returnData = await request
            .input("email", DBConnect.sql.NVarChar, body.email)
            .input("password", DBConnect.sql.NVarChar, body.password)
            .input("name", DBConnect.sql.NVarChar, body.name)
            .input("address", DBConnect.sql.NVarChar, body.address)
            .input("phone", DBConnect.sql.NVarChar, body.phone)
            .input("role", DBConnect.sql.Int, defaultRole)
            .input("status", DBConnect.sql.Int, defaultStatus)
            .input("user_img", DBConnect.sql.NVarChar, defaultUserImg)
            .query("INSERT INTO [User] (email, password, name, address, phone, role, status, user_img) \n" +
                "VALUES (@email, @password, @name, @address, @phone, @role, @status, @user_img)");
        return returnData.rowsAffected[0];
    },
    login: async (body) => {
        //body = {email, password}
        let con = await DBConnect.connection();
        const request = new con.Request();
        const returnData = await request
            .input("email", DBConnect.sql.NVarChar, body.email)
            .input("password", DBConnect.sql.NVarChar, body.password)
            .query("SELECT [user_id],[email],[name],[address],[phone],[role],[status],[user_img],[token] FROM [User] \n" +
                "WHERE email = @email collate latin1_general_cs_as \n" +
                "AND password = @password collate latin1_general_cs_as");
        return (await returnData).recordset || null;
    },
    validateEmail: async (email) => {
        let con = await DBConnect.connection();
        const request = new con.Request();
        const returnData = await request
            .input("email", DBConnect.sql.NVarChar, email)
            .query("SELECT [user_id],[email],[role] FROM [User] \n" +
                "WHERE email = @email collate latin1_general_cs_as");
        if ((await returnData).recordset.length > 0) {
            return true;
        } else {
            return false;
        }
    },
    validatePhone: async (phone) => {
        let con = await DBConnect.connection();
        const request = new con.Request();
        const returnData = await request
            .input("phone", DBConnect.sql.NVarChar, phone)
            .query("SELECT [user_id],[phone] FROM [User] \n" +
                "WHERE phone = @phone");
        if ((await returnData).recordset.length > 0) {
            return true;
        } else {
            return false;
        }
    },
    getAccountByID: async (user_id) => {
        let con = await DBConnect.connection();
        const request = new con.Request();
        const returnData = await request
            .input("user_id", DBConnect.sql.Int, user_id)
            .query("SELECT [user_id],[email],[name],[address],[phone],[role],[status],[user_img],[token] FROM [User] \n" +
                "WHERE user_id = @user_id");
        return (await returnData).recordset || null;
    },
    getSearchAccount: async (body) => {
        let con = await DBConnect.connection();
        const request = new con.Request();
        const returnData = await request
            .input("name", DBConnect.sql.NVarChar, body.name)
            .input("email", DBConnect.sql.NVarChar, body.email)
            .input("phone", DBConnect.sql.NVarChar, body.phone)
            .query("SELECT [user_id],[email],[name],[address],[phone],[role],[status],[user_img],[token] FROM [User] \n" +
                "WHERE COALESCE(name, '') LIKE '%' + COALESCE(@name, '') + '%' \n" +
                "AND COALESCE(email, '') LIKE '%' + COALESCE(@email, '') + '%' \n" +
                "AND COALESCE(phone, '') LIKE '%' + COALESCE(@phone, '') + '%'");
        return (await returnData).recordset || null;
    },
    changeAccountStatus: async (user_id, newStatus) => {
        let con = await DBConnect.connection();
        const request = new con.Request();
        const returnData = await request
            .input("user_id", DBConnect.sql.Int, user_id)
            .input("status", DBConnect.sql.Int, newStatus)
            .query("UPDATE [User] SET status = @status WHERE user_id = @user_id");
        return returnData.rowsAffected[0];
    },
    validateRole: async (email) => {
        let con = await DBConnect.connection();
        const request = new con.Request();
        const returnData = await request
            .input("email", DBConnect.sql.NVarChar, email)
            .query("SELECT [role] FROM [User] \n" +
                "WHERE email = @email collate latin1_general_cs_as");
        return (await returnData).recordset[0].role || null;
    },
    getAllAccount: async () => {
        let con = await DBConnect.connection();
        const request = new con.Request();
        const returnData = await request
            .query("SELECT [user_id],[email],[name],[address],[phone],[role],[status],[user_img],[token] FROM [User]");
        return (await returnData).recordset || null;
    }
}