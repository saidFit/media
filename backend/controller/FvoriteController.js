const Favorites = require('../models/Favorite')




const getAllFavorites = async(req,res) =>{
  
    try {
        const Favorite = await Favorites.find({})
       return res.status(200).json(Favorite)
    } catch (error) {
        res.status(400).json({error:error.message})
    }
}



const InsertFavorite = async(req,res) =>{
    const {_id_post,_id_user} = req.body
    console.log(req.body)
    try {
         const Favorite = await Favorites.create({_id_post,_id_user})
         res.status(200).json({Favorite:Favorite,mssg:'ADDED'})
    } catch (error) {
         res.status(400).json({error:error.message})
    }
}



const DeleteFavorite = async(req,res) =>{

    const {id} = req.params
    console.log(id)
    try {
        const FavoriteDeleted = await Favorites.findByIdAndDelete({_id:id})
        res.status(200).json({FavoriteDeleted:FavoriteDeleted,mssg:'DELETED'})
    } catch (error) {
        res.status(400).json({error:error.message})
    }
}



module.exports ={getAllFavorites,InsertFavorite,DeleteFavorite}