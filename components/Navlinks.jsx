'use client'
 import Link from 'next/link'
import { useState } from 'react'
import { RxPerson } from "react-icons/rx"; 
import { AnimatePresence } from 'framer-motion';
import NavAnimate from './NavAnimate';
import Image from "next/image";
import ShoppingCart from "./ShoppingCart";



const Navlinks = () => {
 
  const [navActive, setNavActive] = useState(false);
  return (
    
    <div className='flex justify-between items-center gap-[5rem] md:gap-[11rem]'>
   <div onClick={() => setNavActive(!navActive)} className='flex justify-between items-center '>
   <div> 
        <div  className='w-6 h-5 text-accent 
        lg:hidden relative flex items-center justify-center z-[50] outline-none'>
        <span className={`w-full h-[2px] bg-accent absolute left-0 will-change-transform
        transition-transform duration-300 ${navActive ? 'top-1/2 rotate-45' : 'top-0 translate-y-0'}`}>
        </span>
        <span className={`w-full h-[1.5px] bg-accent absolute left-0 
        transition-opacity duration-300 ${navActive ? 'opacity-0' : 'top-1/2'}`}> 
        </span>
        <span className={`w-full h-[1.5px] bg-accent absolute left-0 will-change-transform
        transition-transform duration-300 ${navActive ? 'top-1/2 -rotate-45' : 'bottom-0 translate-y-0'}`}> 
        </span>
      </div>


    
    </div>
    <AnimatePresence mode='wait'>
{navActive && <NavAnimate />} 
  </AnimatePresence>
    </div>

   
    <div >
      <Link href='/'>
     <Image src={'/logo.svg'} 
      width={170}
      height={100}
      alt="logo"/>  
      </Link> 
       </div>
    <div>
    <ShoppingCart  />
    </div>

    </div>
    
         
  
  )
}

export default Navlinks