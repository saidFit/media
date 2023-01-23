
import React from "react"
import axios from 'axios'
import { ADD_FRIEND, DELETE_FRIEND, GET_FRIENDS } from "../Constants/AddFriendConstants"



export const AddFriendAction = (user_Added) => async(dispatch,getState) =>{

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
       const {data} = await axios.post('/friend/AddFriend',user_Added,config)
        dispatch({type:ADD_FRIEND,payload:data})
    } catch (error) {
        throw error
    }
}

export const GetAllFriendAction = () => async(dispatch,getState) =>{

    try {
        const {
            userRegister: { user },
          } = getState();
        const config = {
            headers: {
                Authorization: `Bearer ${user.token}`,
              },
          };

        const {data} = await axios.get('/friend',config)
        dispatch({type:GET_FRIENDS,payload:data})
    } catch (error) {
        throw error
    }
}


export const DeleteFriendAction = (_id) => async(dispatch,getState) =>{

    try {
        const {
            userRegister: { user },
          } = getState();
        const config = {
            headers: {
                Authorization: `Bearer ${user.token}`,
              },
          };
        const {data} = await axios.delete(`/friend/DeleteFriend/${_id}`,config)
         console.log(data)
         dispatch({type:DELETE_FRIEND,payload:data})
    } catch (error) {
        throw error
    }
}