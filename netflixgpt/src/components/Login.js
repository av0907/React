import React, { useState } from 'react'
import Header from './Header'

const Login = () => {

  const [isSignIn, setIsSignIn] = useState(1);
  function toggleSignIn(){
    setIsSignIn(!isSignIn);
  }

  return (
    <div>
      <Header/>
      <img className="absolute h-screen w-screen" src="https://assets.nflxext.com/ffe/siteui/vlv3/9d3533b2-0e2b-40b2-95e0-ecd7979cc88b/1c01ae52-0a90-41c5-a3ab-2736447a92ed/US-en-20240311-popsignuptwoweeks-perspective_alpha_website_large.jpg" alt="BackgroundImage"/>
      {isSignIn && <form className=" p-4 h-[52%] w-1/4 bg-black bg-opacity-80 absolute my-36 mx-auto right-0 left-0 text-white">
          <h2 className="text-3xl p-2 font-semibold">Sign In</h2>
          <input type="text" placeholder="Email Address" className="block p-3 w-[95%] m-auto my-6 rounded-lg bg-gray-700"/>
          <input type="text" placeholder="Password" className="block p-3 w-[95%] m-auto my-6 rounded-lg bg-gray-700"/>
          <button type="submit" className="p-3 m-auto my-6 w-[95%] bg-red-700 block text-lg font-semibold rounded-lg">Sign In</button>
          <p className="p-3 m-auto my-6 w-[95%] cursor-pointer block text-md" onClick={toggleSignIn}>New to Netflix? SignUp now</p>
          
      </form>}

      {!isSignIn && <form className=" p-4 h-[65%] w-1/4 bg-black bg-opacity-80 absolute my-36 mx-auto right-0 left-0 text-white">
          <h2 className="text-3xl p-2 font-semibold">Sign Up</h2>
          <input type="text" placeholder="Your Name" className="block p-3 w-[95%] m-auto my-6 rounded-lg bg-gray-700"/>
          <input type="text" placeholder="Email Address" className="block p-3 w-[95%] m-auto my-6 rounded-lg bg-gray-700"/>
          <input type="text" placeholder="Password" className="block p-3 w-[95%] m-auto my-6 rounded-lg bg-gray-700"/>
          <button type="submit" className="p-3 m-auto my-6 w-[95%] bg-red-700 block text-lg font-semibold rounded-lg">Sign Up</button>
          <p className="p-3 m-auto my-6 w-[95%] cursor-pointer block text-md" onClick={toggleSignIn}>Already an User? Sign In Now</p>
          
      </form>}

    </div>
  )
}

export default Login
