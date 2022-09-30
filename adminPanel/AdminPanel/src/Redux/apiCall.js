import { loginFailure, loginStart, loginSuccess } from "./userRedux";
import { publicRequest, userRequest, getPublicRequest } from '../RequestMethod';
import { registerFailure, registerStart, registerSuccess } from "./registerRedux";
import { getUserStart, getUserSuccess, getUserFailure } from './getUserRedux';

// export const login = async (dispatch, user) => {
//     dispatch(loginStart());
//     try {
//         const res = await publicRequest.post("/auth/login", user);
//         dispatch(loginSuccess(res.data));
//     }
//     catch (err) {
//         dispatch(loginFailure());
//     }
// };

// export const addOrder = async (order) => {
//     try {
//         const res = await userRequest.post("/orders", order)

//     } catch (err) {
//         console.log(err)
//     }
// };

// export const register = async (dispatch, user) => {
//     dispatch(registerStart());
//     try {
//         const res = await publicRequest.post("/auth/register", user)
//         dispatch(registerSuccess(res.data))

//     } catch (err) {
//         dispatch(registerFailure());
//     }
// };

export const getData = async (dispatch) => {
    dispatch(getUserStart())
    try {
        const res = await getPublicRequest.get("/allUsers");
        dispatch(getUserSuccess(res.data))
    }
    catch (err) {
        dispatch(getUserFailure())
    }
}

