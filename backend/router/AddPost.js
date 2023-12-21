const express = require('express')
const { getAllPosts, InsertPost, updatePost } = require('../controller/AddPostController')
const router  = express.Router()
const {upload} = require('../multer/multerUpload')

router.get('/',getAllPosts)

// router.post('/AddPost',upload.single('image'),InsertPost)
router.post('/AddPost',InsertPost)
router.put('/putPost/:id',updatePost)



module.exports = router