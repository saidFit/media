import React from 'react'
import { FlexItems } from '../../../useStyle/useStyle'
export const Messages = ({own,colorButtons}) => {
  return (
    <div className='bg-gray-0 rounded-md shadow-My-box py-3 px-5 h-fit lg:col-start-2 lg:col-end-4 dark:bg-slate-800 dark:border dark:border-black'>

      <article className='min-h-[60vh] h-[70vh] overflow-auto space-y-4'>
        <div style={FlexItems} className='space-x-2'>
          <img className='w-[50px] h-[50px] rounded-[50%] object-cover' src="https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg" alt="img" />
          <p className='bg-gray-300 w-fit p-2 px-4 rounded-[30px] dark:bg-gray-500'>hello said</p>
        </div>
        <div style={FlexItems} className={own ? 'space-x-2 justify-end':'space-2'}>
          <img className='w-[50px] h-[50px] rounded-[50%] object-cover' src="https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg" alt="img" />
          <p style={{background:own ? `${colorButtons}`:null}} className={own ? 'bg-primary-500 w-fit p-2 px-4 rounded-[30px]':'bg-gray-300 w-fit p-2 px-4 rounded-[30px]'}>hello mohammed</p>
        </div>
        <div style={FlexItems} className='space-x-2'>
          <img className='w-[50px] h-[50px] rounded-[50%] object-cover' src="https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg" alt="img" />
          <p className='bg-gray-300 w-fit p-2 px-4 rounded-[30px]'>how are you said ?</p>
        </div>
        <div style={FlexItems} className={own ? 'space-x-2 justify-end':'space-2'}>
          <img className='w-[50px] h-[50px] rounded-[50%] object-cover' src="https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg" alt="img" />
          <p style={{background:own ? `${colorButtons}`:null}} className={own ? 'bg-primary-500 w-fit p-2 px-4 rounded-[30px]':'bg-gray-300 w-fit p-2 px-4 rounded-[30px]'}>i m good what about you?</p>
        </div>
        <div style={FlexItems} className='space-x-2'>
          <img className='w-[50px] h-[50px] rounded-[50%] object-cover' src="https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg" alt="img" />
          <p className='bg-gray-300 w-fit p-2 px-4 rounded-[30px]'>i'm find thank you so much,what do you do now ?</p>
        </div>
        <div style={FlexItems} className='space-x-2'>
          <img className='w-[50px] h-[50px] rounded-[50%] object-cover' src="https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg" alt="img" />
          <p className='bg-gray-300 w-fit p-2 px-4 rounded-[30px]'>i'm find thank you so much,what do you do now ?</p>
        </div>
        <div style={FlexItems} className={own ? 'space-x-2 justify-end':'space-2'}>
          <img className='w-[50px] h-[50px] rounded-[50%] object-cover' src="https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg" alt="img" />
          <p style={{background:own ? `${colorButtons}`:null}} className={own ? 'bg-primary-500 w-fit p-2 px-4 rounded-[30px]':'bg-gray-300 w-fit p-2 px-4 rounded-[30px]'}>i m good what about you?</p>
        </div>
        <div style={FlexItems} className={own ? 'space-x-2 justify-end':'space-2'}>
          <img className='w-[50px] h-[50px] rounded-[50%] object-cover' src="https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg" alt="img" />
          <p style={{background:own ? `${colorButtons}`:null}} className={own ? 'bg-primary-500 w-fit p-2 px-4 rounded-[30px]':'bg-gray-300 w-fit p-2 px-4 rounded-[30px]'}>i m good what about you?</p>
        </div>
      </article>


      <article className='mt-6'>
       <div className='grid grid-cols-10 gap-2 w-full items-center'>
        <img className='col-start-1 col-end-2 w-[40px] h-[40px] rounded-[50%] object-cover' src="https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg" alt="img" />
        <textarea className='col-start-2 col-end-10 resize-none rounded-[30px] h-[50px] dark:text-black' placeholder='send message...' name='text'></textarea>
        <button  style={{background:`${colorButtons}`}} className='col-start-10 col-end-11 rounded-lg py-2 px-3 '>send</button>
       </div>
      </article>

    </div>
  )
}
