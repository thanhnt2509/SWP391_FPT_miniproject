const express = require('express')

// CRUD Post
const { getAllPosts, addPost, updatePostByID, deletePostByID } = require('../models/posts.model')

const router = express.Router()

router.route('/')
    .get(async (req, res) => {
        try {
            let data = await getAllPosts()
            res.status(200).json(data.recordset)
        } catch (error) {
            res.status(400).json(error)
        }
    })
    .post(async (req, res) => {
        try {
            let data = await addPost(req.body)
            res.status(200).json(data)
        } catch (error) {
            res.status(400).json(error)
        }
    })

router.route('/:post_id')
    .put(async (req, res) => {
        try {
            let data = await updatePostByID(req.params.post_id, req.body)
            res.status(200).json(data)
        } catch (error) {
            res.status(400).json(error)
        }
    })
    .delete(async (req, res) => {
        try {
            let data = await deletePostByID(req.params.post_id)
            res.status(200).json(data)
        } catch (error) {
            res.status(400).json(error)
        }
    })



module.exports = router