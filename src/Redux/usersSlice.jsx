import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


export const fetchusers = createAsyncThunk('users', async () => {
    const response = await axios.get("https://fakestoreapi.com/users")
    return response.data
})
const usersSlice = createSlice({
    name: 'users',
    initialState: {
        data: [],
        loading: false,
        error: null
    },
    reducers: {
        deleteData: (state, action) => {
            const id = action.payload
            state.data = state.data.filter((item) => item.id !== id)
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchusers.pending, (state) => {
            console.log("pending")
            state.loading = true
        })
        builder.addCase(fetchusers.fulfilled, (state, actions) => {
            console.log("successful")
            state.loading = false
            state.data = actions.payload
        })
        builder.addCase(fetchusers.rejected, (state, actions) => {
            console.log("unsuccessful")
            state.loading = false
            state.error = actions.error
        })
    }
})
export const {deleteData}=usersSlice.actions
export default usersSlice.reducer