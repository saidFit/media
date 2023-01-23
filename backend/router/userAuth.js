const express = require('express')
const { registeruser, login, getUserById, updateImageUser, updateImageCoverture } = require('../controller/userAuthController')
const requireAuth = require('../Middlewere/MiddlewereAuth')
const router  = express.Router()
const {upload} = require('../multer/multerUpload')


router.post('/register',upload.single('image'),registeruser)
router.post('/login',upload.single('image'),login)
router.get('/getById/:id',upload.single('image'),getUserById)
router.put('/putImageProfile/:id',upload.single('image'),updateImageUser)
router.put('/updateImageCoverture/:id',upload.single('image'),updateImageCoverture)

module.exports = router;