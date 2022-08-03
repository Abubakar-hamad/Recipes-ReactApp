import { configureStore } from "@reduxjs/toolkit";
import RecipesReducer  from "./slices/recipesSlice";
import cuisReducer from "./slices/complexSlice";
const store = configureStore({
    reducer:{
        recip:RecipesReducer ,
        cuis:cuisReducer ,
    }
})

export default store