import React from 'react'
import { auth } from '../utils/firebase';
import {signOut } from "firebase/auth";
import Header from './Header';

const Browse = () => {
 
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
        <Header/>
      </div>
    <div className="">
      <button onClick={userSignOut} className="border-2 p-2 m-2 text-white bg-gradient-to-b from-black font-semibold absolute right-0">SignOut</button>
    </div>

    </div>
    
  )
}

export default Browse
