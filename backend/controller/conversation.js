const Conversations = require("../models/Conversation")
const Messages = require("../models/messages")
const Users = require("../models/userAuthModel")

const postConversation = async (req, res) => {
  
    const { sender, receiver } = req.params
    const {imageSender,IsFileSender,IsFileReceiver,imageReceiver} = req.body

    try {

        const conversation = await Conversations.findOne(
            {
                binary: { $all: [sender,receiver] },

            })
       
            // const conversation = await Conversations.findOne({binary:{$in:[{sender,receiver}]}})
           
          if(!conversation){
           const conversation = await new Conversations({
             binary: [ sender , receiver],
            imageSender,
            IsFileSender,
            IsFileReceiver,
            imageReceiver
         }).save() 

         const conversations = await Conversations.find({binary:{$in:[sender]}})
        //  const binary        = await conversations.map((cov) => cov.binary[1])
        const binary        = await conversations.map((cov) => cov.binary[1] == sender ? cov.binary[0] :cov.binary[1])

         const users         = await Users.find()
         const conversationUsers       = await users.filter(user =>{
             if(binary.includes(user._id.toString())){
                return user;
             }
           })
         console.log(conversationUsers)
         const {_id}         = conversation;
         const messages      = await Messages.find({conversationId:_id})
         res.status(200).json({conversations,conversationUsers,conversation,messages})
         return;

          }
          else{
           
          const conversations = await Conversations.find({binary:{$in:[sender]}})
          const binary        = await conversations.map((cov) => cov.binary[1] == sender ? cov.binary[0] :cov.binary[1])

          const users         = await Users.find()
          const conversationUsers       = await users.filter(user =>{
            if(binary.includes(user._id.toString())){
               return user;
            }
          })

          console.log(conversationUsers,'kkkk')
          const {_id}    = conversation
          const messages = await Messages.find({conversationId:_id})
          return res.status(200).json({conversation,conversationUsers,conversations,messages,mssg:'this binary already exist'}) 
          }
         
        
        } catch (error) {
            res.status(400).json({ error: error.message })
        }
}


module.exports = {
    postConversation
}