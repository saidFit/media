const express = require('express')
const { postConversation } = require('../controller/conversation')
const router  = express.Router()
const MiddlewereAuth = require('../Middlewere/MiddlewereAuth')



router.use(MiddlewereAuth)

router.post('/postConversation/:sender/:receiver',postConversation)
router.get('/',)
router.get('/:conversationId',)



module.exports = router