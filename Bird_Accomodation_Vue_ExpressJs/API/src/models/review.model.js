const config = require("../../src/config/config");

module.exports = {
    getAllReviews: async () => {
        //very sussy, need  more work
        let con = await config.connection();
        const returnData = con.query("select u.name, u.user_img, r.* from Review r join [User] u on r.user_id = u.user_id");
        return (await returnData).recordset || null;
    }
}