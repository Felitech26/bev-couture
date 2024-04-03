'use client'

import Link from "next/link"
import { useState } from "react"


const SignUp = () => {
 const [name, setName] = useState('')
 const [email, setEmail] = useState('')
 const [password, setPassword] = useState('')
 const [error, setError] = useState('')

const handleSubmit = async (e) => {
e.preventDefault();

if (!name || !email || !password) {
  setError("All fields are required.");
  return;
}

try {
 const res = await fetch('api/signup', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      name, email, password
    }),
  });

  if (res.ok) {
    const form = e.target;
    form.reset();
  } else {
    console.log('User registration failed.');
  }

} catch (error) {
 console.log('Error during registration: ', error);
}


};



  return (
    <div className="h-screen py-[10rem]">
    <div className="flex justify-center">
    <div className="flex flex-col">
      <h5 className="text-4xl font-semibold mb-5">Sign Up</h5>
      <form 
      onSubmit={handleSubmit}
      className="grid place-content-center gap-4">

      <input onChange={(e) => setName(e.target.value)}
     
      type="text" placeholder="Full Name" className="border border-solid
  py-3 px-4 w-[345px] sm:w-[500px] lg:w-[420px] outline-none border-black/50
   text-lg placeholder:text-[#6b6a6a] placeholder:text-md"/>

      <input onChange={(e) => setEmail(e.target.value)}
      type="text" placeholder="Email" className="border border-solid
  py-3 px-4 w-[345px] sm:w-[500px] lg:w-[420px] outline-none border-black/50
   text-lg placeholder:text-[#6b6a6a] placeholder:text-md"/>
      <input onChange={(e) => setPassword(e.target.value)}
      type="password" placeholder="Password" className="border border-solid
  py-3 px-4 w-[345px] sm:w-[500px] lg:w-[420px] outline-none border-black/50
   text-lg placeholder:text-[#6b6a6a] placeholder:text-md"/>

<button className="bg-black mt-[2rem]
  px-3 py-3 border border-xl text-white border-black text-[20px]
  hover:bg-white hover:text-black">Sign Up</button>

  { error && (
    <div className="border border-solid w-fit text-md
    py-2 px-3 rounded-sm">{error}</div>
  )
    
  }

<div className="mt-3 flex justify-center gap-2">   
  <h5 className="text-lg font-medium">
 Already have account?
  </h5>

  <Link href='/signin'>
     <h5 className="text-lg font-medium">Login</h5>
  </Link>
    </div>

      </form>


    
    </div>
    </div>
   
  </div>

  )

}

export default SignUp