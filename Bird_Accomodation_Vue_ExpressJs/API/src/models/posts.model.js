const { connection } = require("../../src/config/Connection");

module.exports = {
    getAllPosts: async () => {
        try {
            let con = await connection();
            let sql = `SELECT * FROM [Post]`;
            return con.query(sql);
        } catch (error) {
            throw error;
        }
    },
    addPost: async (body) => {
        //body include: {title, content, reference}
        try {
            let con = await connection();
            let sql = `INSERT INTO [Post] (title, content, reference) \n`
                sql += `VALUES ('${body.title}', '${body.content}', '${body.reference}')`;
            return con.query(sql);
        } catch (error) {
            throw error;
        }
    },
    updatePostByID: async (post_id, body) => {
        try {
            let con = await connection();
            let sql = `UPDATE [Post] \n`
                sql += `SET title = '${body.title}', content = '${body.content}', 
                        reference = '${body.reference}' WHERE post_id = ${post_id}`;
            return con.query(sql);
        } catch (error) {
            throw error;
        }
    },
    deletePostByID: async (post_id) => {
        try {
            let con = await connection();
            let sql = `DELETE FROM [Post] WHERE post_id = ${post_id}`;
            return con.query(sql);
        } catch (error) {
            throw error;
        }
    },
}