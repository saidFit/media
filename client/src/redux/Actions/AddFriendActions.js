
import React from "react"
import axios from 'axios'
import { ADD_FRIEND, DELETE_FRIEND, GET_FRIENDS } from "../Constants/AddFriendConstants"
import { USER_SUCCESS_LOGIN } from "../Constants/Constants";
import { URL } from "../../App"



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
        const {data} = await axios.get(`${URL}/friend`,config)
        dispatch({type:GET_FRIENDS,payload:data})
    } catch (error) {
        if(error.response.data.message){
            localStorage.setItem('tokenExpired',true)
            console.log('tokenExpired'+" "+localStorage.getItem('tokenExpired'))
            const {userRegister: { user }} = getState();
            try {
                        const {data} = await axios.post(`${URL}/user/processToken`,{email:user.email});
                        console.log(data)
                        dispatch({ type: USER_SUCCESS_LOGIN, payload: data})
                    } catch (error) {
                        throw error;
             }

             setTimeout(() => {
                localStorage.setItem('tokenExpired',false)
                console.log('tokenExpired'+" "+localStorage.getItem('tokenExpired'))
             }, 8000);
        }
        // throw error
    }
}

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
       const {data} = await axios.post(`${URL}/friend/AddFriend`,user_Added,config)
        dispatch({type:ADD_FRIEND,payload:data})
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
                "Content-Type": "application/json",
                Authorization: `Bearer ${user.token}`,
              },
          };
        const {data} = await axios.delete(`${URL}/friend/DeleteFriend/${_id}`,config)
         dispatch({type:DELETE_FRIEND,payload:data})
    } catch (error) {
        throw error
    }
}