import axios from "axios"
import { useDispatch } from "react-redux"
import { ADD_FAVORITE, DELETE_FAVORITE, GET_ALL_FAVORITES } from "../Constants/FavoriteConstants"
import { URL } from "../../App"

export const GetAllFavoritesAction = () => async(dispatch) =>{
    try {
        const {data} = await axios.get(`${URL}/Favorite`)
        console.log(data)
       return dispatch({type:GET_ALL_FAVORITES,payload:data})
    } catch (error) {
        throw error;
    }

}


export const AddFavoriteAction = (Favorite)=> async(dispatch) =>{

    try {
      const {data} =  await axios.post(`${URL}/Favorite/postFavorite`,Favorite)
        console.log(data)
        dispatch({type:ADD_FAVORITE,payload:data.Favorite})
    } catch (error) {
        throw error
    }

    
}


export const DeleteFavoriteAction = (_id) => async(dispatch) =>{

    try {
       const {data} = await axios.delete(`${URL}/Favorite/delete/${_id}`)
       console.log(data)
       dispatch({type:DELETE_FAVORITE,payload:data.FavoriteDeleted})
    } catch (error) {
        throw error;
    }
}











