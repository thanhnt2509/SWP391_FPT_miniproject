const DBConnect = require("../../src/config/config");

module.exports = {
    updateUserName: async (user_id, name) => {
        let con = await DBConnect.connection();
        const request = new con.Request();
        const returnData = await request
            .input("user_id", DBConnect.sql.Int, user_id)
            .input("name", DBConnect.sql.NVarChar, name)
            .query("UPDATE [User] SET name = @name WHERE user_id = @user_id");
        return returnData.rowsAffected[0];
    }
}

