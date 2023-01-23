
import React, { useEffect, useRef, useState } from 'react'
import { BiCommentDetail } from 'react-icons/bi';
import { BsShare, BsChevronDoubleDown } from 'react-icons/bs';
import { AiOutlineHeart,AiFillHeart } from 'react-icons/ai';
import { FiUserCheck } from 'react-icons/fi';
import { RiUserAddFill } from 'react-icons/ri';
import { GoLocation } from 'react-icons/go';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { FaChevronDown } from 'react-icons/fa'
import {HiUserRemove} from 'react-icons/hi'
import { useDispatch, useSelector } from 'react-redux';
import { AddFavoriteAction, DeleteFavoriteAction, GetAllFavoritesAction } from '../redux/Actions/ActionsFavorites';
import { ImSpinner8 } from 'react-icons/im';
import { Link } from 'react-router-dom';
import { getSingleUserAction } from '../redux/Actions/Actions';

export const PostsComponent = (
  { _id,
    New_Comment,
    user,
    title,
    req_id_user,
    image,
    IsImagePath,
    name_user,
    image_user,
    location_user,
    IsFile,
    handleComment,
    setcomment,
    comment,
    handleAddFriend,
    Friends,
    HandleFavorite
   ,IsclickCreateComment
   ,IdClick
   ,handleShowCommnet,
   colorButtons
  }) => {

  const dispatch = useDispatch() 

  const {Favorites} = useSelector((state) => state.AddFavorite)
  const {loading_Posts}  = useSelector((state) => state.addPost)
  const input = useRef(null)

  const handleSingleUser = (userId) =>{
    dispatch((getSingleUserAction(userId)))
    window.scrollTo({top: 0, left: 0,});
  }

  return (
    <>
    
    {loading_Posts ? (<div className='container mx-auto text-5xl text-[#000000ca] h-[80vh] py-20 w-fit'>{<ImSpinner8 className='Spinner'/>}</div>):(

    <section>
      <div className='bg-gray-0 rounded-md shadow-My-box py-4 px-4 mt-8 dark:bg-slate-800 dark:border border-black'>
        <div className='space-y-5'>
          <div className='flex w-full justify-between items-center'>
            <div className='flex space-x-3 items-center' onClick={()=>handleSingleUser(req_id_user)}>
              <Link to={`/ProfileUser/${req_id_user}`}>
            
              {IsFile ? (
                <img className='w-[55px] h-[50px] object-cover rounded-[50%]' src={`http://localhost:7070/${image_user}`} alt="img" />
              ) : (
                <img className='w-[55px] h-[55px] object-cover rounded-[50%]' src={image_user} alt="img" />
              )}

              </Link>
              <div>
                <h1 className='text-xl font-[500]'>{name_user}</h1>
                <div className='flex space-x-1 items-center'>
                  <span><GoLocation /></span>
                  <p className=' opacity-60 text-md'>{location_user}</p>
                </div>

              </div>

            </div>
            {Friends.find(Friend => Friend._id_friend == req_id_user) ?  <button style={{background:`${colorButtons}`}} onClick={() => handleAddFriend(req_id_user,image_user,name_user,IsFile,'DeleteFriend')}  className='bg-primary-500 p-3 rounded-[50%] shadow-md dark:bg-primary-500'><HiUserRemove className='text-xl'/></button>:(
             req_id_user === user._id ?
            <button style={{background:`${colorButtons}`}} className='bg-primary-500 p-3 rounded-[50%] shadow-md dark:bg-primary-500'> < FiUserCheck className='text-xl' /></button>
            :<button style={{background:`${colorButtons}`}} onClick={() => handleAddFriend(req_id_user,image_user,name_user,IsFile,'AddFriend')} className='bg-primary-500 p-3 rounded-[50%] shadow-md dark:bg-primary-500'><RiUserAddFill className='text-xl' /></button>
            )}
            
          </div>
          <div>
            <h1 className='mb-4'>{title}</h1>
            {IsImagePath && (
              <img className='w-full h-[500px] object-cover rounded-md' src={`http://localhost:7070/${image}`} alt="img" />
            )}
          </div>

          <div className='flex px-5 justify-between text-xl items-center w-full'>

            <div className='flex items-center space-x-3'>

              <div className='flex items-center space-x-3'>
                <button onClick={()=>HandleFavorite(_id,req_id_user)}>{Favorites.find(favorite => favorite._id_user == user._id && favorite._id_post == _id)? <AiFillHeart className=' text-red-400'/>:<AiOutlineHeart/>}</button>
                <p className='text-lg'>{Favorites.filter(Favorite => Favorite._id_post == _id).length}</p>
              </div>
              <div className='flex items-center space-x-3'>
                <button onClick={() => handleShowCommnet(_id)}><BiCommentDetail /></button>

                <p className='text-lg'>{New_Comment.filter(comment => comment._id_post == _id).length}</p>
              </div>
            </div>
            <button><BsShare /></button>
          </div>

          <section className='space-y-4'>
            <div className='flex w-full items-center justify-between px-2'>
              <h1 className='text-xl font-[500] '>Create a comment:</h1>
              <button  onClick={() => handleShowCommnet(_id)}><BsChevronDoubleDown style={{background:`${colorButtons}`}} className='text-4xl bg-primary-500 rounded-[50%] p-2 shadow-lg' /></button>
            </div>

            {IsclickCreateComment && _id == IdClick && (
              <section>
                <div className='space-x-3'>
                  <input ref={input} onChange={((e) => setcomment(e.target.value))} value={comment} className='bg-gray-10 rounded-[30px] shadow-My-box border border-gray-200 outline-none py-3 px-4 w-[80%] dark:bg-slate-800 dark:border' type="text" placeholder="Add a comment..." />
                  <button style={{background:`${colorButtons}`}} onClick={() => handleComment(_id)} className='bg-primary-500 rounded-[30px] py-1.5 px-4 shadow-My-box'>POST</button>
                </div>
                <div className={New_Comment.filter(comment => comment._id_post == _id).length > 2 ? 'space-y-3  h-[300px] overflow-auto mt-3' : 'space-y-3 mt-3 h-fit overflow-auto'}>
                  {New_Comment.length != 0 && (
                    New_Comment.map((comment, key) => {
                      if (comment._id_post == _id) {

                        return (

                          <div key={key} className='border-b border-gray-200 pb-1'>
                            <div className='w-full flex items-center justify-between'>
                              <div className='flex space-x-2 items-center'>

                                {comment.IsFile ?(
                                  <img className='w-[55px] h-[55px] object-cover rounded-[50%]'src={`http://localhost:7070/${comment.image_user}`} alt="img" />
                                ):(
                                  <img className='w-[55px] h-[55px] object-cover rounded-[50%]' src={comment.image_user} alt="img" />
                                )}
                                <p className='font-[500]'>{comment.name_user}</p>
                              </div>

                              {comment._id_user == user._id && <button><BsThreeDotsVertical /></button>}
                            </div>

                            <p className='text-lg ml-8 w-[90%] py-2'>{comment.comment}</p>
                          </div>

                        )
                      }
                    })
                  )}
                </div>
              </section>
            )}


          </section>
        </div>
      </div>



    </section>
     )}
    </>
  )
}
