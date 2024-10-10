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

export const fetchSingleProduct=createAsyncThunk(
    'content/fetchSingleProduct',
    async (productId)=>{
        const res = await axios (`https://fakestoreapi.com/products/${productId}`);
        const data = await res.data
        return data
    }
)


const productSlice=createSlice({
    name:"products",
    initialState:{
        productItems: [],
        singleProductItem:{},
        selectedItem: null,
        loading: false,
        error: null,
    },

    extraReducers : (builder)=>{
        builder.addCase(fetchProducts.pending,(state)=>{
            state.loading =  true
        })
        builder.addCase(fetchProducts.fulfilled,(state,action)=>{
            state.loading =  false
            state.productItems = action.payload
        })
        builder.addCase(fetchProducts.rejected,(state,action)=>{
            state.loading =  false
            state.productItems = action.error.message
        })


        builder.addCase(fetchSingleProduct.pending,(state)=>{
            state.loading =  true
        })
        builder.addCase(fetchSingleProduct.fulfilled,(state,action)=>{
            state.loading =  false
            state.singleProductItem = action.payload
        })
        builder.addCase(fetchSingleProduct.rejected,(state,action)=>{
            state.loading =  false
            state.error = action.error.message
        })
    }
})


export const productData = (state)=>{
    return state.products.productItems;
}

export const productLoading=(state)=>{
    return state.products.loading
}

export const singleProductData=(state)=>{
    return state.products.singleProductItem;
}

export default productSlice.reducer