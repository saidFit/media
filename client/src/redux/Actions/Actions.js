
import axios from 'axios'
import { CHANGE_DATA_USER, DELETE_ERRORS, GET_SINGLE_USER, IMAGE_RANDOM_PUP, LOADING_EVENT, LOADING_HEDDIN, PUT_IN_USER_REGISTER, USER_BECOME_EMPTY, USER_ERROR, USER_ERROR_ARR, USER_LOGOUT, USER_SUCCESS, USER_SUCCESS_LOGIN } from '../Constants/Constants'
import { images_random } from '../../image-data-random/image-radom'
import { GET_ALL_POSTS } from '../Constants/PostsConstant'
import { GET_ALL_COMMENT, RELOAD_COMMENT } from '../Constants/CommentConstants'
import { useNavigate } from 'react-router-dom'
import { URL } from '../../App'
import upload from '../../utils/upload'


export const UserRegisterAction = (user,image,Navigate,error_arr,error_single) => async (dispatch) => {
    dispatch({ type: LOADING_EVENT })
    
    const url = await upload(image);
        console.log(url)
    try {
        console.log(user);
        const { data } = await axios.post(`${URL}/user/register/`, {...user,image:url})
        dispatch({ type: USER_SUCCESS, payload: data })
        Navigate('/Login')
    } catch (error) {

        if (error.response.data.error) {
            return dispatch({ type: USER_ERROR, payload: (error.response.data.error)})
        }
        dispatch({ type: USER_ERROR_ARR, payload: (error.response.data) })
        throw error
    }
    setTimeout(() => {
      dispatch({type:USER_BECOME_EMPTY})   
    }, 600);
   
}


 const getRandomInt =(max) =>{
 return Math.floor(Math.random() * max)
} 


export const handleRandomImageAction = () => async(dispatch) =>{
    const image_random = images_random[getRandomInt(5)]
    dispatch({type:IMAGE_RANDOM_PUP,payload: image_random})
}


export const UserLoginAction = (user_check, setemail, setpassword,user,IsValid) => async (dispatch,getState) => {
    const image_random = images_random[getRandomInt(5)]
    localStorage.setItem('image_random',JSON.stringify(image_random))
    dispatch({ type: LOADING_EVENT })
    
    try {
       
        const { data } = await axios.post(`${URL}/user/login`,user_check)
        setemail('')
        setpassword('')
        dispatch({ type: USER_SUCCESS_LOGIN, payload: data})
        dispatch({type:IMAGE_RANDOM_PUP,payload: image_random})
    } catch (error) {

        if (error.response.data.error) {
            return dispatch({ type: USER_ERROR, payload: (error.response.data.error) })
        }
        dispatch({ type: USER_ERROR_ARR, payload: (error.response.data) })
    }

}




export const userLogoutAction = () => async(dispatch) => {
    dispatch({type:LOADING_EVENT})
    localStorage.clear()
    setTimeout(() => {
       dispatch({type:USER_LOGOUT})   
    }, 800);
      
}



export const puthinginregister = () => async(dispatch) =>{
    dispatch({type:PUT_IN_USER_REGISTER})
    setTimeout(() => {
        dispatch({type:USER_BECOME_EMPTY})   
      }, 800);
}



export const removeLocalStorageAction = () => async (dispatch) =>{

    dispatch({type:USER_BECOME_EMPTY})
    localStorage.clear()
}

export const DeleteErrors = () => async(dispatch) =>{
    dispatch({type:DELETE_ERRORS})
}


export const getSingleUserAction = (_id) => async(dispatch)=>{
    dispatch({ type: LOADING_EVENT })  
    try {
        const {data} = await axios.get(`${URL}/user/getById/${_id}`)
        dispatch({type:GET_SINGLE_USER,payload:data})
        dispatch({type:LOADING_HEDDIN})
    } catch (error) {
        throw error
    }
}

export const updateImageProfileAction = (_id,image) => async(dispatch) =>{
    try {
        const {data} = await axios.put(`${URL}/user/putImageProfile/${_id}`,image)
        dispatch({type:CHANGE_DATA_USER,payload:data.user})
        dispatch({type:GET_SINGLE_USER,payload:data.user})
        dispatch({type:GET_ALL_POSTS,payload:data.posts})
        dispatch({type:GET_ALL_COMMENT,payload:data.comments})
    } catch (error) {
       
    }
}

export const updateImageCovertureAction =(_id,image) => async(dispatch) =>{

    try {
       const {data} = await axios.put(`${URL}/user/updateImageCoverture/${_id}`,image)
        dispatch({type:USER_SUCCESS_LOGIN,payload:data})
        dispatch({type:GET_SINGLE_USER,payload:data})
    } catch (error) {
        
    }
}