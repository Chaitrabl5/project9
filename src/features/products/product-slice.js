import { createSlice,createAsyncThunk } from "@reduxjs/toolkit"
import HttpClient from "../../apiclient/httpclient"

export const getProducts=createAsyncThunk('products/getProducts',
async () => {

    const response=await HttpClient.getProducts()
    return response.data
})
const productSlice=createSlice({
    name:'products',
    initialState:{
    products:[],
    },
extraReducers:{
 [getProducts.fulfilled]:(state,action)=>{
    state.products=[...action.payload]
 }
},
})

export const productActions=productSlice.actions
export default productSlice.reducer