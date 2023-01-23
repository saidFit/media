const express = require('express')
const { PostMessage } = require('../controller/message')

const router = express.Router()



router.post('/postmessage',PostMessage)



module.exports = router