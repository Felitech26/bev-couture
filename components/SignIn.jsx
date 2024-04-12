'use client';

import React from "react"
import { useState } from "react"
import { signIn } from "next-auth/react";
import Link from "next/link";
import { useRouter  } from "next/navigation";



const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState(''); 
  const [error, setError] = useState('');

  const router = useRouter();

  const handleSubmit = async (e) =>  {
   e.prevenDefault();

   try {
  const res =  await signIn("credentials", {
      email,
      password,
      redirect: false
    });

    if (res.error) {
      setError("Invalid Credentials");
      return;
    }

    router.replace("http://localhost:3000/")
   } catch (error) {
    console.log(error);
   }
  }

  return (
    <div className="h-screen py-[10rem]">
    <div className="flex justify-center">
    <div className="flex flex-col">
      <h5 className="text-4xl font-semibold mb-5">Sign In</h5>
      <form onSubmit={handleSubmit} 
       className="grid place-content-center gap-4">
      <input onChange={(e) => setEmail(e.target.value)}
      type="text" placeholder="Email" className="border border-solid
  py-3 px-4 w-[345px] sm:w-[500px] lg:w-[420px] outline-none border-black/50
   text-lg placeholder:text-[#6b6a6a] placeholder:text-md"/>
      <input  onChange={(e) => setPassword(e.target.value)}
      type="password" placeholder="Password" className="border border-solid
  py-3 px-4 w-[345px] sm:w-[500px] lg:w-[420px] outline-none border-black/50
   text-lg placeholder:text-[#6b6a6a] placeholder:text-md"/>

<button className="bg-black mt-[2rem]
  px-3 py-3 border border-xl text-white border-black text-[20px]
  hover:bg-white hover:text-black">Sign In</button>
 {error && (
  <div className="border border-solid w-fit text-sm 
   py-2 px-3 rounded-sm">{error}</div>
 )}
  

<div className="mt-3 flex justify-center gap-2">   
  <h5 className="text-lg font-medium">
  New customer?
  </h5>

  <Link href='/signup'>
     <h5 className="text-lg font-medium">Create New Account</h5>
  </Link>
    </div>

      </form>



  
    </div>
    </div>
   
  </div>

  )
}

export default SignIn