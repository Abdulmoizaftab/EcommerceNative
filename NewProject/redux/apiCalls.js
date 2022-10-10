import {loginStart,loginSuccess,loginFailure} from './LoginRedux'
import {registerStart,registerFailure,registerSuccess} from './RegisterRedux'
import {addAddress,updateAddress,deleteAddress,errorAddress} from './AddressRedux'
import axios from 'axios';


export const login =async (dispatch,user)=>{
    dispatch(loginStart());
    try {
        const res = await axios.post("http://192.168.1.24:5000/sql/login",user);
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
        const res = await axios.post("http://192.168.1.24:5000/sql/register",user);
        dispatch(registerSuccess(res.data));
        console.log(res.data);
    } catch (error) {
        dispatch(registerFailure());
    }
}

export const addressAdd =async (dispatch,addressPayload)=>{
    try {
        const res = await axios.post("http://192.168.1.24:5000/sql/addAddress",addressPayload);
    } catch (error) {
        dispatch(errorAddress());
    }
}

export const addressDelete =async (dispatch,addressId)=>{
    try {
        const res = await axios.put(`http://192.168.1.24:5000/sql/deleteAddress/${addressId}`);
    } catch (error) {
        dispatch(errorAddress());
    }
}

export const addressUpdate =async (dispatch,addressObj)=>{
    try {
        const res = await axios.put(`http://192.168.1.24:5000/sql/updateAddress/${addressObj.address_id}`,addressObj.payload);
    } catch (error) {
        dispatch(errorAddress());
    }
}