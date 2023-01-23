
const Users = require('../models/userAuthModel')
const JwT   = require('jsonwebtoken')
const Posts = require("../models/AddPostModel")
const AddFriend_arr = require('../models/AddFriend')
const Comments = require('../models/Comment')

const CreateToken = (_id) =>{
    return JwT.sign({_id},process.env.SECRET,{expiresIn: '3d'})
}


const registeruser = async(req,res) =>{
     const {firstName,lastName,email,password,location,occupation} = req.body
     console.log(req.body)
     const arr_errors = []
     if(!firstName){
        arr_errors.push('firstName')
     }
     if(!lastName){
        arr_errors.push('lastName')
     }
      if(!email){
       arr_errors.push('email')
     }
      if(!password){
        arr_errors.push('password')
     }
      if(!location){
       arr_errors.push('location')
     }
      if(!occupation){
       arr_errors.push('occupation')
     }
      if(arr_errors.length > 0){
       console.log(arr_errors)
      return res.status(400).json(arr_errors)
      }
    try {

       
        const now_user = await Users.register(firstName,lastName,email,password,req.file,location,occupation)
        const filter_user ={
           _id: now_user._id,
           firstName: now_user.firstName,
           lastName:now_user.lastName,
           email: now_user.email,
           image: now_user.image,
           location: now_user.location,
           occupation: now_user.occupation,
           IsFile:now_user.IsFile
        }
        const token    =  CreateToken(now_user._id)
        res.status(200).json({...filter_user,token})   

       
    } catch (error) {
        res.status(400).json({error:error.message})
    }

}


const login    = async(req,res) =>{
    const {email,password} = req.body
    const arr_errors = []
     if(!email){
      arr_errors.push('email')
    }
     if(!password){
       arr_errors.push('password')
    }
     if(arr_errors.length > 0){
      console.log(arr_errors)
     return res.status(400).json(arr_errors)
     }
    try {
        const user_exist =await Users.login(email,password)
        const filter_user ={
            _id: user_exist._id,
           firstName: user_exist.firstName,
           lastName:user_exist.lastName,
           email: user_exist.email,
           image: user_exist.image,
           location: user_exist.location,
           occupation: user_exist.occupation,
           IsFile:user_exist.IsFile,
           Image_Coverture:user_exist.Image_Coverture,

         }
        const token      = await CreateToken(user_exist._id)
        res.status(200).json({...filter_user,token})

    } catch (error) {
        res.status(400).json({error:error.message})
    }
}

const getUserById = async(req,res) =>{
     const {id} = req.params
     try {
         const SingleUser = await Users.findById({_id:id})
         res.status(200).json(SingleUser)
     } catch (error) {
         res.status(400).json({error:error.message})
     }
}

const updateImageUser = async(req,res) =>{
    const {id} = req.params;
    try {

         const user_find = await Users.findOne({_id:id})
          
         const user_update ={
            _id: user_find._id,
           firstName: user_find.firstName,
           lastName:user_find.lastName,
           email: user_find.email,
           image: req.file.path,
           location: user_find.location,
           occupation: user_find.occupation,
           IsFile:true,
           Image_Coverture:user_find.Image_Coverture
         }

         const token    = await CreateToken(user_update._id)
         const userUpdated = await Users.findByIdAndUpdate({_id:id},{
           ...user_update
        })
        const req_id_user = user_find._id
        const Post = await Posts.find({req_id_user:req_id_user})
              Post.map((post => post.image_user = req.file.path))

             await Posts.updateMany({
                req_id_user:id
             },{$set:{image_user:req.file.path}})

             const posts = await Posts.find({})

            const use=  await AddFriend_arr.updateMany({
            _id_friend:id
             },{$set:{image_user:req.file.path}})

             await Comments.updateMany({
                _id_user:id
             },{$set:{image_user:req.file.path}})
            
            const comments = await Comments.find() 
            const userr = await AddFriend_arr.find({})
            console.log(id,await AddFriend_arr.find({}))
             res.status(200).json({mssg:'this user has been updated',user:{...user_update,token},posts:posts,use,comments})
        
      
      
    } catch (error) {
        res.status(400).json({error:error.message})
    }
}


const updateImageCoverture = async(req,res) =>{
    const {id} = req.params
    try {
        await Users.findByIdAndUpdate({_id:id},
            {$set:{Image_Coverture:req.file.path}})

        const user  = await Users.findById(id)
        const userFormat = {

            _id: user._id,
            firstName: user.firstName,
            lastName:user.lastName,
            email: user.email,
            image: user.image,
            location: user.location,
            occupation: user.occupation,
            IsFile:user.IsFile,
            Image_Coverture:user.Image_Coverture

        }
        const token    =  CreateToken(userFormat._id)
        res.status(200).json({...userFormat,token})
    } catch (error) {
        res.status(400).json({error:error.message})
    }
}

module.exports  ={
    registeruser,
    login,
    getUserById,
    updateImageUser,
    updateImageCoverture
}