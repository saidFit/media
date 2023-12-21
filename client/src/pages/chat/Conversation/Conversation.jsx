import React from 'react'
import { useSelector } from 'react-redux'
import { FlexBetweenItems,FlexItems } from '../../../useStyle/useStyle'
import { Friends } from './Friends'
export const Conversation = () => {
  const {conversationUsers} = useSelector((state) => state.ChatMessages)
  return (
    <div className=' rounded-md space-y-4 h-fit lg:col-start-1 lg:col-end-2'>
      <Friends />
      <section className='bg-gray-0 rounded-md shadow-My-box py-3 px-5 h-fit dark:bg-slate-800 dark:border dark:border-black'>
          <input type="search" placeholder='Search user...' className='rounded-[30px]  w-full p-2 px-4'/>
        <div>
          {conversationUsers.map((user,key) =>{
            const {firstName,lastName,image,IsFile} = user
            return(
            <div key={key} style={{...FlexItems}} className='space-x-6 mt-3 pb-2 border-b border-[#00000058] hover:bg-gray-50 p-2 cursor-pointer'>
              <img className='w-[50px] h-[50px] rounded-[50%] object-cover' src={IsFile ? `http://localhost:7070/${image}`:image} alt='img'/>
              <p>{`${firstName} ${lastName}`}</p>
           </div>
            )
          })}
        </div>
      </section>
       
        
    </div>
  )
}
