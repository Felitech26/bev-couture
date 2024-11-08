import React from 'react'
import { motion } from 'framer-motion'
import Navlist from './Navlist'



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

const NavAnimate = () => {
  return (
    <motion.nav 
    variants={heightAnimation}
    initial='initial'
    animate='open'
    exit='close'
    
    className='bg-white w-full absolute overflow-hidden top-[31px] md:top-[35px] left-0 right-0'>
  <div className='container mx-auto h-screen flex items-center justify-center'>
    <Navlist/>
  </div>
  </motion.nav>
  )
}

export default NavAnimate