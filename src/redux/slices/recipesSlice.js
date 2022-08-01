import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


const initialState = {
    recipes:'' ,
    isLoading:false , 
    isSuccess:false ,
    isError : false ,
    message : false
}

export const GetRecipes = createAsyncThunk( 'get/recipes' , async(recipes , thunkAPI)=>{
        try {
           const res = await axios.get('' , recipes)
           console.log(res.data);
           return res.data 
        } catch (error) {
            const message = (error.data && error.response && error.response.data.message ) || error.message || error.toString()
            return thunkAPI.rejectWithValue(message)
        }
})