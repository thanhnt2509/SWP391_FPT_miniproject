const db = require("../utils/dbConnect");

module.exports = {
    getAllPosts: async () => {
        const returnData = await db('Post').select();
        return returnData || null;
    },
    addPost: async (body) => {
        const { title, content, reference } = body;
        const returnData = await db('Post')
            .returning('post_id')
            .insert({
                title: title,
                content: content,
                reference: reference
            });
        return returnData || null;
    },
    updatePostByID: async (post_id, body) => {
        const { title, content, reference } = body;
        const returnData = await db('Post')
            .where({
                post_id: post_id
            })
            .update({
                title: title,
                content: content,
                reference: reference
            });
        return returnData || null;
    },
    deletePostByID: async (post_id) => {
        const returnData = await db('Post')
            .where({
                post_id: post_id
            })
            .del();
        return returnData || null;
    },
}