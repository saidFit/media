import React from 'react'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import { useDispatch, useSelector } from 'react-redux'
import { MakeConversationAction } from '../../../redux/Actions/ChatActions'
import { FlexBetweenItems, FlexItems } from '../../../useStyle/useStyle'
export const Friends = () => {
   const dispatch = useDispatch()
    const {Friends} = useSelector((state => state.AddFriend))
    const {user} = useSelector((state) => state.userRegister)
    const scrollLeft = () => {
        document.getElementById("content").scrollLeft -= 200;
    }
    const scrollRight = () => {
        document.getElementById("content").scrollLeft += 200;
    }
    

    const handleMakeConversation = (sender,receiver,IsFileSender,imageSender,imageReceiver,IsFileReceiver) =>{
      const data = {imageSender,IsFileSender,IsFileReceiver,imageReceiver}
      dispatch((MakeConversationAction(user,sender,receiver,data)))
    }
  return (
    <div className='relative p-4 space-y-3'>
        <p className='text-lg font-[500] border-b border-[#000] w-fit'>List Friends</p>
         <div className="absolute right-3 z-50 top-[-12px]">
        <button onClick={scrollLeft} className="p-2 m-2 rounded-full bg-gray-200">
          <FiChevronLeft />
        </button>
        <button onClick={scrollRight} className="p-2 m-2 rounded-full bg-gray-200">
          <FiChevronRight />
        </button>
      </div>
      <div id='content' style={FlexItems} className='Friends carousel relative bg-gray-0 space-x-3 overflow-x-auto scroll-smooth scrollbar-hide rounded-md shadow-My-box py-3 px-5 h-fit lg:col-start-1 lg:col-end-2 dark:bg-slate-800 dark:border dark:border-black'>
        {Friends.map(friend =>{
            const {_id,image_user,name_user,IsFile,_id_friend} = friend
            return (
                <div key={_id} className='cursor-pointer' onClick={()=>handleMakeConversation(user._id,_id_friend,user.IsFile,user.image,image_user,IsFile)}>
               <img className='w-[50px] h-[50px] object-cover rounded-[50%]' src={IsFile ?`http://localhost:7070/${image_user}`:image_user} alt="img" />
                <p className='text-lg font-[500] text-center'>{name_user.substring(0,4)}...</p>
               </div>
            )
        })}
      </div>  
    </div>
  )
}
