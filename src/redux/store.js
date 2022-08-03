import { configureStore } from "@reduxjs/toolkit";
import cuisinReducer from "./slices/complexSlice";
import RecipesReducer  from "./slices/recipesSlice";

const store = configureStore({
    reducer:{
        recip:RecipesReducer , 
        cuis:cuisinReducer ,
    }
})

export default store