const express = require('express')
const post = require('../controller/post.controller')


const router = express.Router()

router.route('/')
    .get(post.getAllPosts)
    .post(post.addPost)

router.route('/:post_id')
    .put(post.updatePostByID)
    .delete(post.deletePostByID)



module.exports = router