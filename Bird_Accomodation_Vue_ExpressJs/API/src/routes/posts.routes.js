const express = require('express')
const posts = require('../controller/posts.controller')


const router = express.Router()

router.route('/')
    .get(posts.getAllPosts)
    .post(posts.addPost)

router.route('/:post_id')
    .put(posts.updatePostByID)
    .delete(posts.deletePostByID)



module.exports = router