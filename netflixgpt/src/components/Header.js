import { onAuthStateChanged } from 'firebase/auth';
import React from 'react'
import { addUser, removeUser } from '../utils/userSlice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { auth } from '../utils/firebase';
import {LOGO_URL} from "../utils/constants"

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const {uid, email, displayName} = user;
        dispatch(addUser({userid: uid, emailAddress: email, name: displayName}))
        navigate("/browse")
        // ...
      } else {
        // User is signed out
        // ...
        dispatch(removeUser())
        navigate("/")
      }
    });
  },[])


  return (
    <div className="absolute z-50 w-[94%] bg-gradient-to-b from-black">
      <img  className="w-1/12 h-16 bg-gradient-to-b from-black pt-2" src={LOGO_URL} alt="Logo"/>
    </div>
  )
}

export default Header
