const Conversations = require("../models/Conversation")







const postConversation = async (req, res) => {
    const { sender, received } = req.body
    try {

        const conversationS = await Conversations.findOne(
            {
                binary: [
                    { sender: sender },
                    { received: received }
                ]}
            )

          if(!conversationS){
            console.log(conversationS)
            console.log(true)
            await new Conversations({
             binary: [{ sender: sender }, { received: received }]
         }).save() 

         const conversations = await Conversations.find({})
         res.status(200).json(conversations)
         return;

          }
          console.log(conversationS)
         return res.status(200).send('this binary already exist')
        
        } catch (error) {
            res.status(400).json({ error: error.message })
        }
}


module.exports = {
    postConversation
}