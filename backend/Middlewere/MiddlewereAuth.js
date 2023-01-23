const JwT = require('jsonwebtoken')
const Users = require('../models/userAuthModel')


// this middle your binifet is virifie the token is exist or not
const requireAuth = async(req,res,next) =>{
   
    const { authorization } = req.headers // authorization == valueToken
    // verify if authorization == null
    if(!authorization){
      return res.status(404).json({error:'authorization is required!'})
    }
  // split token;
  // bearer  sdosdhfdfjowiduw0dweufoiwefuweoifuefwpf
  
  const token = authorization.split(' ')[1]
  
  try {
  
      const { _id } = JwT.verify(token, process.env.SECRET)
      req.user = await Users.findOne({ _id }).select('_id')
      next()
  
  } catch (error) {
      // res.status(404).json({error:'the token is not found'})
      throw error
  }
    
  }

module.exports = requireAuth