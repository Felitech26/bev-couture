import React from 'react'
import Link from 'next/link'
import {motion} from 'framer-motion'


const links = [
  {href: '/', name:'Home'},
  {href: 'about', name:'About'},
  {href: 'shop', name:'Shop'},
  {href: 'contact', name:'Contact'},
  {href: 'signin', name:'Account'},
];

const percepective = {
  initial: {
    opacity: 0,
  },
  enter:{
    y: 0,
    opacity: 1,
   
  },
  exit:{
    y: '100%',
    opacity: 0,
    
  },
};


const Navlist = () => {
  return (
    <ul className='w-full h-full font-cormomorantGaramond pt-[9rem] flex flex-col gap-8 text-black text-6xl font-semibold
    items-center uppercase'>
      {links.map((link, index) => {
        return(
          <motion.div
          variants={percepective}
          animate= 'enter'
          exit='exit'
          initial='initial'
          >
          
         <Link href={link.href} key={index}
          className='flex overflow-hidden hover:text-accent transition-all '>
            {link.name}
          </Link>
          </motion.div>
         
        )
      })}
    </ul>
  )
}

export default Navlist