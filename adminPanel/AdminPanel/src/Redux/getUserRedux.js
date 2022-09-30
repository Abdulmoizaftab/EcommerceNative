import { createSlice } from '@reduxjs/toolkit'

const userSlice = createSlice({
    name: "getUsers",
    initialState: {
        user: [],
        isFetching: false,
        error: false
    },
    reducers: {
        getUserStart: (state) => {
            state.isFetching = true;
        },
        getUserSuccess: (state, action) => {
            state.isFetching = false;
            state.user.push(action.payload);;
        },
        getUserFailure: (state) => {
            state.isFetching = false;
            state.error = true;
        }
    },
});

export const { getUserStart, getUserSuccess, getUserFailure} = userSlice.actions;
export default userSlice.reducer;