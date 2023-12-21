import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
}
from 'react-router-dom'
import { Navbar } from './components/Navbar'
import { Register } from './pages/Register'
import { Login } from './pages/Login'
import { ProfileUser } from './pages/ProfileUser'
import { Social } from './pages/Social'
import { AddFavoriteAction, DeleteFavoriteAction, GetAllFavoritesAction } from './redux/Actions/ActionsFavorites'
import { AddFriendAction, DeleteFriendAction, GetAllFriendAction } from './redux/Actions/AddFriendActions'
import { AddNewCommentAction, GetAllComment } from './redux/Actions/CommentActions'
import { AddNewPostAction, getAllPostsAction } from './redux/Actions/PostAction'
import { Chat } from './pages/chat/Chat'

export const URL = process.env.REACT_APP_SERVER_URL;
// export const URL = 'http://localhost:7070';

export const App = () => {
  const [image,setimage] = useState('')
  const [title,settitle] = useState('')
  const [IsClickImage,setIsClickImage] = useState(false)
  const [comment,setcomment] = useState('')
  const [IdClick,setIdClick] = useState(null)
  const [IsclickCreateComment, setIsclickCreateComment] = useState(false)
  const [SizeScreen,setSizeScreen] = useState('11.4px')
  const [colorButtons,setcolorButtons] = useState('#00D5FA')
  const [backgroundColor,setbackgroundColor] = useState('#F0F0F0')
  const dispatch = useDispatch() 

  const {user,IsValid,user_Register} = useSelector((state) => state.userRegister)
  const {New_Comment}      = useSelector((state)=> state.AddNewComment)
  const {Favorites} = useSelector((state) => state.AddFavorite)
  const {loading_Posts}  = useSelector((state) => state.addPost)


  useEffect(()=>{
   if(user){
    localStorage.setItem('Login',JSON.stringify({user,IsValid}))
   }
 },[user])

 useEffect(()=>{
  dispatch((getAllPostsAction()))
  dispatch((GetAllFriendAction()))
  dispatch((GetAllFavoritesAction()))
},[])


useEffect(()=>{
  dispatch((GetAllComment()))
},[New_Comment])



 const handlePost = () =>{
   if(!title && !image){
    return false
   }

       const Post = {
        title,
        name_user:`${user.firstName}-${user.lastName}`,
        image_user:user.image,
        req_id_user:user._id,
        location_user:user.location,
      }
     dispatch((AddNewPostAction(Post,image,settitle,setIsClickImage,IsClickImage)))   
}


const handleComment =(_id) =>{
  const name_user = `${user.firstName}-${user.lastName}`
  const comment_create = {_id_post:_id,comment:comment,image_user:user.image,IsFile:user.IsFile,name_user:name_user,_id_user:user._id}
  dispatch((AddNewCommentAction(comment_create,setcomment)))
}


const handleAddFriend = (req_id_user,image_user,name_user,type_request) =>{

  if(type_request == 'AddFriend'){

   const user_Added = {_id_friend:req_id_user,image_user,name_user}
   dispatch((AddFriendAction(user_Added)))
  }else{
   dispatch((DeleteFriendAction(req_id_user)))
  }
}


const handleShowCommnet = (_id) =>{
  if(_id !== IdClick){
    setIsclickCreateComment(true)
    setIdClick(_id)
    return
  }
  setIdClick(_id)
  setIsclickCreateComment(!IsclickCreateComment)
}


  const HandleFavorite =(_id) =>{

     const exist_user = Favorites.find((Favorite) =>{
      if(Favorite._id_post == _id && Favorite._id_user == user._id){
        return Favorite
      }
     })
     if(exist_user){
        dispatch((DeleteFavoriteAction(exist_user._id)))
     }
     else{
      const Favorite = {_id_post:_id,_id_user:user._id}
       dispatch((AddFavoriteAction(Favorite)))
     }
     return () =>  dispatch((GetAllFavoritesAction()))
  }

// ===========dark mode ========//

const [darkThem,setDarkThem] = useState('light')


useEffect(()=>{
if(darkThem == 'dark'){
  document.body.classList.add('dark')
}else{
  document.body.classList.remove('dark')
  document.body.style.background = '' 
}

},[darkThem])

useEffect(()=>{
  if(backgroundColor !== '#F0F0F0'){
   document.body.style.background = backgroundColor 
   setDarkThem('dark')
   return
  }
  return setDarkThem('light')
},[backgroundColor])

useEffect(()=>{
  document.documentElement.style.fontSize = SizeScreen
},[SizeScreen,colorButtons])


  return (

    <div  className='App dark:text-white h-fit'>
      <BrowserRouter>
      <Navbar darkThem={darkThem} setDarkThem={setDarkThem} colorButtons={colorButtons}/>
       <div className='Pages h-[100vh]'>
        <Routes>
          
          <Route path='/'
          element={!user ? <Register/> : <Navigate to='/Social'/>}
          />
          <Route path='/Login'
          element={!user ? <Login/> : <Navigate to='/Social'/>}
          />
         <Route path='/Social'
         element={user ? <Social setDarkThem ={setDarkThem} setbackgroundColor={setbackgroundColor} colorButtons={colorButtons} IdClick={IdClick} handleShowCommnet={handleShowCommnet} settitle ={settitle} HandleFavorite={HandleFavorite} IsclickCreateComment={IsclickCreateComment} setIsclickCreateComment={setIsclickCreateComment} comment={comment} setcomment={setcomment}  handleComment={handleComment} handleAddFriend={handleAddFriend} title={title} image={image} setimage={setimage} handlePost={handlePost} IsClickImage={IsClickImage} setIsClickImage={setIsClickImage} SizeScreen={SizeScreen} setSizeScreen={setSizeScreen} setcolorButtons={setcolorButtons}/> : <Navigate to='/Login'/>}
         />
          <Route path="/ProfileUser/:id"
            element={user ? <ProfileUser colorButtons={colorButtons} IdClick={IdClick} handleShowCommnet={handleShowCommnet} HandleFavorite={HandleFavorite} settitle ={settitle}  IsclickCreateComment={IsclickCreateComment} setIsclickCreateComment={setIsclickCreateComment} comment={comment} setcomment={setcomment} New_Comment={New_Comment}  handleComment={handleComment} handleAddFriend={handleAddFriend} title={title} image={image} setimage={setimage} handlePost={handlePost} IsClickImage={IsClickImage} setIsClickImage={setIsClickImage} />:<Navigate to={'/Login'}/>}
            />
            
             <Route
             path='/Chat'
             element={user ? <Chat colorButtons={colorButtons} />:<Navigate to='/Login' />}
             ></Route>
            

        </Routes>
      </div>
      </BrowserRouter>
     
    </div>
  )
}
