import React from 'react'
import { useSelector } from 'react-redux'
import VideoTitle from "./VideoTitle"
import VideoBackground from './VideoBackground';

const MainContainer = () => {

    const movies = useSelector(store=>store.movies?.nowPlayingMovies);
    //console.log(movies)
    if(movies===null) return;
    const mainMovie = movies[1]
    console.log(mainMovie);

    const {original_title,overview, id} = mainMovie;
  return (
    <div className="">
      <VideoTitle title={original_title} description={overview} />
      <VideoBackground movie_id={id}/>
    </div>
  )
}

export default MainContainer
