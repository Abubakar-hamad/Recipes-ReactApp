import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";






const API_URI  = `https://api.spoonacular.com/recipes/`

// const API_GET_URI = `https://api.spoonacular.com/recipes/${id}/information`

const initialState = {
    cuisine:'' , 
    cuisineDetail:'' , 
    isLoading:false ,
    isSuccess :false , 
    isError : false , 
    message  : ''

}
export const getCuisine = createAsyncThunk('cuisine/get' , async(payload , data ,  thunkAPI )=>{
        try {
            const res = await axios.get(`${API_URI}complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&number=12&cuisine=${payload} `, data)
            const info =  res.data.results
            localStorage.setItem(`${payload}` , JSON.stringify(info))
            return info
        } catch (error) {
            const mss = (error.data  && error.response && error.response.data) || error.message || error.toString();
            return thunkAPI.rejectWithValue(mss)
        }
})

export const getDetails = createAsyncThunk('cuisine/detail', async(payload , data , thunkAPI)=>{
    try {
        const res = await axios.get(`${API_URI}${payload}/information?apiKey=${process.env.REACT_APP_API_KEY}` , data)
        console.log(res.data);
        
        return res.data
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

        // details

        .addCase(getDetails.pending , (state)=>{
            state.isLoading = true
        })
        .addCase(getDetails.fulfilled , (state , action)=>{
            state.isLoading = false 
            state.isSuccess = true 
            state.cuisineDetail = action.payload
        })
        .addCase(getDetails.rejected , (state , action)=>{
            state.isLoading = false
            state.isError = true 
            state.message = action.payload
        })
    }
    
})

export const {reset } = cuisineSlice.actions;
export default cuisineSlice.reducer; 