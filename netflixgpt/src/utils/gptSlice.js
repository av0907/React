import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name:"gpt",
    initialState:{
        movieNames:null,
        movieObjects:null
    },
    reducers:{
        addGptRecommendedMovies: (state,action)=>{

            const {movieNames, movieObjects} = action.payload;
            state.movieNames = movieNames
            state.movieObjects= movieObjects
        }
    }
});

export default gptSlice.reducer;

export const {addGptRecommendedMovies} = gptSlice.actions;