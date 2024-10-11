import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProducts=createAsyncThunk(
    'content/fetchProduct',
    async ()=>{
        const res = await axios ('https://ecommerce-api-8ga2.onrender.com/api/product');
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

export const fetchCategory=createAsyncThunk(
    'content/fecthCategry',
    async ()=>{
        const res = await axios('https://fakestoreapi.com/products/categories/all');
        const data = await res.data
        return data
    }
)


const productSlice=createSlice({
    name:"products",
    initialState:{
        productItems: [],
        categoryItems: [],
        singleProductItem:{},
        selectedItem: null,
        loading: false,
        error: null,
    },

    extraReducers : (builder)=>{
        // Products
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

        //Single Product
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

        // Category
        builder.addCase(fetchCategory.pending,(state)=>{
            state.loading =  true
        })
        builder.addCase(fetchCategory.fulfilled,(state,action)=>{
            state.loading = false
            state.categoryItems = action.payload
        })
        builder.addCase(fetchCategory.rejected,(state,action)=>{
            state.loading = false
            state.categoryItems = action.error.message
        })
    }
})


// Products
export const productData = (state)=>{
    return state.products.productItems;
}


// Single product
export const singleProductData=(state)=>{
    return state.products.singleProductItem;
}

// Category
export const categoryData=(state)=>{
    return state.products.categoryItems;
}

// Loading
export const productLoading=(state)=>{
    return state.products.loading
}
export default productSlice.reducer