const { connection } = require("../../src/config/Connection");

module.exports = {
    getUser: async () => {
        try {
            let con = await connection();
            let sql = `SELECT * FROM [User]`;
            return con.query(sql);
        } catch (error) {
            throw error;
        }
    },
    updateUserName: async (user_id, body) => {
        try {
            let con = await connection();
            let sql = `UPDATE [User] SET name = '${body.name}' WHERE user_id = ${user_id}`;
            return con.query(sql);
        }catch (error) {
            throw error;
        }
    }
}

