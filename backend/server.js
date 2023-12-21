const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const cors = require('cors')
const Routeruser    = require('./router/userAuth')
const RouterAddPost = require('./router/AddPost')
const RouterComment = require('./router/comment')
const RouterAddFriend = require('./router/AddFriend')
const RouterFavorite = require('./router/Favorite')
const RouterConversation = require('./router/Conversation')
const RouterMessage   = require('./router/message')
const app = express()
const path =require('path')

dotenv.config()

app.use(express.json())

app.use(cors({
  origin: ["http://localhost:3000","https://mern-task-app-5z6s.onrender.com"]
}
))
app.options('*', cors())

// ----------Middlewere from Schema---------//

app.use('/user',Routeruser)
app.use('/post',RouterAddPost)
app.use('/comment',RouterComment)
app.use('/friend',RouterAddFriend)
app.use('/Favorite',RouterFavorite)
app.use('/Conversation',RouterConversation)
app.use('/Message',RouterMessage)

app.use(express.static(path.join(__dirname, "./client/build")));


// app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

app.use("/assets", express.static(path.join(__dirname, "public/assets")));

// ----------middlewere--------//


mongoose.set('strictQuery', true)
const PORT = process.env.PORT || 7070
mongoose.connect(process.env.MONGO_URI)
.then(() => {
    app.listen(process.env.PORT, () =>{
        console.log(`connect to database & listening on port ${PORT}`)
    })
}).catch((error) =>{
    console.log(error.message)
})









