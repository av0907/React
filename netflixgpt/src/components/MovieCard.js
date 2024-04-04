import React from 'react'
import { SECONDARY_CONTAINER_IMG_PATH } from '../utils/constants'

function MovieCard({movie}) {
  return (
    
      <img className="w-48 mr-3 hover:scale-110 h-48 " src={SECONDARY_CONTAINER_IMG_PATH+ movie.poster_path} alt="movie_img"/>
   
  )
}

export default MovieCard
