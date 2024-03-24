'use client'
 import Link from 'next/link'
import { useState } from 'react'
import { MdOutlineClose } from 'react-icons/md'
import { AnimatePresence, motion } from 'framer-motion'

const Navlinks = () => {
  const [showMenu, setShowMenu] = useState(false)
  
  const navLink = {
    initial: {
      y:'30vh',
      transition: {
        duration: 0.5,
      },
    },
    showMenu: {
      y: 0,
      transition: {
        duration: 0.7,   
      },
    },
  }


  const menuVars = {
     initail: {
      scaleY: 0
     },
     animate: {
      scaleY: 1,
      transition: {
        duration:0.5,
        ease: [0.12, 0, 0.39, 0],
      }
     },
     exit: {
      scaleY: 0,
      transition: {
        duration:1,
        ease: [0.22, 1, 0.36, 1],
      }
     },
  }


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
          <div className='absolute lg:hidden top-0 left-0 w-full
          h-screen bg-black bg-opacity-70 flex flex-col items-start'>
         
         <AnimatePresence>
         <motion.div
         variants={menuVars}
         initial='initail'
         animate='animate'
         exit='exit'
          className='w-[70%] h-full overflow-y-scroll scrollbarHide origin-top
             bg-[#ffffff] flex flex-col items-start px-4 py-10 relative
            '>
              <motion.div
              variants={menuVars}
              animate='animate'
               exit='exit'
               className='text-2xl cursor-pointer
               hover:text-accent absolute top-4 left-4'>
              <MdOutlineClose 
               onClick={() => setShowMenu(false)} />
              </motion.div>
               
               
       <div className='mt-10 ml-1 text-lg'>
       <motion.div 
       variants={navLink}    
       className=" flex font-bold flex-col gap-7">
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
       
      </motion.div>
      <div>
  
      </div>
               </div>
             </motion.div>
         </AnimatePresence>
          
          </div>

        )

        }

          
          </div>  
  
  )
}

export default Navlinks