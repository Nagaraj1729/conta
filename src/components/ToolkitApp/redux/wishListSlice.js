import { createSlice } from "@reduxjs/toolkit";

const initialState = {
        wishList : []
}

const wishListSlice = createSlice({
    name : 'wishList',
    initialState,
    reducers : {
        toggleFromWishList : (state, action)=> {
            const index = state.wishList.findIndex(mobile=> mobile.name===action.payload.name)
            if (index=== -1){
                state.wishList.push(action.payload)
            }else{
                state.wishList.splice(index,1)
            }
            
        }
    }

})

export const {toggleFromWishList} = wishListSlice.actions

export default wishListSlice.reducer