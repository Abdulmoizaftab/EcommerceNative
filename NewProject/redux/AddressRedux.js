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
            const modifiedAddresses = state.addresses.filter(item => item.id !== action.payload)
            //const modifiedAddresses = state.addresses.filter(item => item.address !== action.payload)
            state.addresses = modifiedAddresses;
            // state.products.splice(state.products.findIndex((data) => data.id === action.payload), 1);
        },
        updateAddress:(state,action)=>{
            const index = state.addresses.findIndex(e => e.id === action.payload.id);
            state.addresses[index] = action.payload
            console.log(state.addresses);
        },

       
    },
})

export const {addAddress, deleteAddress,updateAddress } =addressSlice.actions;
export default addressSlice.reducer;