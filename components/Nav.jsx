'use client'


import Link from "next/link"


import Image from "next/image";
import Navlinks from "./Navlinks";
import ShoppingCart from "./ShoppingCart";
import { useEffect, useState } from "react";


const Nav = () => {
  
  const [header, setHeader] = useState(false)

  const scrollHeader = () => {
    if(window.scrollY >= 20){
      setHeader(true)
    }else {
      setHeader(false)
    }
  }

  useEffect(()=>{
    window.addEventListener('scroll', scrollHeader)

    return ()=> {
      window.addEventListener('scroll', scrollHeader)
    }
  },[] )

  return (
    <div className={header ? " w-[100%] transition-all duration-500 lg:text-white fixed bg-[#e8e6e6] lg:bg-[#171617]" : "bg-transparent"}> 
     <div className="header">
     <nav className="flex flex-row justify-between lg:justify-center  items-center
   w-full py-1.5 px-4 gap-[2rem] md:gap-[11rem] lg:gap-[8rem] xl:gap-[23rem]">



      <div className="lg:hidden">
      <Navlinks />
      </div>
     

     <div >
      <Link href='/'>
     <Image src={'/logo.svg'} 
      width={170}
      height={100}
      alt="logo" />  
      </Link> 
       </div> 
      <div className="hidden lg:inline-flex mr-[7rem]
       font-lato text-[18px] font-medium flex-row gap-10">
      <Link
      href='/'>
       Home
       </Link>
       <Link href='/shop'>
       Shop
       </Link>
       <Link href='/about'>
       About Us
       </Link>
       <Link href='/contact'>
       Contact
       </Link>
       <Link href='/signin'>
       Sign In
       </Link>
      </div>

     
      
     <div className="flex flex-row gap-5">
     <div className="font-lato hidden">
      <Link  href='/shop'
      >
       Shop
       </Link>
      </div>
      <div className="font-lato lg:mr-6">
      <ShoppingCart />
      </div>
     </div>

     
        
     
      </nav>
     </div>
      
      

      
      </div>
  )
}

export default Nav