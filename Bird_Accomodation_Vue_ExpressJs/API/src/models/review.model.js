const {connection} = require('../../database/Connection');

module.exports = {
    getAllReviews: async() => {
        try {
            let con = await connection();
            let sql = `select u.name, u.user_img, r.* from Reviews r join [User] u on r.user_id = u.user_id`;
            return con.query(sql);
        } catch (error) {
            throw error;
        }
    }
}