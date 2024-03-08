'use client'
 import Link from 'next/link'
import { useState } from 'react'
import { MdOutlineClose } from 'react-icons/md'

const Navlinks = () => {
  const [showMenu, setShowMenu] = useState(false)
  return (
    
        <div onClick={() => setShowMenu(!showMenu)}  
        className='flex w-7 h-4 flex-col justify-between items-center font-cormomorantGaramond
        mdl:hidden text-4xl text-black cursor-pointer overflow-hidden group'>
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
          <div
          className='absolute lg:hidden top-0 left-0 w-full group:
          h-screen bg-black  transition-all duration-500 bg-opacity-70 flex flex-col items-start'>
       <div className='w-[70%] h-full overflow-y-scroll scrollbarHide
             bg-[#ffffff] flex flex-col items-start px-4 py-10 relative
            '>
               <MdOutlineClose 
               onClick={() => setShowMenu(false)}
               className='text-2xl cursor-pointer
               hover:text-accent absolute top-4 left-4'/>
       <div className='mt-10 ml-1 text-lg'>
       <div className=" flex font-bold flex-col gap-7">
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