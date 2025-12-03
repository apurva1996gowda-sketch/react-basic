import { createSlice } from "@reduxjs/toolkit";

const cartSlice=createSlice({
    name:'cart',
    initialState:{
        cart:[]
    },
    reducers:{
        addtoCart:(state,action)=>{
            state.cart.push(action.payload)
        },
        removefromCart:(state,action)=>{
            
            const id=action.payload
            state.cart=state.cart.filter((cartitem)=>cartitem.id !== id)
        }

    }
})
export const {addtoCart,removefromCart}=cartSlice.actions
export default cartSlice.reducer