import React, { useEffect, useState } from 'react'
import { API_OPTIONS } from '../utils/constants'

const VideoBackground = ({movie_id}) => {

  const [trailer_key, setTrailer_key] = useState({});

  const getMovieVideos = async (movie_id)=>{

  const data = await fetch('https://api.themoviedb.org/3/movie/'+ movie_id +'/videos?', API_OPTIONS)
  const json = await data.json();

  let filter_trailers = json.results.filter(video=> video.type==="Trailer")
  let trailer = filter_trailers.length ? filter_trailers[1] : json.results[0];
  setTrailer_key(trailer?.key)
  
}

  useEffect(()=>{
    getMovieVideos(movie_id)
    
  },[])


  return (
    <div className=' aspect-video overflow-hidden relative'>
      <iframe className="w-screen aspect-video" src={"https://www.youtube.com/embed/"+trailer_key+"?loop=1&autoplay=1&mute=1&controls=0"}  title="Youtube Video" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
     
    </div>
  )
}

export default VideoBackground;
