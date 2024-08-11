import React from 'react'
import Header from './Header';
import { useState } from 'react';

const Login = () => {
  const [isSignInForm,setIsSignForm]=useState(true);
  const toogleSignIn=()=>{
setIsSignForm(!isSignInForm);
  };
  return (
    <div >
<Header/>
<div  className='absolute'>
<img   src='https://assets.nflxext.com/ffe/siteui/vlv3/b2c3e95b-b7b5-4bb7-a883-f4bfc7472fb7/19fc1a4c-82db-4481-ad08-3a1dffbb8c39/IN-en-20240805-POP_SIGNUP_TWO_WEEKS-perspective_WEB_24a485f6-1820-42be-9b60-1b066f1eb869_large.jpg' alt='piche' />
      
</div>
<form className='w-3/12  absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80'>
<h1 className='font-bold text-3xl text-white py-4 ' >{isSignInForm===true?"Sign In":"Sign Up"}</h1>
{!isSignInForm&&<input type="text" placeholder="Full Name" class=" p-2 my-2 w-full bg-gray-700 "/>}
  <input type="text" placeholder="Email Address" class=" p-2 my-2 w-full bg-gray-700 "/>
  <input type="password" placeholder="Password" class=" p-2 my-2 w-full bg-gray-700 "/>
<button className="py-3 my-4 bg-red-700 w-full rounded-lg">{isSignInForm===true?"Sign In":"Sign Up"}</button>
<p className='py-4 cursor-pointer' onClick={toogleSignIn}>  {isSignInForm===true?"New to Netflix ? Sign Up":" Already Registerd ? Sign In Now"}</p>
</form>
    </div>
  ) 
}

export default Login;