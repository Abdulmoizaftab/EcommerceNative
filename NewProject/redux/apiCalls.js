import {loginStart,loginSuccess,loginFailure} from './LoginRedux'
import {registerStart,registerFailure,registerSuccess} from './RegisterRedux'
import axios from 'axios';
import { addFavourite, getFavourite, removeFavourite } from './FavouritesRedux';

import { useDispatch,useSelector } from 'react-redux';

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
        
        // console.log("db");
        
    } catch (error) {
        console.log(error)
    }
}

export const updateFavouriteDB =async (dispatch,data)=>{
    //dispatch(registerStart());

    try {
        
        const res = await axios.post("http://192.168.1.4:5000/sql/updateFavourites",{favouritedProd:data.product_id});
        // const result=await res.json()
        dispatch(addFavourite(res.data));
        console.log(res.data);
        
        // console.log("db");
        
    } catch (error) {
        console.log(error)
    }
}
export const getFavouriteDB =async (dispatch,data)=>{
    //dispatch(registerStart());

    try {
        
        const res = await axios.get("http://192.168.1.4:5000/sql/getFavourites");
        // const result=await res.json()
        dispatch(getFavourite(res.data));
        console.log("==========XXXX===",res.data);
        
        // console.log("db");
        
    } catch (error) {
        console.log(error)
    }
}

export const remFavouriteDB =async (dispatch,data)=>{
    try {
        const res = await axios.post("http://192.168.1.4:5000/sql/delFavourites",{favouritedProd:data.product_id});
        // const result=await res.json()
        dispatch(removeFavourite(res.data));
        console.log(res.data);
    } catch (error) {
        console.log(error)
    }
}




