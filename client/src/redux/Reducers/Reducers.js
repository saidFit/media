import { ADD_FRIEND, DELETE_FRIEND, GET_FRIENDS } from "../Constants/AddFriendConstants";
import { GET_MESSAGES_COV, MAKE_CONVERSATION } from "../Constants/Chat";
import { ADD_NEW_COMMENT, GET_ALL_COMMENT, RELOAD_COMMENT } from "../Constants/CommentConstants";
import { ADD_FAVORITE, DELETE_FAVORITE, GET_ALL_FAVORITES } from "../Constants/FavoriteConstants";
import { ADD_NEW_POST, GET_ALL_POSTS, LOADING_EVENT_POST,REMOVE_LOADING } from "../Constants/PostsConstant";

const { LOADING_EVENT, USER_SUCCESS, USER_ERROR, USER_ERROR_ARR, USER_SUCCESS_LOGIN, USER_BECOME_EMPTY, IMAGE_RANDOM_PUP, USER_LOGOUT, PUT_IN_USER_REGISTER, DELETE_ERRORS, GET_SINGLE_USER, CHANGE_DATA_USER, LOADING_HEDDIN } = require("../Constants/Constants");




export const userRegisterReducer = (state={},action) =>{
    const {payload} = action
    switch(action.type){
        case LOADING_EVENT:
           return {...state,loading:true}
        case USER_SUCCESS:
            return {...state,user_Register:payload,loading:false,error_arr:[],error_single:null}
        case DELETE_ERRORS:
            return {...state,error_arr:[],error_single:null}    
        case USER_SUCCESS_LOGIN:
           return {...state,user:payload,loading:false,error_arr:[],error_single:null,IsValid:true}   
        case USER_ERROR_ARR:
            return {...state,user:null,error_arr:payload,loading:false}    
        case USER_ERROR:
            return {...state,user:null,error_single:payload,loading:false}  
         case USER_LOGOUT:
            return{...state,user:null,loading:false}    
        case USER_BECOME_EMPTY: 
            return {...state,user_Register:null}  
         case PUT_IN_USER_REGISTER:
            return {...state,user_Register:'register'}   
        case IMAGE_RANDOM_PUP:
            return {...state,image_random:payload} 
        case CHANGE_DATA_USER:
            return {...state,user:payload}  
        case LOADING_HEDDIN:
            return {...state,loading:false}         
        default:
          return state;
    }
}



export const AddPostReducer = (state={},action) =>{
    const {payload} = action
    switch (action.type){
       case ADD_NEW_POST:
           return {...state,Posts:[payload,...state.Posts],loading_Posts:false}
        case GET_ALL_POSTS:
            return {...state,Posts:payload,loading_Posts:false}
       case LOADING_EVENT_POST:
            return {...state,loading_Posts:true}     
      default:
          return state;
    }
}




export const AddNewCommentReducer = (state={},action) =>{
    const {payload} = action
       switch(action.type){
         case ADD_NEW_COMMENT:
            return {...state,New_Comment:[...state.New_Comment,payload]}   
        case GET_ALL_COMMENT:
            return {...state,New_Comment:payload}
        default:
            return state;
       }
}



export const AddFriendReducer = (state={},action) =>{
    
    const {payload} = action;
    switch(action.type){
       case ADD_FRIEND:
        return {...state,Friends:[...state.Friends,payload]}
       case GET_FRIENDS:
        return{...state,Friends:payload}
       case DELETE_FRIEND:
        return {...state,Friends:state.Friends.filter((Friend) => Friend._id !== payload._id)} 
       default:
        return state; 

    }

}




export const AddFavoriteReducer = (state={},action) =>{
    
    const {payload}= action;
    switch(action.type) {
        case ADD_FAVORITE:
        return  {...state,Favorites:[...state.Favorites,payload]}
        case DELETE_FAVORITE:
         return {...state,Favorites:state.Favorites.filter(favorite => favorite._id != payload._id)} 
         case GET_ALL_FAVORITES:
            return {...state,Favorites:payload}   
        default:
            return state
    }
}


export const GetSingleUserReducer = (state=null,action) =>{

const {payload} = action;
switch(action.type){
    case GET_SINGLE_USER:
        return {...state,Single_user:payload}
    
    default:
        return state
}
}



export const ChatMessagesReducers = (state=null,action) =>{
    const {payload} = action;
    switch (action.type) {
        case MAKE_CONVERSATION:
            return {
                ...state,
                conversation:payload.conversation,
                conversations:payload.conversations,
                messages:payload.messages,
                conversationUsers:payload.conversationUsers
            }
        case GET_MESSAGES_COV:
            return {...state,messages:payload}    
        default:
          return state;
    }
}