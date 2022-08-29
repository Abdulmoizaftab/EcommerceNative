import {createSlice} from "@reduxjs/toolkit"

const addressSlice = createSlice({
    name:"address",
    initialState:{
        addresses:[],
        quantity:0,
    },
    reducers:{
        addAddress:(state,action)=>{
            state.quantity+=1;
            state.addresses.push(action.payload);
        },
        deleteAddress:(state,action)=>{
            state.quantity-=1
            const modifiedAddresses = state.addresses.filter(item => item._id !== action.payload)
            state.addresses = modifiedAddresses;
            // state.products.splice(state.products.findIndex((data) => data.id === action.payload), 1);
        },

       
    },
})

export const {addAddress, deleteAddress } =addressSlice.actions;
export default addressSlice.reducer;