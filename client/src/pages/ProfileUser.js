
import React, { useEffect, useRef, useState } from 'react'
import { AiFillHeart, AiOutlineAudio, AiOutlineHeart } from 'react-icons/ai'
import { BiCommentDetail, BiImage } from 'react-icons/bi'
import { BsChevronDoubleDown, BsClipboardData, BsShare, BsThreeDotsVertical } from 'react-icons/bs'
import { CiCamera } from 'react-icons/ci'
import { FiUserCheck } from 'react-icons/fi'
import { GoLocation } from 'react-icons/go'
import { HiUserRemove } from 'react-icons/hi'
import { IoMdAttach } from 'react-icons/io'
import { RiUserAddFill } from 'react-icons/ri'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { getSingleUserAction, updateImageCovertureAction, updateImageProfileAction } from '../redux/Actions/Actions'
import { absoluteCenter, FlexBetweenItems } from '../useStyle/useStyle'
export const ProfileUser = (
  {IsclickCreateComment
   ,setIsclickCreateComment
   ,comment
   ,setcomment
   ,New_Comment
   ,handleComment
   ,handleAddFriend
   ,title
   ,settitle
   ,image
   ,setimage
   ,handlePost
   ,IsClickImage
   ,setIsClickImage
  ,HandleFavorite
  ,IdClick
  ,handleShowCommnet,
  colorButtons
  }) => {
    
    const {id} = useParams()
    const dispatch = useDispatch()
    const [IsMouseEnter,setIsMouseEnter] = useState(false)

    const {Single_user} = useSelector((state) => state.GetSingleUser)

    const {user,image_random,loading}= useSelector((state) => state.userRegister)
    const {Friends} = useSelector((state) => state.AddFriend)
    const {Posts} = useSelector((state) => state.addPost)
    const {Favorites} = useSelector((state) => state.AddFavorite)
    const input = useRef(null)
    const [file,setFile] = useState('')
    

    useEffect(()=>{
     dispatch((getSingleUserAction(id)))
    },[])

    useEffect(()=>{
      console.log(file)
    },[file])

    const handleChangeProfile =(image) =>{
      const formData = new FormData()
            formData.append('image',image)
       dispatch((updateImageProfileAction(user._id,formData)))
    }

    const handleChangeCoverture =(image) =>{
      const formData = new FormData()
            formData.append('image',image)
          dispatch((updateImageCovertureAction(user._id,formData)))    

    }

  return (
    <section className='mx-auto px-4 md:px-20  grid grid-cols-6 h-[100vh] gap-7 mt-6'>
      <div className=' col-start-1 col-end-7  md:col-start-1 md:col-end-5 max-w-[990px] w-full'>
        {loading ? (
         
<div role="status" className="animate-pulse space-y-8 bg-gray-0 pb-8 shadow-md rounded-md dark:bg-slate-800 dark:border">
    <div className="flex w-full relative h-[43vh] items-center justify-center mb-4 bg-gray-300 rounded dark:bg-gray-700">
        <svg className="w-12 h-full text-gray-200 dark:text-gray-600" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" fill="currentColor" viewBox="0 0 640 512"><path d="M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z"/></svg>
        <svg className="text-gray-200 absolute z-90 bottom-[-50px] left-0 w-[130px] h-[130px] object-cover dark:text-[#374151]" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clipRule="evenodd"></path></svg>
    </div>
    <div className='pt-[50px] space-y-3'>
    <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-32 mb-2"></div>
    <div className="w-48 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
    <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-32 mb-2"></div>
    <div className='mt-8 space-y-4'>
     <div className="w-48 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
    <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-32 mb-2"></div> 
    </div>
    <div className='mt-8'>
    <button className=' bg-gray-200 rounded-[30px] w-32 py-1 px-4 shadow-md h-4 mr-2 dark:bg-gray-700' ></button>
    <button className=' bg-gray-200 rounded-[30px] w-32 py-1 px-4 shadow-md h-4 dark:bg-gray-700'></button>
    </div>

    </div>
    <span className="sr-only">Loading...</span>
</div>

        ):(
          
        <article className='bg-gray-0 pb-8 shadow-md rounded-md dark:bg-slate-800 dark:border'>

           <div className='relative w-full min-h-[20vh]'>
           <label className='relative w-full'>
            {Single_user.Image_Coverture ? (
              <img className='w-[990px] h-[250px] object-cover' src={`http://localhost:7070/${Single_user.Image_Coverture}`} alt="img" />
            ):(
              <img className='w-[990px] h-[250px] object-cover' src="https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg" alt="img" />
            )}
            {Single_user._id == user._id &&(
              <>
             <input id="inputTag" type="file" className='hidden' onChange={(e) => handleChangeCoverture(e.target.files[0])} />
             <span style={{...absoluteCenter,width:'fit-content'}} className='cursor-pointer h-fit border-2 border-dotted border-black rounded-md p-2'><CiCamera size={50} className='mx-auto block text-center text-xl mt-1 text-black' /></span>
              </>
            
            )}
            
           </label>
          
          <div className='absolute bottom-[-50px] left-[-2px] block overflow-hidden border-2 border-white p-[1px] rounded-[50%] parent-img-profile w-[130px] h-[130px]'>
            {Single_user._id == user._id ? (
               <label>
              {Single_user.IsFile ? (
                <img className='cursor-pointer w-[130px] h-[130px] object-cover rounded-[50%]' src={`http://localhost:7070/${Single_user.image}`} alt="" />
              ):(
                <img className='cursor-pointer w-[130px] h-[130px] object-cover rounded-[50%]' src={Single_user.image} alt="" />
              )}
              
              <input id="inputTag" type="file" className='hidden' onChange={(e) => handleChangeProfile(e.target.files[0])} />
              <span className='absolute bottom-0 left-0 right-0 cursor-pointer h-[50px] object-cover'><CiCamera className='mx-auto block text-4xl mt-1 text-white' /></span>
          </label>
            ):(
              <label>
              {Single_user.IsFile ? (
                <img className='cursor-pointer w-[130px] h-[130px] object-cover rounded-[50%]' src={`http://localhost:7070/${Single_user.image}`} alt="" />
              ):(
                <img className='cursor-pointer w-[130px] h-[130px] object-cover rounded-[50%]' src={Single_user.image} alt="" />
              )}
          </label>
            )}
          </div>
        </div>

         <div className='mt-24 mx-3'>
          <div>
           <h1 className='text-2xl font-[500] mb-3'>{`${Single_user.firstName} ${Single_user.lastName}`}</h1> 
           <p>{` occupation : / ${Single_user.occupation}...`}</p>
           <div className='flex space-x-1 items-center'>
                  <span><GoLocation /></span>
                  <p className=' opacity-50 text-sm'>{Single_user.location}</p>
                </div>
          </div>
         <div className='space-x-4 mt-3'>
          <button style={{border:`1px solid ${colorButtons}`,background:`${IsMouseEnter ? colorButtons:''}`}} className='border border-primary-500 rounded-[30px] py-1 px-4 shadow-md hover:bg-primary-200' onMouseEnter={()=> setIsMouseEnter(!IsMouseEnter)}>open info</button>
          <button style={{border:`1px solid ${colorButtons}`}} className='border border-primary-500 rounded-[30px] py-1 px-4 shadow-md hover:bg-primary-200' onMouseLeave={()=> setIsMouseEnter(!IsMouseEnter)}>update them</button>
        </div> 
        </div>

        

        </article>
        )}
       
       
    {/* //*========Add-Post======== // */}
    
    {Single_user._id == user._id &&(
       loading ? (
        <div role="status" className="animate-pulse  mt-4 bg-gray-0 shadow-md rounded-md dark:bg-slate-800 dark:border">
    <div style={FlexBetweenItems} className="flex w-full items-center justify-center bg-gray-0 rounded dark:bg-slate-800">
        <svg className="text-gray-200 h-[100px] w-[100px] object-cover dark:text-gray-700" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clipRule="evenodd"></path></svg>
        <div className="w-full h-6 bg-gray-200 rounded-full dark:bg-gray-700"></div>
        </div>
        <div style={FlexBetweenItems} className='pb-8'>
        <div className="w-[24%] h-6 bg-gray-200 rounded-full dark:bg-gray-700"></div>
        <div className="w-[24%] h-6 bg-gray-200 rounded-full dark:bg-gray-700"></div>
        <div className="w-[24%] h-6 bg-gray-200 rounded-full dark:bg-gray-700"></div>
        <div className="w-[24%] h-6 bg-gray-200 rounded-full dark:bg-gray-700"></div>
        </div>
  
    
    <span className="sr-only">Loading...</span>
</div>
       ):(
        <section className='bg-gray-0 mt-4 rounded-md shadow-My-box py-2 px-4 dark:bg-slate-800 dark:border border-black'>
          
        <div className='flex items-center space-x-3 py-4 border-b border-gray-100'>
        <img className='w-[55px] h-[55px] object-cover rounded-[50%]' src={!Single_user.IsFile ? Single_user.image :`http://localhost:7070/${Single_user.image}`} alt="img" />
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
        <div className='flex text-sm w-full justify-around md:justify-between py-3 items-center md:text-md'>
            <div className='flex space-x-1 md:space-x-3 items-center'>
                <span><BiImage className='text-blue-600' size={20}/></span>
                <button onClick={() => setIsClickImage(!IsClickImage)}>image</button>
            </div>

            <div className='flex space-x-1 md:space-x-3 items-center'>
                <span style={{color:`${colorButtons}`}}><BsClipboardData className='text-primary-700' size={20}/></span>
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
            <button style={{background:`${colorButtons}`}} className='bg-primary-400 rounded-[30px] py-1.5 px-4 shadow-My-box dark:bg-primary-600' onClick={handlePost}>POST</button>
        </div>
</section>
       )
     
    )}
        

    
    {Posts.length !=0 && Posts.filter(post => post.req_id_user == Single_user._id)
    .map((Post,key) =>{
      return(
    <section key={key}>
      <div className='bg-gray-0 rounded-md shadow-My-box py-4 px-4 mt-8 dark:bg-slate-800 dark:border border-black'>
        <div className='space-y-5'>
          <div className='flex w-full justify-between items-center'>
            <div className='flex space-x-3 items-center'>
              {Post.IsFile ? (
                <img className='w-[55px] h-[55px] object-cover rounded-[50%]' src={`http://localhost:7070/${Post.image_user}`} alt="img" />
              ) : (
                <img className='w-[55px] h-[55px] object-cover rounded-[50%]' src={Post.image_user} alt="img" />
              )}
              <div>
                <h1 className='text-xl font-[500]'>{Post.name_user}</h1>
                <div className='flex space-x-1 items-center'>
                  <span><GoLocation /></span>
                  <p className=' opacity-50 text-sm'>{Post.location_user}</p>
                </div>

              </div>

            </div>
            {Friends.find(Friend => Friend._id_friend == Post.req_id_user) ?  <button style={{background:`${colorButtons}`}} onClick={() => handleAddFriend(Post.req_id_user,Post.image_user,Post.name_user,Post.IsFile,'DeleteFriend')}  className='bg-primary-200 p-3 rounded-[50%] shadow-md'><HiUserRemove className='text-xl'/></button>:(
             Post.req_id_user === user._id ?
            <button style={{background:`${colorButtons}`}} className='bg-primary-200 p-3 rounded-[50%] shadow-md dark:bg-primary-600'> < FiUserCheck className='text-xl' /></button>
            :<button style={{background:`${colorButtons}`}} onClick={() => handleAddFriend(Post.req_id_user,Post.image_user,Post.name_user,Post.IsFile,'AddFriend')} className='bg-primary-200 p-3 rounded-[50%] shadow-md dark:bg-primary-600'><RiUserAddFill className='text-xl' /></button>
            )}
            
          </div>
          <div>
            <h1 className='mb-4'>{Post.title}</h1>
            {Post.IsImagePath && (
              <img className='w-full rounded-md' src={`http://localhost:7070/${Post.image}`} alt="img" />
            )}
          </div>

          <div className='flex px-5 justify-between text-xl items-center w-full'>

            <div className='flex items-center space-x-3'>

              <div className='flex items-center space-x-3'>
                <button onClick={()=>HandleFavorite(Post._id,Post.req_id_user)}>{Favorites.find(favorite => favorite._id_user == user._id && favorite._id_post == Post._id)? <AiFillHeart className=' text-red-400'/>:<AiOutlineHeart/>}</button>
                <p className='text-lg'>{Favorites.filter(Favorite => Favorite._id_post == Post._id).length}</p>
              </div>
              <div className='flex items-center space-x-3'>
                <button onClick={() => handleShowCommnet(Post._id)}><BiCommentDetail /></button>

                <p className='text-lg'>{New_Comment.filter(comment => comment._id_post == Post._id).length}</p>
              </div>
            </div>
            <button><BsShare /></button>
          </div>

          <section className='space-y-4'>
            <div className='flex w-full items-center justify-between px-2'>
              <h1 className='text-xl font-[500] '>Create a comment:</h1>
              <button onClick={() => handleShowCommnet(Post._id)}><BsChevronDoubleDown style={{background:`${colorButtons}`}} className='text-4xl bg-primary-400 rounded-[50%] p-2 shadow-lg' /></button>
            </div>

            {IsclickCreateComment && IdClick == Post._id && (
              <section>
                <div className='space-x-3'>
                  <input ref={input} onChange={((e) => setcomment(e.target.value))} value={comment} className='bg-gray-10 rounded-[30px] shadow-My-box border border-gray-200 outline-none py-3 px-4 w-[80%] dark:bg-slate-800' type="text" placeholder="Add a comment..." />
                  <button style={{background:`${colorButtons}`}} onClick={() => handleComment(Post._id)} className='bg-primary-400 rounded-[30px] py-1.5 px-4 shadow-My-box'>POST</button>
                </div>
                <div className={New_Comment.filter(comment => comment._id_post == Post._id).length > 2 ? 'space-y-3  h-[300px] overflow-auto mt-3' : 'space-y-3 mt-3 h-fit overflow-auto'}>
                  {New_Comment.length != 0 && (
                    New_Comment.map((comment, key) => {
                      if (comment._id_post == Post._id) {

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
      )
    })
    }
     </div>

     {/* //TODO:Random image */}
      {loading ? (
        <div role="status" className="animate-pulse space-y-3 bg-gray-0 col-start-1 col-end-7 md:col-start-5 md:col-end-7 max-w-[990px] w-full h-fit p-3 dark:bg-slate-800 dark:border">
          <div style={FlexBetweenItems}>
          <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-32"></div>
          <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-32"></div>
          </div>
        <div className="flex w-full relative h-[43vh] items-center justify-center mb-4 bg-gray-300 rounded dark:bg-gray-700">
            <svg className="w-12 h-full text-gray-200 dark:text-gray-600" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" fill="currentColor" viewBox="0 0 640 512"><path d="M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z"/></svg>
        </div>
        <div className='pt-[50px] space-y-3'>
        <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-32 mb-2"></div>
        <div className="w-48 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
        <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-32 mb-2"></div>
        <div className='mt-8 space-y-4'>
         <div className="w-48 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
        <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-32 mb-2"></div> 
        </div>
       
    
        </div>
        <span className="sr-only">Loading...</span>
    </div>
      ):(
        <div className=' col-start-1 col-end-7  md:col-start-5 md:col-end-7 max-w-[990px] w-full h-[100%]'>
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
               {Single_user._id == user._id &&(
                <section className=' bg-gray-0 space-y-5 rounded-md shadow-My-box py-4 px-4 mt-5 dark:bg-slate-800 dark:border border-black'>
                    <h1 className='font-bold '>Fiend List</h1>
                    <section className='space-y-2'>
                        {Friends.map((Friend,key) =>{
                            return(
                                <div key={key} className='flex w-full justify-between items-center'>
                                <div className='flex w-[50%]  space-x-3 items-center lg:flex-col xl:flex-row'>
                                <img className='w-[55px] h-[55px] text-start block object-cover rounded-[50%]' src={!Friend.IsFile ? Friend.image_user :`http://localhost:7070/${Friend.image_user}`} alt="img" />
                                    <div>
                                      
                                      <p className='text-sm font-[500]'>{Friend.name_user}</p>
                                    
                                    </div>
                                    
                                </div>
                                <button style={{background:`${colorButtons}`}} className='bg-primary-200 p-3 rounded-[50%] shadow-md dark:bg-primary-600'><HiUserRemove className='text-xl'/></button>
                            </div>
                            )
                        })}           
                   </section>
                </section>
               )}
               
              
      </div>
      )}
      

    </section>
  )
}

