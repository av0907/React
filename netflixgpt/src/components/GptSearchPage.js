import React, { useRef } from 'react'
import { API_OPTIONS, LOGIN_PAGE_BG_IMAGE } from '../utils/constants'
import { languageConstants } from '../utils/languageConstants'
import {useSelector} from 'react-redux'
import openai from "../utils/openai"
import {useDispatch} from "react-redux"
import { addGptRecommendedMovies } from '../utils/gptSlice'
import GptRecommendations from './GptRecommendations'

const GptSearchPage = () => {
    const choosenLanguage  = useSelector(store=> store.config.lang)
    const searchText = useRef(null);
    const dispatch = useDispatch();
    let moviesArray =[];

    const showMovieTmdb = async (movie_name) =>{

      const data = await fetch("https://api.themoviedb.org/3/search/movie?query="+movie_name+"&include_adult=false&language=en-US&page=1",API_OPTIONS);
      const json = await data.json();
      return json.results;
    }

    const showGptRecommendations= async()=>{
          console.log(searchText.current.value);
          const gptQuery = "Act as a movie recommendation system and please give me 10 movie suggestions with comma seperations for the query ahead."+ searchText.current.value+"Please give the movies as comma seperated values. Eg:Movie1, Movie2, Movie3, Movie4. The output type should not be as follows: 1. \"Krack\"\n2. \"Khiladi\"\n3. \"Amar Akbar Anthony\"\n4. \"Power\"\n5. \"Kick\"\n6. \"Balupu\"\n7. \"Neninthe\"\n8. \"Mirapakay\"\n9. \"Vikramarkudu\"\n10. \"Venky\". Here i want the output only the movie names and also i dont need the index numbers also. No need of any other extra characters.";
            
          const gptResults = await openai.chat.completions.create({
            messages: [{ role: 'user', content: gptQuery}],
            model: 'gpt-3.5-turbo',
          });
          console.log(gptResults.choices[0]?.message?.content);

           moviesArray = gptResults.choices[0]?.message?.content.split(",")
          console.log(moviesArray)
          const moviesPromiseArray = moviesArray.map(movie=> showMovieTmdb(movie))
          const tmdbResults =  await Promise.all(moviesPromiseArray);
          console.log(tmdbResults);
          dispatch(addGptRecommendedMovies({movieNames: moviesArray, movieObjects:tmdbResults}))

    }



  return (
    <div className="">
      <img src={LOGIN_PAGE_BG_IMAGE} alt="LOGIN_PAGE_PG_IMG" className='fixed h-screen w-screen -z-20 ' />
      <form className='relative top-20 w-5/5 text-center' onSubmit={(e)=>e.preventDefault()}>
        <input ref={searchText} type="text" placeholder={languageConstants[choosenLanguage].gptSearchBarPlaceHolder} className='p-4 w-2/5 rounded-3xl shadow-2xl'/>
        <button className='p-4 m-2 w-1/12 bg-red-600 text-white font-bold rounded-3xl shadow-2xl' onClick={showGptRecommendations}>{languageConstants[choosenLanguage].search}</button>
      </form>

      { moviesArray.length===0 ? <GptRecommendations/> : ""}
      
    </div>

  )
}

export default GptSearchPage
