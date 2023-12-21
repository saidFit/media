const express = require('express')
const { registeruser, login, getUserById, updateImageUser, updateImageCoverture, processToken } = require('../controller/userAuthController')
const requireAuth = require('../Middlewere/MiddlewereAuth')
const router  = express.Router()
const {upload} = require('../multer/multerUpload')


router.post('/register',registeruser)
router.post('/login',login)
router.get('/getById/:id',getUserById)
router.put('/putImageProfile/:id',updateImageUser)
router.put('/updateImageCoverture/:id',updateImageCoverture)
router.post('/processToken',processToken)
module.exports = router;