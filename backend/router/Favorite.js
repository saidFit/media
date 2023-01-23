
const express = require('express')
const { getAllFavorites, InsertFavorite, DeleteFavorite } = require('../controller/FvoriteController')
const router  = express.Router()


router.get('/',getAllFavorites)
router.post('/postFavorite',InsertFavorite)
router.delete('/delete/:id',DeleteFavorite)


module.exports = router