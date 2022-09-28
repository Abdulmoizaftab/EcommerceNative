import { createSlice } from '@reduxjs/toolkit'

const orderSlice = createSlice({
    name: 'order',
    initialState: {
        order: [],
        quantity: 0,
        total: 0
    },
    reducers: {
        addOrder: (state, action) => {
            state.quantity += 1;
            state.order.push(action.payload.order);
            state.total += action.payload.price;
        },
    },
});


export const { addOrder } = orderSlice.actions;
export default orderSlice.reducer;