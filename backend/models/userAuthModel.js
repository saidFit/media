const mongoose = require('mongoose')
const validator = require('validator')
const    bcrypt    = require('bcrypt')
const {Schema} = mongoose;

const userSchema = new Schema({

    firstName:{
        type:String,
        required:true,
    },
    lastName:{
        type:String,
        required:true,
    },
    
    email:{
        type:String,
        required:true,
        unique  : true
    },
    password:{
        type:String,
        required:true
    },
    location:{
        type:String,
        required:true,
    },
    occupation:{
        type:String,
        required:true
    },
    image:{
        type: String,
        required: true,
        default:
          "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg",
    },
    IsFile:{
        type:Boolean,
        required:true,
        default:false
    },
    Image_Coverture:{
        type:String,
        default:''
    }

},{timestamps:true})


userSchema.statics.register = async function(firstName,lastName,email,password,image,location,occupation){
      
     
      if(!validator.isEmail(email)){
        throw Error("this email not valid...")
     }
     else if(!validator.isStrongPassword(password)){
        throw Error("this password not Strong enough...")
     }

     const email_exist = await this.findOne({email})
     if(email_exist){
        throw Error('this email already used...')
     }
     const salt = await bcrypt.genSalt(10)
     const hash = await bcrypt.hash(password,salt)
     const now_user = await this.create({firstName,lastName,email,password:hash,image,location,occupation,IsFile:true})
     return now_user
    //  const user_now = await this.create({username,email,password:hash,telephone,Address,image:path})
    }


userSchema.statics.login = async function(email,password) {

     if(!validator.isEmail(email)){
        throw Error('this email not valid...')
     }
     const email_exist = await this.findOne({email})
     if(!email_exist){
        throw Error("this email not exist")
     }   

     const match  = await bcrypt.compare(password,email_exist.password)
     if(!match){
        throw Error('this password not match...')
     }
      
     return email_exist
}




module.exports = mongoose.model('user',userSchema)