'use client'
 import Link from 'next/link'
import { useState } from 'react'
import { MdOutlineClose } from 'react-icons/md'
import { RxPerson } from "react-icons/rx";



const Navlinks = () => {
  
  const [showMenu, setShowMenu] = useState(false)
  return (
    
        <div onClick={() => setShowMenu(!showMenu)}  
        className='flex w-7 h-4 flex-col justify-between items-center font-cormomorantGaramond
        mdl:hidden text-4xl text-black cursor-pointer overflow-hidden group
        '>
        <span className='w-full h-[2px] bg-black inline-flex transform 
        group-hover:bg-accent
        group-hover:translate-x-2 transition-all ease-in-out duration-300'></span>
        <span className='w-full h-[2px] bg-black inline-flex transform 
        group-hover:bg-accent
        translate-x-2 group-hover:translate-x-0 transition-all ease-out duration-300'></span>
        <span className="w-full h-[2px] bg-black inline-flex transform
        group-hover:bg-accent
          translate-x-1 group-hover:translate-x-3 transition-all ease-in-out duration-300"></span> 
        
        {showMenu && (
          <div className='absolute lg:hidden top-0 left-0 w-full
          h-screen bg-black bg-opacity-70 flex flex-col items-start'>
        
         <div className='w-[70%] relative h-full overflow-y-scroll  origin-top
             bg-[#ffffff] flex flex-col items-start px-4 py-10'>
              <div className='text-2xl
               hover:text-accent absolute top-4 left-4'>
              <MdOutlineClose 
               onClick={() => setShowMenu(false)} />
              </div>
               
               
       <div className='mt-10 ml-1 text-lg'>
       <div   
       className=" flex font-bold flex-col">
      <div className='flex flex-col gap-5'>
      <Link href='/'>
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
      <div className='mt-[25rem] font-bold flex flex-row gap-2'>
      <Link href='/signin'>
      Account
       </Link>
       <Link href='/signin'>
      <RxPerson className="mt-1" />
       </Link>
       
      </div>
    
      </div>
      <div>
  
      </div>
     </div>
   </div>
          
          </div>

        )

        } 
          </div>  
  
  )
}

export default Navlinks