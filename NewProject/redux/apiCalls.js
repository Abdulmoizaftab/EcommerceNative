import {loginStart,loginSuccess,loginFailure} from './LoginRedux'
import {registerStart,registerFailure,registerSuccess} from './RegisterRedux'
import axios from 'axios';
import { addFavourite, removeFavourite } from './FavouritesRedux';


export const login =async (dispatch,user)=>{
    dispatch(loginStart());
    try {
        const res = await axios.post("http://192.168.1.4:5000/sql/login",user);
        dispatch(loginSuccess(res.data));
        console.log("Data==>",res);
    } catch (error) {
        dispatch(loginFailure());
        console.log("No data");
    }
}


export const register =async (dispatch,user)=>{
    dispatch(registerStart());
    try {
        const res = await axios.post("http://192.168.1.4:5000/sql/register",user);
        dispatch(registerSuccess(res.data));
        console.log(res.data);
    } catch (error) {
        dispatch(registerFailure());
    }
}

export const addFavouriteDB =async (dispatch,data)=>{
    //dispatch(registerStart());
    try {
        const res = await axios.post("http://192.168.1.4:5000/sql/setFavourites",{favouritedProd:data.product_id});
        // const result=await res.json()
        dispatch(addFavourite(res.data));
        console.log(res.data);
    } catch (error) {
        console.log(error)
    }
}

export const remFavouriteDB =async (dispatch,data)=>{
    //dispatch(registerStart());
    try {

// console.log(data)
        const res = await axios.post("http://192.168.1.4:5000/sql/delFavourites",{favouritedProd:data.product_id});
        // const result=await res.json()
        dispatch(removeFavourite(res.data));
        console.log(res.data);
    } catch (error) {
        console.log(error)
    }
}




