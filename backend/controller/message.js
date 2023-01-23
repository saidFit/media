const Messages = require('../models/messages')




const PostMessage = async(req,res) =>{
     const {conversationId,senderId,receiverId,text} = req.body
    try {
        
        const message = await new Messages({
            conversationId:conversationId,
            senderId:senderId,
            receiverId:receiverId,
            text:text
        }).save()
        
        res.status(200).json(message)
    } catch (error) {
        res.status(400).json({error:error.message})
    }
}




module.exports = {PostMessage}