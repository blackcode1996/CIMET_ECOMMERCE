import {  createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


export const fetchCurrencyData=createAsyncThunk(
    'currencyConvertor/fetchCurrencyData',
    async(currency)=>{
        const res=await axios(`https://v6.exchangerate-api.com/v6/7f239aeb5d43c5b7ae4a7e43/latest/USD`)
        let conversionRateObj=res.data.conversion_rates
        console.log(conversionRateObj,"currencyConvertor")
        for(let j in conversionRateObj){
            if(j===currency){
                const conversionRate = conversionRateObj[j];
                return {conversionRate:conversionRate,currencyObj:conversionRateObj}
            }
        }
    }
)

const currencySlice=createSlice({
    name:"currencyConvertor",
    initialState:{
    conversionRate:1,
    currencyObj:{},
    loading:false,
    error:null
    },
    extraReducers: (builder) => {
        builder.addCase(fetchCurrencyData.pending, (state) => {
          state.loading = true
        })
        builder.addCase(fetchCurrencyData.fulfilled, (state, action) => {
          state.loading = false
          console.log(action.payload,"payload")
          state.conversionRate = action.payload.conversionRate
          state.currencyObj=action.payload.currencyObj
        })
        builder.addCase(fetchCurrencyData.rejected, (state, action) => {
          state.loading = false
          state.error = action.error.message
        })
    }
})

export const currencyConvertedData=(state)=>{
    return state.currencyConvertor.conversionRate
}
export const currencyData=(state)=>{
    return state.currencyConvertor.currencyObj
}

export default currencySlice.reducer