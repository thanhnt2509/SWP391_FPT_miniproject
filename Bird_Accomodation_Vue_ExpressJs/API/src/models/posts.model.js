const { request } = require("express");
const DBConnect = require("../../src/config/Connection");

module.exports = {
    getAllPosts: async () => {
        let con = await DBConnect.connection();
        let sql = `SELECT * FROM [Post]`;
        const returnData = con.query(sql);
        return (await returnData).recordset || null;
    },
    addPost: async (body) => {
        //body include: {title, content, reference}
        let con = await DBConnect.connection();
        const request = new con.Request();
        const returnData = await request
            .input("title", DBConnect.sql.NVarChar, body.title)
            .input("content", DBConnect.sql.NVarChar, body.content)
            .input("reference", DBConnect.sql.NVarChar, body.reference)
            .query("INSERT INTO [Post] (title, content, reference) VALUES (@title, @content, @reference)");
        return returnData.rowsAffected[0];
    },
    updatePostByID: async (post_id, body) => {
        //body include: {title, content, reference}
        let con = await DBConnect.connection();
        const request = new con.Request();
        const returnData = await request
            .input("post_id", DBConnect.sql.Int, post_id)
            .input("title", DBConnect.sql.NVarChar, body.title)
            .input("content", DBConnect.sql.NVarChar, body.content)
            .input("reference", DBConnect.sql.NVarChar, body.reference)
            .query("UPDATE [Post] SET title = @title, content = @content, reference = @reference WHERE post_id = @post_id");
        return returnData.rowsAffected[0];
    },
    deletePostByID: async (post_id) => {
        let con = await DBConnect.connection();
        const request = new con.Request();
        const returnData = await request
            .input("post_id", DBConnect.sql.Int, post_id)
            .query("DELETE FROM [Post] WHERE post_id = @post_id");
        return returnData.rowsAffected[0];
    },
}