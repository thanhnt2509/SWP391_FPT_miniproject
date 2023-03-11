const express = require('express')
const post = require('../controller/post.controller')
const { verifyLogin } = require('../middlewares/verifyLogin.mdw');
const { verifyAdmin } = require('../middlewares/verifyAdmin.mdw');

const router = express.Router()

router.route('/')
    .get(post.getAllPosts)
    .post(verifyLogin, verifyAdmin, post.addPost)

router.route('/:post_id')
    .put(verifyLogin, verifyAdmin, post.updatePostByID)
    .delete(verifyLogin, verifyAdmin, post.deletePostByID)

module.exports = router