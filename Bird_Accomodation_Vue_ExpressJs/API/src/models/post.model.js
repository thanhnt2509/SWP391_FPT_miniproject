const config = require("../config/config");

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
        const request = new con.Request();
        const returnData = await request
            .input("title", con.NVarChar, body.title)
            .input("content", con.NVarChar, body.content)
            .input("reference", con.NVarChar, body.reference)
            .query("INSERT INTO [Post] (title, content, reference) VALUES (@title, @content, @reference)");
        return returnData.rowsAffected[0];
    },
    updatePostByID: async (post_id, body) => {
        //body include: {title, content, reference}
        let con = await config.connection();
        const request = new con.Request();
        const returnData = await request
            .input("post_id", con.Int, post_id)
            .input("title", con.NVarChar, body.title)
            .input("content", con.NVarChar, body.content)
            .input("reference", con.NVarChar, body.reference)
            .query("UPDATE [Post] SET title = @title, content = @content, reference = @reference WHERE post_id = @post_id");
        return returnData.rowsAffected[0];
    },
    deletePostByID: async (post_id) => {
        let con = await config.connection();
        const request = new con.Request();
        const returnData = await request
            .input("post_id", con.Int, post_id)
            .query("DELETE FROM [Post] WHERE post_id = @post_id");
        return returnData.rowsAffected[0];
    },
}