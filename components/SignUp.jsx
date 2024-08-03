'use client'

import Image from 'next/image'
import Link from "next/link"
import { useState } from "react"
import { useRouter } from "next/navigation"


const SignUp = () => {
 const [name, setName] = useState('')
 const [email, setEmail] = useState('')
 const [password, setPassword] = useState('')
 const [error, setError] = useState('')

 const router = useRouter();

const handleSubmit = async (e) => {
e.preventDefault();

if (!name || !email || !password) {
  setError("All fields are required.");
  return;
}

try {
const resUserExists = await fetch("api/userExists", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({ email }),
});

const { user } = await resUserExists.json();

if (user) {
  setError("User already exists.");
  return;
}


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
    router.push("signin")
  } else {
    console.log('User registration failed.');
  }

} catch (error) {
 console.log('Error during registration: ', error);
}


};



  return (
    <div>
    <div className='max-w-full h-screen overflow-hidden absolute'>
      <Image src={'/login4.png'}
      width={1700}
      height={500}
      priority
      alt=''
      className='xxl:w-[2200px] h-screen object-cover' />
      </div>
    <div className="h-screen py-[15rem] relative">
    <div className="flex justify-center">
    <div className="flex flex-col">
      <h5 className="text-3xl md:text-4xl font-semibold mb-[2rem] text-center">Sign Up</h5>
      <form 
      onSubmit={handleSubmit}
      className="grid place-content-center gap-4">

      <input onChange={(e) => setName(e.target.value)}
     
      type="text" placeholder="Full Name" className="border border-solid
  py-3 px-4 w-[345px] bg-transparent sm:w-[500px] lg:w-[420px] outline-none border-black/50
   text-lg placeholder:text-[#6b6a6a] placeholder:text-md"/>

      <input onChange={(e) => setEmail(e.target.value)}
      type="text" placeholder="Email" className="border border-solid
  py-3 px-4 w-[345px] bg-transparent sm:w-[500px] lg:w-[420px] outline-none border-black/50
   text-lg placeholder:text-[#6b6a6a] placeholder:text-md"/>
      <input onChange={(e) => setPassword(e.target.value)}
      type="password" placeholder="Password" className="border border-solid
  py-3 px-4 w-[345px] bg-transparent sm:w-[500px] lg:w-[420px] outline-none border-black/50
   text-lg placeholder:text-[#6b6a6a] placeholder:text-md"/>

<button className="bg-black mt-[2rem]
  px-3 py-3 border border-xl text-white border-black text-[20px]
  hover:bg-transparent hover:text-black">Sign Up</button>

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
  </div>

  )

}

export default SignUp