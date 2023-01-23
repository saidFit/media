import axios from "axios"
import { useDispatch } from "react-redux"
import { ADD_FAVORITE, DELETE_FAVORITE, GET_ALL_FAVORITES } from "../Constants/FavoriteConstants"


export const GetAllFavoritesAction = () => async(dispatch) =>{
    try {
        const {data} = await axios.get('/Favorite')
       return dispatch({type:GET_ALL_FAVORITES,payload:data})
    } catch (error) {
        
    }

}


export const AddFavoriteAction = (Favorite)=> async(dispatch) =>{

    try {
      const {data} =  await axios.post('/Favorite/postFavorite',Favorite)
        console.log(data)
        dispatch({type:ADD_FAVORITE,payload:data.Favorite})
    } catch (error) {
        throw error
    }

    
}


export const DeleteFavoriteAction = (_id) => async(dispatch) =>{

    try {
       const {data} = await axios.delete(`/Favorite/delete/${_id}`)
       console.log(data)
       dispatch({type:DELETE_FAVORITE,payload:data.FavoriteDeleted})
    } catch (error) {
        
    }
}











