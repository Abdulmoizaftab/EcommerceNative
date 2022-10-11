import {loginStart,loginSuccess,loginFailure} from './LoginRedux'
import {registerStart,registerFailure,registerSuccess} from './RegisterRedux'
import {deleteProductTest} from './Test_Redux'
import axios from 'axios';


export const login =async (dispatch,user)=>{
    dispatch(loginStart());
    try {
        const res = await axios.post("http://192.168.1.29:5000/sql/login",user);
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
        const res = await axios.post("http://192.168.1.29:5000/sql/register",user);
        dispatch(registerSuccess(res.data));
        console.log(res.data);
    } catch (error) {
        dispatch(registerFailure());
    }
}

export const addToCart = async (dispatch,prod) =>{
    try {
        await axios.post('http://192.168.1.29:5000/sql/addCartItem', prod)
    } catch (error) {
        console.log(error);
    }
}

export const cartModificationDecrease = async (dispatch,prod) =>{
    try {
        await axios.post('http://192.168.1.29:5000/sql/delCartItem', prod)
    } catch (error) {
        console.log(error);
    }
}

export const cartModificationIncrease = async (dispatch,prod) =>{
    try {
        await axios.post('http://192.168.1.29:5000/sql/addCartItem', prod)
    } catch (error) {
        console.log(error);
    }
}
export const deleteFromCart = async (dispatch,prod) =>{
    try {
        await axios.post('http://192.168.1.29:5000/sql/deleteFromCart', prod)
    } catch (error) {
        console.log(error);
    }
}