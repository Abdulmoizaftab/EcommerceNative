import { configureStore } from "@reduxjs/toolkit";
import orderReducer from './OrderRedux'

export default configureStore({
    reducer: {
        order: orderReducer
    },
});