import { configureStore } from "@reduxjs/toolkit";
import counterReducer from './CounterSlice'
import multiplierReducer from './MultiplierSlice'
import productsReducer from './productSlice'
import usersReducer from './usersSlice'
import cartReducer from './cartSlice'

export const store = configureStore({
    reducer:{
        counter:counterReducer,
        multiplier:multiplierReducer,
        products:productsReducer,
        users:usersReducer,
        cart:cartReducer
    }
})