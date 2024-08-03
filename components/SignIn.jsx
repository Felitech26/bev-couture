'use client';

import Image from 'next/image'
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

    router.replace("")
   } catch (error) {
    console.log(error);
   }
  }

  return (
    <div>
      <div className='max-w-full h-screen overflow-hidden absolute'>
      <Image src={'/login4.png'}
      width={1700}
      height={500}
      priority
      alt=''
      className='xxl:w-[2200px] h-screen object-cover ' />
      </div>
    <div className="h-screen py-[15rem] relative">
    <div className="flex justify-center">
    <div className="flex flex-col">
      <h5 className="text-3xl md:text-4xl font-semibold mb-[2rem] text-center">Sign In</h5>
      <form onSubmit={handleSubmit} 
       className="grid place-content-center gap-4">
      <input onChange={(e) => setEmail(e.target.value)}
      type="text" placeholder="Email" className="border border-solid
  py-3 px-4 w-[345px] sm:w-[500px] bg-transparent lg:w-[420px] outline-none border-black/50
   text-lg placeholder:text-[#6b6a6a] placeholder:text-md"/>
      <input  onChange={(e) => setPassword(e.target.value)}
      type="password" placeholder="Password" className="border border-solid
  py-3 px-4 w-[345px] sm:w-[500px] bg-transparent lg:w-[420px] outline-none border-black/50
   text-lg placeholder:text-[#6b6a6a] placeholder:text-md"/>

<button className="bg-black mt-[2rem]
  px-3 py-3 border border-xl text-white border-black text-[20px]
  hover:bg-transparent hover:text-black">Sign In</button>
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
  </div>

  )
}

export default SignIn