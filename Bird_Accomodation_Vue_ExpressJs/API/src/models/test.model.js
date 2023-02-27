const { connection } = require("../../src/config/Connection");

module.exports = {
    getUser: async (req, res) => {
        try {
            let con = await connection();
            let data = await con.query('SELECT * FROM [User]');
            res.status(200).json(data.recordset);
        } catch (error) {
            throw error;
        }
    }
};