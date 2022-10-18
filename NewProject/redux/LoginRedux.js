import {createSlice} from "@reduxjs/toolkit"

const userSlice = createSlice({
    name:"user",
    initialState:{
        currentUser:null,
        isFetching:false,
        error:false,
        loadings:false
    },
    reducers:{
        loginStart:(state)=>{ 
            state.isFetching=true;
            state.loadings=true
        },
        loginSuccess:(state,action)=>{ 
            state.isFetching=false
            state.currentUser=action.payload.data
            state.error=false;
            state.loadings=action.payload.load
        },
        loginFailure:(state)=>{ 
            state.isFetching=false;
            state.error=true
            state.loadings=true
        },
        Logout:(state)=>{ 
            state.isFetching=false;
           state.currentUser=null;
           state.error=false;
        },
    },
})

export const {loginStart,loginSuccess,loginFailure,Logout} = userSlice.actions
export default userSlice.reducer;