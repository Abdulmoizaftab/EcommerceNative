import {createSlice} from "@reduxjs/toolkit"

const favouriteSlice = createSlice({
    name:"favourite",
    initialState:{
        favourites:[],
        totalQuantity:0,
    },
    reducers:{
        addFavourite:(state,action)=>{

           const favIndex =  state.favourites.findIndex(item=>item.id===action.payload.id)
            //check item already in favourites
           if(favIndex>=0){
            state.favourites[favIndex].favQuantity+=1
           }
           //add item first time
           else
           {
               const tempFav = {...action.payload,favQuantity:1};
               state.totalQuantity+=1;
               state.favourites.push(tempFav);
           }
        },
        removeFavourite:(state,action)=>{
            state.totalQuantity-=1
            const modifiedFavourites = state.favourites.filter(item => item.id !== action.payload)
            state.favourites = modifiedFavourites;
        },

       
    },
})

export const {addFavourite, removeFavourite } =favouriteSlice.actions;
export default favouriteSlice.reducer;