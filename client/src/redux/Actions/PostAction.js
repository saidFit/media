import axios from "axios"
import { ADD_NEW_POST, GET_ALL_POSTS, REMOVE_LOADING } from "../Constants/PostsConstant"
import { LOADING_EVENT_POST } from "../Constants/PostsConstant"
import { URL } from "../../App"
import upload from "../../utils/upload"
export const getAllPostsAction = () => async(dispatch) =>{
    dispatch({type:LOADING_EVENT_POST})
    try {
        const {data} =await axios.get(`${URL}/post/`)
          dispatch({type:GET_ALL_POSTS,payload:data})
    } catch (error) {
        throw error
    }
}


export const AddNewPostAction = (NewPost,image,settitle,setIsClickImage,IsClickImage) => async(dispatch) =>{

    dispatch({type:LOADING_EVENT_POST})
    const url = await upload(image);
    try {
        console.log(NewPost)
       const {data} = await axios.post(`${URL}/post/AddPost/`,{...NewPost,image:url})
        dispatch({type:ADD_NEW_POST,payload:data})
        settitle('')
        setIsClickImage(false)
    } catch (error) {
        throw error
    }
    getAllPostsAction()
}










