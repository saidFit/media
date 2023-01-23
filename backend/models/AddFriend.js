const mongoose = require('mongoose')

const {Schema} = mongoose;

const AddFriendSchema = new Schema({

    name_user:{
        type:String,
        required:true
    },
    image_user:{
        type:String,
        required:true
    },
    _id_friend:{
       type:String,
       required:true
    },
    IsFile:{
        type:Boolean
    },
    user_id_token:{
        type:String,
        required:true
    }
})

module.exports = mongoose.model('AddFriend',AddFriendSchema)