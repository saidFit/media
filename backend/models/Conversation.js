const mongoose = require('mongoose')
const {Schema} = mongoose;

const ConversationSchema = new Schema({
    binary:{
        type:Array,
        default:[]
    }
})

module.exports = mongoose.model('conversation',ConversationSchema)