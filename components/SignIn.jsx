'use client';

import React from "react"
import { useState } from "react"

import Link from "next/link";



const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className="h-screen py-[10rem]">
    <div className="flex justify-center">
    <div className="flex flex-col">
      <h5 className="text-4xl font-semibold mb-5">Sign In</h5>
      <div className="flex flex-col gap-4">
      <input 
      id="email"
      type="email"
      label="Email"
      placeholder="Email" className="border border-solid
  py-3 px-4 w-[345px] sm:w-[500px] lg:w-[420px] outline-none border-black/50
   text-lg placeholder:text-[#6b6a6a] placeholder:text-md"/>
      <input 
      id="password"
      type="password"
      label="Password"
      placeholder="Email" className="border border-solid
  py-3 px-4 w-[345px] sm:w-[500px] lg:w-[420px] outline-none border-black/50
   text-lg placeholder:text-[#6b6a6a] placeholder:text-md"/>

      </div>

      <button className="bg-black mt-[3rem]
  px-3 py-3 border border-xl text-white border-black text-[20px]
  hover:bg-white hover:text-black">Sign In</button>

    <div className="mt-5 flex gap-2">   
  <h5 className="text-lg font-medium">
  New customer?
  </h5>

  <Link href='/signup'>
     <h5 className="text-lg font-medium">Create New Account</h5>
  </Link>
    </div>
    </div>
    </div>
   
  </div>

  )
}

export default SignIn