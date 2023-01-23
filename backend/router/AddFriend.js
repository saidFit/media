const express = require('express')
const { getAllFriend, insertFriend, DeleteFriend } = require('../controller/AddFriendController')
const router = express.Router()
const MiddlewereAuth = require('../Middlewere/MiddlewereAuth')


router.use(MiddlewereAuth)

router.get('/',getAllFriend)

router.post('/AddFriend',insertFriend)

router.delete('/DeleteFriend/:id',DeleteFriend)



module.exports = router