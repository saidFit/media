import axios from "axios"
import { ADD_NEW_COMMENT, GET_ALL_COMMENT } from "../Constants/CommentConstants"
import { URL } from "../../App"



export const AddNewCommentAction = (comment,setcomment,input) => async(dispatch) =>{

    try {
        const {data} = await axios.post(`${URL}/comment/postComment`,comment)
        dispatch({type:ADD_NEW_COMMENT,payload:data})
        setcomment('')
    } catch (error) {
        throw error;
    }
}


export const GetAllComment = () => async(dispatch) =>{
    try {
        const {data} = await axios.get(`${URL}/comment`)
        dispatch({type:GET_ALL_COMMENT,payload:data})
    } catch (error) {
        throw error;
    }
}