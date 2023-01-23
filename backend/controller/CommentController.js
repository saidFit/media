const Comment_arr  = require('../models/Comment')


const getAllcomment  = async(req,res) =>{

    try {
        const Comments = await Comment_arr.find({})
        res.status(200).json(Comments)
    } catch (error) {
        res.status(400).json({error:error.message})
    }
}

const createComment = async(req,res) =>{
     const {_id_post,comment,image_user,name_user,_id_user,IsFile} = req.body
     console.log(req.body)
    try {
        const new_comment = await Comment_arr.create({_id_post,comment:comment,image_user,name_user,_id_user,IsFile})
        res.status(200).json(new_comment)
    } catch (error) {
        res.status(400).json({error:error.message})
    }
}


module.exports = {getAllcomment,createComment}