import React from 'react'
import { Conversation } from './Conversation/Conversation'
import { Messages } from './Messages/Messages'
import { OnlineUsers } from './OnlineUsers/OnlineUsers'

export const Chat = ({colorButtons}) => {

  return (
    <div className='relative mx-auto px-5 grid grid-cols-1  gap-10 my-8 lg:grid-cols-4'>
        <Conversation />
        <Messages own={true} colorButtons={colorButtons}/>
        <OnlineUsers />
    </div>
  )

}
