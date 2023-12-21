const Messages = require('../models/messages')




const PostMessage = async(req,res) =>{
     const {
        conversationId
        ,senderId
        ,receiverId
        ,text
        ,imageSender
        ,IsFileSender
        ,IsFileReceiver
        ,imageReceiver
    } = req.body
     console.log(req.body)
    try {
        
        const message = await new Messages({
            conversationId,
            senderId,
            receiverId,
            text,
            imageSender,
            IsFileSender,
            IsFileReceiver,
            imageReceiver,

        }).save()

        const messages = await Messages.find({conversationId})
        res.status(200).json(messages)

    } catch (error) {
        res.status(400).json({error:error.message})
    }
}




module.exports = {PostMessage}