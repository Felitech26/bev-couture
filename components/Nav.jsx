'use client'


import Link from "next/link"

import { MdMailOutline } from "react-icons/md";
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
    <div className={header ? " w-[100%] fixed bg-[#ddd9dd]" : "bg-transparent"}> 
     <div className="header">
     <div className="hidden bg-black text-[#d2d0d0] py-3 font-lato w-full lg:inline-flex flex-row justify-center 
      items-center gap-[20rem] text-[15px]">
      <Link href='/' className="">
      Free UK Delivery on all orders above £130
      </Link>
     <a className="flex flex-row justify-center items-center gap-2" 
     href="mailto:Uniteddevelopment83@gmail.com">
       <MdMailOutline className="flex text-center"/>
      info@bevcouture.com
     </a>
      </div>
     <nav className="flex flex-row justify-between lg:justify-center items-center
   w-full py-3 px-3 gap-[2rem] md:gap-[11rem] lg:gap-[15rem] xl:gap-[23rem]">



      <div className="lg:hidden">
      <Navlinks />
      </div>
     

     <div>
      <Link href='/'>
     <Image src={'/logo.svg'} 
      width={140}
      height={90}
      alt="logo" />  
      </Link> 
       </div> 
      <div className="hidden lg:inline-flex
       font-lato flex-row gap-10">
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
      </div>

      <div className="text-sm font-lato lg:hidden">
      <Link  href='/shop'
      >
       Shop
       </Link>
      </div>
      
     

      <div className="font-lato">
      <ShoppingCart />
      </div>
        
     
      </nav>
     </div>
      
      

      
      </div>
  )
}

export default Nav