import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { SendMessageAction } from '../../../redux/Actions/ChatActions'
import { FlexItems } from '../../../useStyle/useStyle'
export const Messages = ({own,colorButtons}) => {
  const [text,setText] = useState('')

  const {messages,conversation} = useSelector((state) => state.ChatMessages)
  const {user}  = useSelector((state) => state.userRegister)
  const dispatch   = useDispatch()

  const handleSent =(e) =>{
    e.preventDefault()
    const sender = conversation.binary[0]
    const receiver= conversation.binary[1]
    const {imageSender,IsFileSender,IsFileReceiver,imageReceiver} = conversation
    const {_id:conversationId} = conversation
    const data = {conversationId,text,senderId:user._id,receiverId:receiver,imageSender:user.image,IsFileSender,IsFileReceiver,imageReceiver}
    dispatch((SendMessageAction(data,setText)))
  }
  return (
    <div className='bg-gray-0 rounded-md shadow-My-box py-3 px-5 h-fit lg:col-start-2 lg:col-end-4 dark:bg-slate-800 dark:border dark:border-black'>

      <article className='min-h-[60vh] h-[70vh] overflow-auto space-y-4'>
        {messages.length == 0?(
          <div className='max-w-[800px] mx-auto text-center space-y-3 my-32'>
            <h2 className='text-xl font-[500]'>
             No message was in this conversation... 
            </h2>
           <p className='opacity-30 text-md'>try to make a new conversation with him</p>
          </div>
        ):(
          <>
         

        <div>
          {messages.map((message,key) =>{
            const {conversationId,text, senderId, receiverId,imageSender,IsFileSender,IsFileReceiver,imageReceiver} = message;
            return(
              <section key={key}>
               {user._id == senderId ? (
                <div style={FlexItems} className={'space-x-2'}>
                <img className='w-[50px] h-[50px] rounded-[50%] object-cover' src={IsFileSender ?`http://localhost:7070/${imageSender}`:imageSender} alt="img" />
                <p style={{background:own ? `${colorButtons}`:null}} className={'bg-primary-500 w-fit p-2 px-4 rounded-[30px]'}>{text}</p>
              </div>
               ):(
                <div style={FlexItems} className='space-x-2 justify-end'>
                <img className='w-[50px] h-[50px] rounded-[50%] object-cover' src={IsFileReceiver ?`http://localhost:7070/${imageSender}`:imageSender} alt="img" />
                <p className='bg-gray-300 w-fit p-2 px-4 rounded-[30px] dark:bg-gray-500'>{text}</p>
              </div>
               )}
              </section>
            )
          })}
        </div>
          </>
         
        )}
       

      </article>


      <article className='mt-6'>
      
        <form onSubmit={handleSent} className='grid grid-cols-10 gap-2 w-full items-center'>
        <img className='col-start-1 col-end-2 w-[40px] h-[40px] rounded-[50%] object-cover' src="https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg" alt="img" />
        <textarea onChange={(e) => setText(e.target.value)} value={text} className='col-start-2 col-end-10 resize-auto rounded-[30px] h-[50px] dark:text-black' placeholder='send message...' name='text'></textarea>
        <button style={{background:`${colorButtons}`}} className='col-start-10 col-end-11 rounded-lg py-2 px-3 '>send</button>
        </form>
      
      </article>

    </div>
  )
}
