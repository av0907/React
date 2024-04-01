import React, { useRef, useState } from 'react'
import Header from './Header'
import { FormValidation } from '../utils/FormValidation';
import { auth } from '../utils/firebase';
import {createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from 'react-router-dom';

const Login = () => {

  const navigate = useNavigate();
  const [isSignUp, setIsSignUp] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);


  const email = useRef();
  const password = useRef();
  const username = useRef();

  function toggleSignIn(){
    setIsSignUp(!isSignUp);
  }

  function userValidation(){
    //const result = FormValidation(username.current.value,email.current.value,password.current.value)
    const result = FormValidation(email.current.value,password.current.value)
    setErrorMessage(result)
    //console.log(email,password)
    if (errorMessage) return

    if(isSignUp){
        //Sign Up form
        createUserWithEmailAndPassword(auth, email.current.value,password.current.value)
        .then((userCredential) => {
          })
        .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrorMessage(errorCode+-+errorMessage)
        });
      }

    if(!isSignUp){
      signInWithEmailAndPassword(auth, email.current.value,password.current.value)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        setErrorMessage("Successfully Logged In");
        navigate("/browse")
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrorMessage(errorCode+-+errorMessage);
      });
    }
  }

  return (
    <div>
      <Header/>
      <img className="absolute h-screen w-screen" src="https://assets.nflxext.com/ffe/siteui/vlv3/9d3533b2-0e2b-40b2-95e0-ecd7979cc88b/1c01ae52-0a90-41c5-a3ab-2736447a92ed/US-en-20240311-popsignuptwoweeks-perspective_alpha_website_large.jpg" alt="BackgroundImage"/>
       <form onSubmit={(e)=>e.preventDefault()} className=" p-4 h-auto w-1/4 bg-black bg-opacity-80 absolute my-36 mx-auto right-0 left-0 text-white">
          <h2 className="text-3xl p-2 font-semibold">  {isSignUp? "Sign Up" : "Sign In"}</h2>
          <input ref={email} type="text" placeholder="Email Address" className="block p-3 w-[95%] m-auto my-6 rounded-lg bg-gray-700"/>
          <input ref={password} type="password" placeholder="Password" className="block p-3 w-[95%] m-auto my-6 rounded-lg bg-gray-700"/>
          <p className="pl-3 text-md text-red-700 font-semibold ">{errorMessage}</p>
          <button type="submit" className="p-3 m-auto my-6 w-[95%] bg-red-700 block text-lg font-semibold rounded-lg" onClick={userValidation}>{isSignUp? "Sign Up": "Sign In"}</button>
          <p className="p-3 m-auto my-6 w-[95%] cursor-pointer block text-md" onClick={toggleSignIn}> {isSignUp? "Already an User? Sign In Now": "New to Netflix? SignUp now"} </p>
          
      </form>

      

    </div>
  )
}

export default Login
