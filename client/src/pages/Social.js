import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {RiUserSettingsLine} from 'react-icons/ri'
import {BiImage,BiCommentDetail} from 'react-icons/bi'
import {BsClipboardData,BsShare} from 'react-icons/bs'
import {IoMdAttach} from 'react-icons/io'
import {AiOutlineAudio,AiFillLinkedin,AiOutlineHeart} from 'react-icons/ai'
import {SiTwitter} from 'react-icons/si'
import {GoLocation} from 'react-icons/go'
import {CgWorkAlt} from 'react-icons/cg'
import {FiEdit2,FiUserCheck} from 'react-icons/fi'
import {RiUserAddFill} from 'react-icons/ri'
import { CiCamera } from 'react-icons/ci'
import {HiUserRemove} from 'react-icons/hi'
import { useDispatch, useSelector } from 'react-redux'
import { ImSpinner8 } from 'react-icons/im'
import { AddNewPostAction, getAllPostsAction } from '../redux/Actions/PostAction'
import { AddNewCommentAction, GetAllComment } from '../redux/Actions/CommentActions'
import { PostsComponent } from '../components/PostsComponent'
import { AddFriendAction, DeleteFriendAction, GetAllFriendAction } from '../redux/Actions/AddFriendActions'
import { handleRandomImageAction } from '../redux/Actions/Actions'
import { Theme } from '../components/Theme'



