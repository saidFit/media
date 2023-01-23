import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { AddFavoriteReducer, AddFriendReducer, AddNewCommentReducer, AddPostReducer, GetSingleUserReducer, userRegisterReducer } from "./redux/Reducers/Reducers";


     //state
const reducer = combineReducers({
  addPost        : AddPostReducer,
   userRegister  : userRegisterReducer,
   AddNewComment : AddNewCommentReducer,
   AddFriend     : AddFriendReducer,
   AddFavorite   : AddFavoriteReducer,
   GetSingleUser : GetSingleUserReducer
   
}); 




////////this is initilState of each function find in file Reducer.js////////////
////////this is initilState of each function find in file Reducer.js////////////
const initialState = {
  userRegister:{
     user_Register:null,
     user:JSON.parse(localStorage.getItem('Login')) ? JSON.parse(localStorage.getItem('Login')).user:null,
     loading:false,
     error_arr:[],
     error_single:null,
     IsValid:JSON.parse(localStorage.getItem('Login')) ? JSON.parse(localStorage.getItem('Login')).IsValid:false,
     image_random:JSON.parse(localStorage.getItem('image_random')) ? JSON.parse(localStorage.getItem('image_random')) : null

  },
  addPost:{
    Posts:[],
    error_post:null,
    loading_Posts:false,

  },

  AddNewComment:{
    New_Comment:[],
  },


  AddFriend:{
    Friends:[],
  },
  AddFavorite:{
    Favorites:[],
    
  },
  GetSingleUser:{
    Single_user:{},
  }

};


const middleware = [thunk];

export const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

