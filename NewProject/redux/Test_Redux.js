import { createSlice } from "@reduxjs/toolkit"

const cartSlice = createSlice({
    name: "test",
    initialState: {
        products: [],
        quantity: 0,
        total: 0,
    },
    reducers: {
        addProductTest: (state, action) => {
            // console.log("🚀 ~ ", state, action)
            state.quantity += 1;
            state.products.push(action.payload);
            state.total += action.payload.product.price * action.payload.qty;
            
        },
        resetCartTest: (state, action) => {
            state.quantity = 0;
            state.products = []
            state.total = 0
            console.log(state);
        },
        deleteProductTest: (state, action) => {
            state.products.filter((x) => {
                if (x.product.product_id === action.payload) {
                    state.total -= x.product.price * x.qty
                }
            })
            state.quantity -= 1
            const modifiedCart = state.products.filter(item => item.product.product_id !== action.payload)
            state.products = modifiedCart
        },
        modifyCartTest:(state,action)=>{ 
            state.products.filter((x)=>{
                if(x.product.product_id===action.payload.product_id){
                    state.total -= x.product.price * x.qty
                    state.total += x.product.price * action.payload.qty
                }
            })
            
            state.products.forEach((element,index)=>{
                if(element.product.product_id===action.payload.product_id){
                    state.products[index].qty = action.payload.qty
                }
            })

        },


    },
})

export const { addProductTest, deleteProductTest, resetCartTest, modifyCartTest } = cartSlice.actions;
export default cartSlice.reducer;
