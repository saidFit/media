const express = require('express')
const { getAllPosts, InsertPost, updatePost } = require('../controller/AddPostController')
const router  = express.Router()
const {upload} = require('../multer/multerUpload')

router.get('/',getAllPosts)

router.post('/AddPost',upload.single('image'),InsertPost)
router.put('/putPost/:id',upload.single('image'),updatePost)



module.exports = router