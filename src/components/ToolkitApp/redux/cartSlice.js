import { createSlice} from "@reduxjs/toolkit";

const initialState = {
   cartItems : [],
    totalPrice : 0
}

const cartSlice = createSlice({
    name : 'cartReducer',
    initialState,
    reducers : {
        addMobile : (state, action)=> {
            state.cartItems.push(action.payload)
            const allPrices = state.cartItems.map(mobile=> mobile.price)
            state.totalPrice = allPrices.reduce((a,b)=> a+b)
        },
        removeMobile : (state, action)=> {
            const index = state.cartItems.findIndex((mobile)=> mobile.name === action.payload.name)
            if (index>-1){
                state.cartItems.splice(index,1)
                const allPrices = state.cartItems.map(mobile=> mobile.price)
                // state.totalPrice = allPrices.reduce((a=0, b=0)=> a+b)
                state.totalPrice = allPrices.length>0
                                    ? state.totalPrice = allPrices.reduce((a,b)=> a+b)
                                    : 0
            }
            
        }
    }

})

export const {addMobile, removeMobile} = cartSlice.actions

export default cartSlice.reducer