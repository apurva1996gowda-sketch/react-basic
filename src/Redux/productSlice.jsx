import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchproducts = createAsyncThunk('products', async () => {
    const response = await axios.get("https://fakestoreapi.com/products")
    return response
})

const productSlice = createSlice({
    name: 'products',
    initialState: {
        products: [],
        loading: false,
        error: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchproducts.pending, (state, actions) => {
            console.log("fetching products....")
            state.loading = true

        })
        builder.addCase(fetchproducts.fulfilled, (state, actions) => {
            console.log("fetched products successfully")
            state.loading = false
            state.products = actions.payload
        })
        builder.addCase(fetchproducts.rejected, (state, actions) => {
            console.log("fetching unsuccessfull")
            state.loading = false
        })
    }
})

export default productSlice.reducer