import { loginStart, loginSuccess, loginFailure,Logout } from './LoginRedux'
import { registerStart, registerFailure, registerSuccess } from './RegisterRedux'
import { addAddress, updateAddress, deleteAddress, errorAddress } from './AddressRedux'
import { deleteProductTest } from './Test_Redux'
import axios from 'axios';

import { addFavourite, getFavourite, removeFavourite } from './FavouritesRedux';
import { Alert , ToastAndroid} from 'react-native';
//import { useNavigation } from '@react-navigation/native'

//import { useDispatch, useSelector } from 'react-redux';

//export const navigation=useNavigation();
export const login = async (dispatch, user) => {
    
    try {
        dispatch(loginStart());
        const res = await axios.post("http://192.168.1.18:5000/sql/login", {email:user.email,password:user.password});
        let obj={
            load:false,
            data:res.data
        }
        dispatch(loginSuccess(obj));
        user.navigation.navigate('Home')
        
    } catch (error) {
        dispatch(loginFailure(true));
        console.log("No data");
    }
}


export const register = async (dispatch, user) => {
    try {
        console.log(user)
        dispatch(registerStart());
        const res = await axios.post("http://192.168.1.18:5000/sql/register", { username:user.username, email:user.email, password:user.password, first_name:user.first_name, last_name:user.last_name});
        let obj={
            load:false,
            data:res.data
        }
       
            dispatch(registerSuccess(obj));
        
        console.log(res.data);
        Alert.alert(
            "Register successfully",
            "Please verify your mail",
            [
          {
            text: "Ok",
            onPress: () => user.navigation.navigate('Login')
          },
          
        ]
        );
    
    } catch (error) {
        dispatch(registerFailure(true));
        console.log("Error==>",error);
    }
}

export const addressAdd = async (dispatch, addressPayload) => {
    try {
        const res = await axios.post("http://192.168.1.18:5000/sql/addAddress", addressPayload);
    } catch (error) {
        dispatch(errorAddress());
    }
}

export const addressDelete = async (dispatch, addressId) => {
    try {
        const res = await axios.put(`http://192.168.1.18:5000/sql/deleteAddress/${addressId}`);
    } catch (error) {
        dispatch(errorAddress());
    }
}

export const addressUpdate = async (dispatch, addressObj) => {
    try {
        const res = await axios.put(`http://192.168.1.18:5000/sql/updateAddress/${addressObj.address_id}`, addressObj.payload);
    } catch (error) {
        dispatch(errorAddress());
    }
}
export const addToCart = async (dispatch, prod) => {
    try {
        const config = { headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${prod.token}` } }
        await axios.post('http://192.168.1.18:5000/sql/addCartItem', prod,config)
    } catch (error) {
        console.log(error);
    }
}

export const cartModificationDecrease = async (dispatch, prod) => {
    try {
        const config = { headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${prod.token}` } }
        await axios.post('http://192.168.1.18:5000/sql/delCartItem', prod,config)
    } catch (error) {
        console.log(error);
    }
}

export const cartModificationIncrease = async (dispatch, prod) => {
    try {
        const config = { headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${prod.token}` } }
        await axios.post('http://192.168.1.18:5000/sql/addCartItem', prod,config)
    } catch (error) {
        console.log(error);
    }
}
export const deleteFromCart = async (dispatch, prod) => {
    try {
        await axios.post('http://192.168.1.18:5000/sql/deleteFromCart', prod)
    } catch (error) {
        console.log(error);
    }
}
export const addFavouriteDB = async (dispatch, data) => {
    //dispatch(registerStart());

    try {
        const config = { headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${data.token}` } }
        const res = await axios.post("http://192.168.1.18:5000/sql/setFavourites", { favouritedProd: data.product_id , user_id:data.user_id } , config);
        // const result=await res.json()
        dispatch(addFavourite(res.data));
        //console.log(res.data);

        // console.log("db");

    } catch (error) {
        console.log(error)
    }
}


export const getFavouriteDB = async (dispatch,user,navigation) => {
    //dispatch(registerStart());

    try {
        const config = { headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${user.token}` } }
        const res = await axios.post("http://192.168.1.18:5000/sql/getFavourites",{user_id:user.user[0].user_id},config);
        dispatch(getFavourite(res.data));
        console.log("token",res.data);

    } catch (error) {
        console.log("hello",error)
        if(error == "AxiosError: Request failed with status code 401"){
            Alert.alert(
                "Attention",
                "Your session is expired. Please login again",
                [
              {
                text: "Ok",
                onPress: async () => {
                    try {
                        const res= await axios.post('http://192.168.1.18:5000/sql/session',{user_id:user.user[0].user_id},{
                            headers: {
                                'Authorization': `Bearer ${user.token}` 
                            }
                        })
                        console.log("res of fav",res.data);
                        navigation.navigate('Profile')
                } catch (error) {
                    console.log("Something went wrong");
                }
            
            },
              }
            ]
            );
            dispatch(Logout());
        }
        else if(error == "AxiosError: Network Error"){
            //console.log("Something 2");
            // Alert.alert(
            //     "Network Error",
            //     "Please check your network connection.",
            //     [
            //   {
            //     text: "Ok",
            //     onPress: () => console.log("Ok"),
            //   }
            // ]
            // );
            //dispatch(getFavourite(null))
            return(
                ToastAndroid.showWithGravity("Please Check Your Network Connection!", ToastAndroid.LONG, ToastAndroid.BOTTOM)
            )
        }
    }
}

export const remFavouriteDB = async (dispatch, data) => {
    try {
        const config = { headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${data.token}` } }
        const res = await axios.post("http://192.168.1.18:5000/sql/delFavourites", { favouritedProd: data.product_id , user_id:data.user_id} , config);
        // const result=await res.json()
        dispatch(removeFavourite(res.data));
        //  console.log(res.data);
    } catch (error) {
        console.log(error)
    }
}




