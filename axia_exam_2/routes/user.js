
const express = require('express')
const router = express.Router()
const { addUser, getUser } = require('../controllers/user')

router.post('/add-user', addUser)
router.get('/get-user', getUser)


module.exports = router