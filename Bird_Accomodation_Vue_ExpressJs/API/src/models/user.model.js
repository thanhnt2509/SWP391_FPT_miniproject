const DBConnect = require("../../src/config/config");

module.exports = {
    getUser: async () => {
        let con = await DBConnect.connection();
        const returnData = con.query("SELECT * FROM [User]");
        return (await returnData).recordset || null;
    },
    updateUserName: async (user_id, name) => {
        let con = await DBConnect.connection();
        // let sql = `UPDATE [User] SET name = '${name}' WHERE user_id = ${user_id}`;
        // const returnData = await con.query(sql);
        const request = new con.Request();
        const returnData = await request
            .input("user_id", DBConnect.sql.Int, user_id)
            .input("name", DBConnect.sql.NVarChar, name)
            .query("UPDATE [User] SET name = @name WHERE user_id = @user_id");
        return returnData.rowsAffected[0];
    }
}

