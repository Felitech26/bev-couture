'use client'
 import Link from 'next/link'
import { useState } from 'react'
import { MdOutlineClose } from 'react-icons/md'
import { RxPerson } from "react-icons/rx"; 
import { motion, AnimatePresence } from 'framer-motion';
import Navlist from './Navlist';



const Navlinks = () => {

  const heightAnimation = {
    initial: {
      height: 0,
    },
    open: {
      height: "100vh",
      transition: {duration: 1, ease: [0.75, 0, 0.23, 1]},
    },
    close: {
      height: "0vh",
      transition: {duration: 1, ease: [0.75, 0, 0.23, 1]},
    },
  }
  
  const [showMenu, setShowMenu] = useState(false)
  return (
    
        <div onClick={() => setShowMenu(!showMenu)}  
        className='flex w-7 h-4 flex-col justify-between items-center font-cormomorantGaramond
        mdl:hidden text-4xl text-black cursor-pointer overflow-hidden group z-[60]
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
        
    <AnimatePresence mode='wait'>
    {showMenu && (
          <motion.nav 
          variants={heightAnimation}
          initial='initial'
          animate='open'
          exit='close'className='absolute lg:hidden top-0 left-0 w-full
          bg-black bg-opacity-90 z-[50] overflow-hidden'>
         <div className='container mx-auto h-full flex items-center 
           justify-center'>
           <Navlist />
           </div>
          </motion.nav>

        )} 
      
      </AnimatePresence> 
          </div>  
  
  )
}

export default Navlinks