import React from 'react'
import { FlexBetweenItems,FlexItems } from '../../../useStyle/useStyle'
export const Conversation = () => {
  return (
    <div className='bg-gray-0 rounded-md shadow-My-box py-3 px-5 h-fit lg:col-start-1 lg:col-end-2 dark:bg-slate-800 dark:border dark:border-black'>
        <input type="search" placeholder='Search user...' className='rounded-[30px]  w-full p-2 px-4'/>
        <div>
         <div style={{...FlexItems}} className='space-x-6 mt-3 pb-2 border-b border-[#00000058] hover:bg-gray-50 p-2 cursor-pointer'>
            <img className='w-[50px] h-[50px] rounded-[50%] object-cover' src='https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg' alt='img'/>
            <p>said bifalan</p>
         </div>
         <div style={{...FlexItems}} className='space-x-6 mt-3 pb-2 border-b border-[#00000058] hover:bg-gray-50 p-2 cursor-pointer'>
            <img className='w-[50px] h-[50px] rounded-[50%] object-cover' src='https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg' alt='img'/>
            <p>said bifalan</p>
         </div>
         <div style={{...FlexItems}} className='space-x-6 mt-3 pb-2 border-b border-[#00000058] hover:bg-gray-50 p-2 cursor-pointer'>
            <img className='w-[50px] h-[50px] rounded-[50%] object-cover' src='https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg' alt='img'/>
            <p>said bifalan</p>
         </div>
        </div>
        
    </div>
  )
}
