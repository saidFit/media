const mongoose = require('mongoose')

const {Schema} = mongoose;

const PostSchema = new Schema({

    title:{
        type:String,
        required:true,
    },
    
    image:{
        type:String,
        required:true,
        default:
        "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg",
    },
    IsImagePath:{
        type:Boolean,
        default:false
    },
   
    comment:{
        type:[Object],
        required:true,
    },
    name_user:{
        type:String,
        required:true
    },
    image_user:{
        type:String,
        required:true
    },
    location_user:{
        type:String,
        required:true
    },
    IsFile:{
        type:Boolean
    },
    req_id_user:{
        type:String,
        required:true
    }
})


module.exports = mongoose.model('NowPost',PostSchema)
