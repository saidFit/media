const mongoose = require('mongoose')
const {Schema} = mongoose;

const ConversationSchema = new Schema({
    binary:{
        type:Array,
        default:[]
    },
    imageSender:{
        type:String
    },
    IsFileSender:{
        type:Boolean
    },
    IsFileReceiver:{
        type:Boolean
    },
    imageReceiver:{
        type:String
    }
})


module.exports = mongoose.model('conversation',ConversationSchema)