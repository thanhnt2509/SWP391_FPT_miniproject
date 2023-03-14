const postModel = require('../models/post.model');

module.exports = {
    getAllPosts: async (req, res, next) => {
        try {
            const result = await postModel.getAllPosts();
            const postList = result.map(item => ({
                post_id: item.post_id,
                title: item.title,
                content: item.content,
                reference: item.reference,
            }))
            res.status(200).send({
                exitcode: 0,
                message: "Get post list successfully",
                posts: postList
            })
        } catch (error) {
            console.log(error.message);
            res.status(500).send("Internal server error");
        }
    },
    addPost: async (req, res, next) => {
        try {
            const { title, content, reference } = req.body;
            const postDetail = {
                title: title,
                content: content,
                reference: reference
            }
            const result = await postModel.addPost(postDetail);
            console.log(result);
            if (result !== null){
                res.status(200).send({
                    exitcode: 0,
                    message: "Add post successfully"
                })
            } else {
                res.status(200).send({
                    exitcode: 101,
                    message: "Add post failed"
                })
            }
        } catch (error) {
            console.log(error.message);
            res.status(500).send("Internal server error");
        }
    },
    updatePostByID: async (req, res, next) => {
        try {
            const { post_id } = req.params;
            const { title, content, reference } = req.body;
            const postDetail = {
                title: title,
                content: content,
                reference: reference
            }
            const result = await postModel.updatePostByID(post_id, postDetail);
            if (result !== null){
                res.status(200).send({
                    exitcode: 0,
                    message: "Update post successfully"
                })
            } else {
                res.status(200).send({
                    exitcode: 101,
                    message: "Update post failed"
                })
            }
        } catch (error) {
            console.log(error.message);
            res.status(500).send("Internal server error");
        }
    },
    deletePostByID: async (req, res, next) => {
        try {
            const { post_id } = req.params;
            const result = await postModel.deletePostByID(post_id);
            if (result !== null){
                res.status(200).send({
                    exitcode: 0,
                    message: "Delete post successfully"
                })
            } else {
                res.status(200).send({
                    exitcode: 101,
                    message: "Delete post failed"
                })
            }
        } catch (error) {
            console.log(error.message);
            res.status(500).send("Internal server error");
        }
    },
}