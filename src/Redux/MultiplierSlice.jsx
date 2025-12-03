import { createSlice } from "@reduxjs/toolkit";

const multiplierSlice=createSlice({
    name:'multiplier',
    initialState:{value:1},
    reducers:{
        handlemultiply:(state)=>{state.value *= 2}
    }
})

export const {handlemultiply}=multiplierSlice.actions
export default multiplierSlice.reducer