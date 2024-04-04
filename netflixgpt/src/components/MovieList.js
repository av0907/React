import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({title,allMovies}) => {
  return (
    
    <div className="flex-col  p-3 text-white">

        <div className='text-2xl font-bold py-3 '>{title}  </div>

        <div className="flex overflow-x-scroll hide-scrollbar" >
            {allMovies.map(item=><MovieCard key={item.id} movie={item} />)}
        </div>
    </div>
    
  )
}

export default MovieList
