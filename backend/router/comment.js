const express = require('express')
const { getAllcomment, createComment } = require('../controller/CommentController')
const router  = express.Router()


router.get('/',getAllcomment)
router.post('/postComment',createComment)
// router.
module.exports = router