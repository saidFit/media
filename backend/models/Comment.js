const mongoose = require('mongoose')

const {Schema} = mongoose;

const CommentSchema = new Schema({

      _id_post:{
        type:String,
        required:true
      },
      _id_user:{
        type:String,
        required:true
      },
      comment:{
        type:String,
        required:true
      },
      image_user:{
        type:String,
        required:true
      },
      IsFile:{
        type:Boolean
      },
      name_user:{
        type:String,
        required:true
      }

})

module.exports = mongoose.model('comment',CommentSchema)