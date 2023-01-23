const AddFriend_arr = require('../models/AddFriend')

const getAllFriend = async(req,res) =>{

    try {
        const user_id_token =req.user._id
        const Friends = await AddFriend_arr.find({user_id_token})
        res.status(200).json(Friends)
    } catch (error) {
        res.status(400).json({error:error.message})
    }

}

const insertFriend = async(req,res) =>{
     const {name_user,image_user,_id_friend,IsFile} = req.body
     const user_id_token =req.user._id
    try {
         const Friend = await AddFriend_arr.create({name_user,image_user,user_id_token,_id_friend,IsFile})
         res.status(200).json(Friend)
    } catch (error) {
         res.status(400).json({error:error.message})
    }

}



const DeleteFriend = async(req,res) =>{
 const {id} = req.params;
//  const {_id_friend} = req.body
 console.log(req.body)
 console.log(`ObjectId(${id})`)
    try {
        const FriendDeleted = await AddFriend_arr.findOneAndDelete({ _id_friend:id})
        console.log(FriendDeleted)
        res.status(200).json(FriendDeleted)
    } catch (error) {
        res.status(400).json({error:error.message})
    }
}


module.exports ={getAllFriend,insertFriend,DeleteFriend}