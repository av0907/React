import React, { useState } from 'react'
import { auth } from '../utils/firebase';
import {signOut } from "firebase/auth";
import Header from './Header';
import useGetNowPlayingMovies from '../hooks/useGetNowPlayingMovies';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import useGetPopularMovies from '../hooks/useGetPopularMovies';
import useGetTopRatedMovies from '../hooks/useGetTopRatedMovies';
import GptSearchPage from './GptSearchPage';
import {useDispatch} from 'react-redux'
import { changeLanguage } from '../utils/configSlice';

const Browse = () => {

  const [searchPage, setSearchPage]= useState(false);
  const dispatch = useDispatch();

  useGetNowPlayingMovies();
  useGetPopularMovies();
  useGetTopRatedMovies();

  function userSignOut(){
    signOut(auth).then(() => {
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
    });
  }

  function showSearchPage(){
      setSearchPage(!searchPage);
  }
  function changeLang(e)
  {
    dispatch(changeLanguage(e.target.value))
  }

  return (
    <div className="flex-col">
      <div>
        <div>
          <Header/>
        </div>
        <div className="">
           {searchPage && <select onChange={changeLang} className="border-2 p-2 m-2 text-white bg-black font-semibold absolute left-[79%] z-40"> <option value="en">English</option> <option value="tel">Telugu</option> <option value="hin"> Hindi</option> </select>}
           <button onClick={showSearchPage} className="border-2 p-2 m-2 text-white bg-gradient-to-b from-black font-semibold absolute left-[86%] z-40">{searchPage? "Home Page" : "GPT Search"}</button>
           <button onClick={userSignOut} className="border-2 p-2 m-2 text-white bg-gradient-to-b from-black font-semibold absolute right-0 z-40">SignOut</button>
        </div>
      </div>
      {searchPage? <GptSearchPage/> : <><MainContainer/><SecondaryContainer/></>}

    </div>
    
  )
}

export default Browse
