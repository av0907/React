import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList';


const SecondaryContainer = () => {
  const movies = useSelector(store=>store?.movies?.nowPlayingMovies);
  const popularMovies = useSelector(store=> store.movies?.nowPopularMovies);
  const topRatedMovies = useSelector(store=> store.movies?.nowTopRatedMovies);

  //console.log("popularMovies")
 // console.log(popularMovies);
  return (
    <div className='bg-black '>
      <div className='-mt-64 relative z-40'>
        {movies && <MovieList title={"Now Playing >"} allMovies={movies}/>} </div>
        {popularMovies && <MovieList title={"Popular >"} allMovies={popularMovies}/>}
        {topRatedMovies && <MovieList title={"Top Rated >"} allMovies={topRatedMovies}/>}
        {movies && <MovieList title={"Documentaries >"} allMovies={movies}/>}
        {movies && <MovieList title={"Horror >"} allMovies={movies}/>}
        {movies && <MovieList title={"Comedy >"} allMovies={movies}/>}
        {movies && <MovieList title={"Action >"} allMovies={movies}/>}
        {movies && <MovieList title={"Drama >"} allMovies={movies}/>}
        {movies && <MovieList title={"Sci-Fi >"} allMovies={movies}/>}
        {movies && <MovieList title={"Patriotic >"} allMovies={movies}/>}
    </div>
  )
}

export default SecondaryContainer
