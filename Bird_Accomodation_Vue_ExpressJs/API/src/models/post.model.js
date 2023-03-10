const config = require("../config/config");

module.exports = {
    getAllPosts: async () => {
        let con = await config.knexConnection();
        const returnData = await con('Post').select();
        return returnData || null;
    },
    addPost: async (body) => {
        let con = await config.knexConnection();
        const { title, content, reference } = body;
        const returnData = await con('Post')
            .returning('post_id')
            .insert({
                title: title,
                content: content,
                reference: reference
            });
        return returnData || null;
    },
    updatePostByID: async (post_id, body) => {
        let con = await config.knexConnection();
        const { title, content, reference } = body;
        const returnData = await con('Post')
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
        let con = await config.knexConnection();
        const returnData = await con('Post')
            .where({
                post_id: post_id
            })
            .del();
        return returnData || null;
    },
}