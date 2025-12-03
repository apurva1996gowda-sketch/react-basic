import {createSlice} from '@reduxjs/toolkit'

const counterSlice=createSlice({
    name:'counter',
    initialState:{count:0},
    reducers:{
        handleIncrease:(state)=>{state.count += 1},
        handleDecrease:(state)=>{state.count -= 1}
    }
})

export const {handleDecrease,handleIncrease}=counterSlice.actions;
export default counterSlice.reducer;