import React from 'react'
import {useSelector} from "react-redux"
import MovieList from './MovieList';


const GptRecommendations = () => {


    const gpt = useSelector(store=>store.gpt);
    const {movieNames, movieObjects} = gpt;
    if (movieNames!==null){
        return (
            <div className='relative top-36 bg-black bg-opacity-85 w-5/6 mx-auto'>
                {movieNames.map((movie,index) => <MovieList key={index} title={movie} allMovies={movieObjects[index]}/> )}
            </div>
          )
    }
  
}

export default GptRecommendations
