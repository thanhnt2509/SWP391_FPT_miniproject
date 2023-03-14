const config = require("../config/config");
const sql = require("mssql");

module.exports = {
    getAllPosts: async () => {
        let con = await config.connection();
        let sql = `SELECT * FROM [Post]`;
        const returnData = con.query(sql);
        return (await returnData).recordset || null;
    },
    addPost: async (body) => {
        //body include: {title, content, reference}
        let con = await config.connection();
        const request = con.request();
        const returnData = await request
            .input("title", sql.NVarChar, body.title)
            .input("content", sql.NVarChar, body.content)
            .input("reference", sql.NVarChar, body.reference)
            .query("INSERT INTO [Post] (title, content, reference) VALUES (@title, @content, @reference)");
        return returnData.rowsAffected[0];
    },
    updatePostByID: async (post_id, body) => {
        //body include: {title, content, reference}
        let con = await config.connection();
        const request = con.request();
        const returnData = await request
            .input("post_id", sql.Int, post_id)
            .input("title", sql.NVarChar, body.title)
            .input("content", sql.NVarChar, body.content)
            .input("reference", sql.NVarChar, body.reference)
            .query("UPDATE [Post] SET title = @title, content = @content, reference = @reference WHERE post_id = @post_id");
        return returnData.rowsAffected[0];
    },
    deletePostByID: async (post_id) => {
        let con = await config.connection();
        const request = con.request();
        const returnData = await request
            .input("post_id", sql.Int, post_id)
            .query("DELETE FROM [Post] WHERE post_id = @post_id");
        return returnData.rowsAffected[0];
    },
}