const express = require('express')
const { postConversation } = require('../controller/conversation')
const router  = express.Router()


router.post('/postConversation',postConversation)
router.get('/',)
router.get('/:conversationId',)




module.exports = router