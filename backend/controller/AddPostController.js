const Posts_arr = require('../models/AddPostModel')
const Comment_arr  = require('../models/Comment')
const sharp = require('sharp');

const getAllPosts = async(req,res) =>{

     try {
        const Posts = await Posts_arr.find({}).sort({_id:-1});
        res.status(200).json(Posts)
     } catch (error) {
         res.status(400).json({error:error.message})
     }
}

const InsertPost = async(req,res) =>{
       console.log(req.body)
       const {title,comment,req_id_user,image,name_user,image_user,location_user} =  req.body

       if(!title && !image){
          return res.status(400).json({error:'you should to select one thing (text or image)'})
       }
      
    try {
      
        // await NowPost.save()
        if(!image){
           const NowPost = await Posts_arr.create({title,comment,name_user:name_user,image_user:image_user,location_user:location_user,req_id_user:req_id_user})
                // NowPost.user.push(JSON.stringify(user))
                NowPost.save()   
          return res.status(200).json(NowPost)   
        }
        
        const NowPost = await Posts_arr.create({title,comment,image,name_user:name_user,image_user:image_user,location_user:location_user,req_id_user:req_id_user})
        NowPost.save();   
        console.log(NowPost)
        res.status(200).json(NowPost)  
    
    } catch (error) {
        res.status(400).json({error:error.message})
    }
}


const  updatePost  = async(req,res) =>{
   const {id} = req.params
    try {
        const PostUpdated = await Posts_arr.findByIdAndUpdate({_id:id},{
            ...req.body
        })
        res.status(200).json({mssg:"postUpdated",})
    } catch (error) {
        res.satatus(400).json({error:error.message})
    }
}



module.exports = {getAllPosts,InsertPost,updatePost}