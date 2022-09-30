import { configureStore } from "@reduxjs/toolkit";
import orderReducer from './OrderRedux'
import getUser from './getUserRedux'


export default configureStore({
    reducer: {
        order: orderReducer,
        getUser: getUser
    },
});