
import React, { useEffect, useState } from 'react'
import axios from "axios"
import { GET_MESSAGES_COV, MAKE_CONVERSATION } from '../Constants/Chat';
import { URL } from "../../App"





export const MakeConversationAction = (userr,sender,receiver,dataAdd) => async(dispatch,getState) =>{

    try {
        
        const {
            userRegister: { user },
          } = getState();
        const config = {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${user.token}`,
              },
          };
        const {data} = await axios.post(`${URL}/Conversation/postConversation/${sender}/${receiver}/`,dataAdd,config)
        dispatch({type:MAKE_CONVERSATION,payload:data})
    } catch (error) {
        throw error
    }
}



export const SendMessageAction = (message,setText) => async(dispatch) =>{

    try {
        const {data} = await axios.post(`${URL}/Message/postmessage/`,message)
        setText('')
        dispatch({type:GET_MESSAGES_COV,payload:data})
    } catch (error) {
        throw error;
    }
}