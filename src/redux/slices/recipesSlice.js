import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


const Recipes =JSON.parse(localStorage.getItem('randomRecipes') )
const Veggi = JSON.parse(localStorage.getItem('veggi') )
const Dessert = JSON.parse(localStorage.getItem('dessert'))
const API_URI = `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=10` 

const initialState = {

    recipes: Recipes ? Recipes :'',  
    veggi : Veggi ? Veggi : '' ,
    dessert : Dessert ? Dessert : '' ,
    isLoading:false , 
    isSuccess:false ,
    isError : false ,
    message : false
}

export const GetRecipes = createAsyncThunk( 'recip/random' , async(data , thunkAPI)=>{
        try {
           const res = await axios.get(API_URI , data)
           const info  = res.data.recipes
           localStorage.setItem('randomRecipes' , JSON.stringify(info))
           return info
        } catch (error) {
            const message = (error.data && error.response && error.response.data.message ) || error.message || error.toString()
            return thunkAPI.rejectWithValue(message)
        }
})

export const getVeggi = createAsyncThunk('recip/veggi' , async(data , thunkAPI)=>{
    try {
        const res = await axios.get(`${API_URI}&tags=vegetarian` , data)
        const info = res.data.recipes
        localStorage.setItem('veggi' , JSON.stringify(info))
        return info
    } catch (error) {
        const message = (error.data && error.response && error.response.data.message ) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)   
    }
})

export const getDessert = createAsyncThunk('recipe/dessert' , async(data , thunkAPI)=>{
    try {
        const res = await axios.get(`${API_URI}&tags=dessert`)
        const info = res.data.recipes
        return info
    } catch (error) {
       const message = (error.data && error.response && error.response.data && error.response.data.message) || error.message || error.toString()
       return thunkAPI.rejectWithValue(message)     
    }
})

export const RecipesSlice = createSlice({
    name:'recip' , 
    initialState ,
    reducers :{
        reset:(state)=>{
            state.recipes  = '' ;
            state.isLoading = false ;
            state.isSuccess = false ;
            state.isError = false ;
            state.message = '' ;
        }
    } , 
    extraReducers:(builder)=>{
        builder 
        .addCase(GetRecipes.pending , (state)=>{
            state.isLoading = true
        })

        .addCase(GetRecipes.fulfilled , (state , action)=>{
            state.isLoading = false ;
            state.isSuccess = true ;
            state.recipes = action.payload
        })
        .addCase(GetRecipes.rejected , (state ,action)=>{
            state.isLoading = false ;
            state.error = true ;
            state.message = action.payload
        })


        // veggi

        .addCase(getVeggi.pending , (state)=>{
            state.isLoading = true
        })

        .addCase(getVeggi.fulfilled , (state , action)=>{
            state.isLoading = false ;
            state.isSuccess = true ;
            state.veggi = action.payload
        })
        .addCase(getVeggi.rejected , (state ,action)=>{
            state.isLoading = false ;
            state.error = true ;
            state.message = action.payload
        })

        // dess
        .addCase(getDessert.pending , (state)=>{
            state.isLoading = true
        })

        .addCase(getDessert.fulfilled , (state , action)=>{
            state.isLoading = false ;
            state.isSuccess = true ;
            state.dessert = action.payload
        })
        .addCase(getDessert.rejected , (state ,action)=>{
            state.isLoading = false ;
            state.error = true ;
            state.message = action.payload
        })
    }
})


export const {reset} = RecipesSlice.actions
export default RecipesSlice.reducer