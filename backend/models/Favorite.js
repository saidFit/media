const mongoose = require('mongoose')

const {Schema} = mongoose;

const FavoriteSchema = new Schema({

    _id_post:{
      type:String,
      required:true
    },
    _id_user:{
      type:String,
      required:true
    },
})


module.exports = mongoose.model('favorite',FavoriteSchema)