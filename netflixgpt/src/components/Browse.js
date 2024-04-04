import React from 'react'
import { auth } from '../utils/firebase';
import {signOut } from "firebase/auth";
import Header from './Header';
import useGetNowPlayingMovies from '../hooks/useGetNowPlayingMovies';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import useGetPopularMovies from '../hooks/useGetPopularMovies';
import useGetTopRatedMovies from '../hooks/useGetTopRatedMovies';
const Browse = () => {

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


  return (
    <div className="flex-col">
      <div>
        <div>
          <Header/>
        </div>
        <div className="">
           <button onClick={userSignOut} className="border-2 p-2 m-2 text-white bg-gradient-to-b from-black font-semibold absolute right-0 z-40">SignOut</button>
        </div>
      </div>
      <MainContainer/>
      <SecondaryContainer/>

    </div>
    
  )
}

export default Browse
