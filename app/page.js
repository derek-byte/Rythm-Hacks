"use client"

import Image from 'next/image'
import SignUp from './auth/sign-up/page'
import React, { useState } from 'react';
import SignIn from './auth/sign-in/page';

export default function Home() {
  const [isLogin, setIsLogin] = useState(false);

  const handleChange = () => {
    setIsLogin(!isLogin);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between px-16 pt-32 lg:pt-16">
      <div className="mb-24 grid w-full lg:mb-10 lg:text-left">
        { isLogin ? 
          <div>
            <SignUp/>
            <div>Already have an account? <span className="text-blue-600/100 cursor-pointer" onClick={handleChange}>Login</span></div> 
          </div> :
          <div>
            <SignIn/>
            <div>Don't have an account? <span className="text-blue-600/100 cursor-pointer" onClick={handleChange}>Sign Up</span></div> 
          </div> }
      </div>
    </main>
  )
}
