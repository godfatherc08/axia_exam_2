
const express = require('express')
const router = express.Router()
const { addPost, getPost, getOnePost } = require('../controllers/post')

router.post('/add-post', addPost)
router.get('/get-post', getPost)
router.get('/get-one-post', getOnePost)

module.exports = router