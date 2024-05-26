import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name:"movies",
    initialState:{
        nowPlayingMovies:null,
        nowPlayingTrailer:null,
        nowPopularMovies:null,
        nowTopRatedMovies:null
    },
    reducers:{
        addNowPlayingMovies:(state,action)=>{
            state.nowPlayingMovies=action.payload
        },
        addPopularMovies:(state,action)=>{
            state.nowPopularMovies=action.payload;
        },
        addTopRatedMovies:(state, action)=>{
            state.nowTopRatedMovies=action.payload;
        },
       addMovieTrailer: (state,action)=>{
            state.nowPlayingTrailer=action.payload
        }
    }
})

export default moviesSlice.reducer;

export const {addNowPlayingMovies, addMovieTrailer,addPopularMovies,addTopRatedMovies} = moviesSlice.actions;