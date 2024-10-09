import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProducts=createAsyncThunk(
    'content/fetchProduct',
    async ()=>{
        const res = await axios ('https://fakestoreapi.com/products');
        const data = await res.data
        return data
    }
)

const productSlice=createSlice({
    name:"products",
    initialState:{
        productItems: [],
        selectedItem: null,
        loading: false,
        error: null,
    },

    extraReducers : (builder)=>{
        builder.addCase(fetchProducts.pending,(state)=>{
            state.loading =  true
        })
        builder.addCase(fetchProducts.fulfilled,(state,action)=>{
            state.loading =  true
            state.productItems = action.payload
        })
        builder.addCase(fetchProducts.rejected,(state,action)=>{
            state.loading =  true
            state.productItems = action.error.message
        })
    }
})


export const productData = (state)=>{
    return state.products.productItems;
}

export default productSlice.reducer