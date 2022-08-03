import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const name = ''
const API_URI  = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&cuisine=${name}`

const initialState = {
    cuisine:'' , 
    isLoading:false ,
    isSuccess :false , 
    isError : false , 
    message  : ''

}
export const getCuisine = createAsyncThunk('cusine/find' , async(data , thunkAPI)=>{
        try {
            const res = await axios.get(API_URI , data)
            const info =  res.data
            return info
        } catch (error) {
            const mss = (error.data  && error.response && error.response.data) || error.message || error.toString();
            return thunkAPI.rejectWithValue(mss)
        }
})

export const cuisineSlice =createSlice({
    name:'cuis' ,
    initialState ,
    reducers:{
        reset:(state)=>{
            state.cuisine ='' ; 
            state.isLoading =false ;
            state.isSuccess  =false ; 
            state.isError  = false ; 
            state.message   = ''
        }
    } ,
    extraReducers:(bilder)=>{
        bilder 
        .addCase(getCuisine.pending , (state)=>{
            state.isLoading = true
        })
        .addCase(getCuisine.fulfilled , (state , action)=>{
            state.isLoading = false 
            state.isSuccess = true 
            state.cuisine = action.payload
        })
        .addCase(getCuisine.rejected , (state , action)=>{
            state.isLoading = false
            state.isError = true 
            state.message = action.payload
        })
    }
    
})

export const {reset} = cuisineSlice.actions;
export default cuisineSlice.reducer; 