export const Social = (
    {

title,
settitle,
image,
setimage,
handlePost,
IsClickImage,
setIsClickImage,
handleComment,
handleAddFriend,
comment,
setcomment,
HandleFavorite,
IsclickCreateComment,
setIsclickCreateComment,
 IdClick,
handleShowCommnet,
setSizeScreen,
setcolorButtons,
colorButtons,
setbackgroundColor,
setDarkThem

}) => {
    const dispatch = useDispatch()
    const Navigate = useNavigate()
    const {user,image_random,loading} = useSelector((state) => state.userRegister)
    const {New_Comment}      = useSelector((state)=> state.AddNewComment)
    const {Posts,error_post} = useSelector((state) => state.addPost)
    const {Friends} = useSelector((state) => state.AddFriend)

    
useEffect(()=>{
    dispatch((GetAllFriendAction()))
},[Friends])


    return (
        <>
        {loading ? (<div className='containe mx-auto text-5xl text-[#000000ca] h-[80vh] py-20 w-fit'>{<ImSpinner8 className='Spinner dark:text-white'/>}</div>):(

           <section className='relative mx-auto px-5 grid grid-cols-1  gap-10 my-8 lg:grid-cols-4'>
            <article className=' bg-gray-0 rounded-md shadow-My-box py-3 px-5 h-fit lg:col-start-1 lg:col-end-2 dark:bg-slate-800 dark:border border-black'>
                <div className='flex justify-between items-center w-full py-3 border-b border-gray-100'>
                    <div className='flex items-center space-x-4'>
                        <img onClick={()=> Navigate(`ProfileUser/${user._id}`)} className='w-[55px] h-[55px] object-cover rounded-[50%]' src={!user.IsFile ? user.image :`http://localhost:7070/${user.image}`} alt="img" />
                        <div>
                          <p className='text-lg font-bold'>{user.firstName}-{user.lastName}</p>
                        <p className=' opacity-50'>0 fiends</p>  
                        </div>
                        
                    </div>
                    <button><RiUserSettingsLine/></button>
                </div>

                <div className=' border-b border-gray-100'>
                    <div className='flex space-x-3 items-center'>
                        <span><GoLocation/></span>
                      <p className='py-2 opacity-50'>{user.location}</p>   
                    </div>
                    <div className='flex space-x-3 items-center'>
                        <span><CgWorkAlt/></span>
                      <p className='py-2 opacity-50'>{user.occupation}</p>   
                    </div>
                </div>

                <div className='flex items-center justify-between w-full border-b border-gray-100'>
                    <div>
                        <p className='py-2 opacity-50'>what's viewed your profile</p>
                        <p className='py-2 opacity-50'>Impression of your posts</p>
                    </div>
                    <div>
                        <p className='py-2'>230</p>
                        <p className='py-2'>120</p>
                    </div>
                </div>


                <div className='py-2 space-y-3'>
                    <h1 className='text-md font-bold'>Social Profile</h1>
                    <div>

                        <div className='flex items-center justify-between py-1'>
                          <div className='flex items-center space-x-3'>
                            <span><SiTwitter className='opacity-60'/></span>
                            <div>
                                <p className='text-md font-bold opacity-80'>Twitter</p>
                                <p className=' opacity-50'>Social Network</p>
                            </div>
                        </div>
                        <span><FiEdit2/></span>  
                        </div>

                        <div className='flex items-center justify-between py-1'>
                          <div className='flex items-center space-x-3'>
                            <span><AiFillLinkedin className='opacity-60'/></span>
                            <div>
                                <p className='text-md font-bold opacity-80'>Linkedin</p>
                                <p className=' opacity-50'>Network platform</p>
                            </div>
                        </div>
                        <span><FiEdit2/></span>  
                        </div>
                       

                      

                    </div>
                </div>
            </article>


            <article className='lg:col-start-2 lg:col-end-4'>
                <section className='bg-gray-0 rounded-md shadow-My-box py-2 px-4 dark:bg-slate-800 dark:border border-black'>
                    <div className='flex items-center space-x-3 py-4 border-b border-gray-100'>
                    <img className='w-[55px] h-[55px] object-cover rounded-[50%]' src={!user.IsFile ? user.image :`http://localhost:7070/${user.image}`} alt="img" />
                        <input onChange={(e)=>settitle(e.target.value)} value={title} className='bg-gray-10 rounded-[30px] shadow-My-box border border-gray-200 outline-none py-3 px-4 w-[85%] dark:bg-slate-800 dark:border' type="text" placeholder="what's on your mind..." />
                       
                    </div>
                  {IsClickImage &&(
                     <div className='py-4 border-b border-gray-200'>
                          <label className='border border-gray-300 rounded-md py-3 px-4 shadow-My-box w-full ml-auto block'>
                            <span className='cursor-pointer'><CiCamera className='mx-auto text-5xl mt-1'/></span>
                            <input onChange={(e) =>setimage(e.target.files[0])} className='border w-[80%] py-3 px-4 outline-none border-gray-300 rounded-md shadow-My-box hidden' id="inputTag" type="file"/>
                            {image && <p className='border border-gray-300 text-center rounded-md py-2 px-4'>{image.name}</p>}
                        </label>   
                    </div>
                  )} 

                    <div className='flex text-sm w-full justify-around md:justify-between py-3 items-center'>
                        <div className='flex space-x-1 md:space-x-3 items-center'>
                            <span><BiImage className='text-blue-600' size={20}/></span>
                            <button onClick={() => setIsClickImage(!IsClickImage)}>image</button>
                        </div>

                        <div className='flex space-x-1 md:space-x-3 items-center'>
                            <span style={{color:`${colorButtons}`}}><BsClipboardData size={20}/></span>
                            <button>Clip</button>
                        </div>

                        <div className='flex space-x-1 md:space-x-3 items-center'>
                            <span><IoMdAttach className='text-orange-600' size={20}/></span>
                            <button>Attachment</button>
                        </div>

                        <div className='flex space-x-1 md:space-x-3 items-center'>
                            <span><AiOutlineAudio className='text-blue-600' size={20}/></span>
                            <button>Audio</button>
                        </div>
                        <button style={{background:`${colorButtons}`}} className='bg-primary-500 rounded-[30px] py-1.5 px-4 shadow-My-box dark:bg-primary-500' onClick={handlePost}>POST</button>
                    </div> 
                </section>
                
                {/* =============NEW POSTS======================= */}
                 
                 <div>
                    {Posts.length !=0 &&(
                        Posts.map((post,key) =>(
                        <PostsComponent
                         key={key}
                          {...post}
                           handleComment={handleComment}
                           setcomment={setcomment}
                           comment={comment}
                           user={user}
                           New_Comment={New_Comment}
                           handleAddFriend={handleAddFriend}
                           Friends={Friends}
                           HandleFavorite={HandleFavorite}
                           setIsclickCreateComment={setIsclickCreateComment }
                           IsclickCreateComment={IsclickCreateComment}
                           IdClick={IdClick}
                           handleShowCommnet={handleShowCommnet}
                           colorButtons={colorButtons}
                           />  
                          
                            )
                        )
                    )}
                   
                 </div>
                

            </article>


            <article className='lg:col-start-4 lg:col-end-5'>

              {image_random &&(
                  <section className='space-y-3 bg-gray-0 rounded-md shadow-My-box py-2 px-4 dark:bg-slate-800 dark:border border-black'>
                    <div className='flex justify-between w-full py-3 items-cneter'>
                        <p className='text-lg'>Sponsored</p>
                        <p className=' opacity-50'>Create Ad</p>
                    </div>
                    <img className='w-full h-[250px] object-cover rounded-md' src={`.${image_random.image}`} alt="img" />
                     <div className='flex justify-between items-center w-full flex-row lg:flex-col xl:flex-row'>
                        <p className='text-lg'>{image_random.title}</p>
                        <p className='opacity-50 text-sm'>{image_random.site}</p>
                     </div>
                     <p className='opacity-50 text-md'>{image_random.desc}</p>
                </section>
              )}
                <section className=' bg-gray-0 space-y-5 rounded-md shadow-My-box py-4 px-4 mt-5 dark:bg-slate-800 dark:border border-black'>
                    <h1 className='font-bold '>Fiend List</h1>


                    <section className='space-y-5'>
                        {Friends.map((Friend,key) =>{
                            return(
                                <div key={key} className='flex w-full justify-between items-center'>
                                <div className='flex w-[50%] space-x-3 items-center lg:flex-col xl:flex-row'>
                                <img className='w-[55px] h-[55px] text-start block object-cover rounded-[50%]' src={!Friend.IsFile ? Friend.image_user :`http://localhost:7070/${Friend.image_user}`} alt="img" />
                                    <div>
                                      
                                      <p className='text-sm font-[500]'>{Friend.name_user}</p>
                                    
                                    </div>
                                    
                                </div>
                                <button style={{background:`${colorButtons}`}} className='p-3 rounded-[50%] shadow-md dark:bg-primary-500'><HiUserRemove className='text-xl'/></button>
                            </div>
                            )
                        })}
                    
                   
                    </section>



                </section>
            </article>

         <Theme
          setbackgroundColor={setbackgroundColor}
          setSizeScreen={setSizeScreen}
          colorButtons={colorButtons}
          setcolorButtons={setcolorButtons}
          setDarkThem={setDarkThem}
             />
        </section> 
        )}
        
       
        </>
        
    )
}
