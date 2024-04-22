import Image from 'next/image'
import React from 'react'


const Brands = () => {
  return (
    <section className='py-5 overflow-hidden'>
    <div className='flex space-x-[21rem] lg:space-x-[25rem] overflow-hidden'>
    <div className='flex justify-center items-center space-x-8 
    lg:space-x-16 animate-loop-scroll'>
   <Image src={'/Forbes.png'} 
      width={150}
      height={150}
      alt='forbes'
      className='w-[70px] md:w-[100px] lg:w-[150px] max-w-none'
      />   
   <Image src={'/Elle.png'} 
      width={150}
      height={150}
      alt='elle'
      className='w-[75px] md:w-[100px] lg:w-[150px]'
      />   

   <Image src={'/Bbc.png'} 
      width={150}
      height={150}
      alt='bbc'
      className='w-[75px] md:w-[100px] lg:w-[150px] mb-1'
      
      />  

   <Image src={'/Vogue.png'} 
      width={150}
      height={150}
      alt='vogue'
      className='w-[75px] md:w-[100px] lg:w-[150px]'
      />
   <Image src={'/Glitz.png'} 
      width={150}
      height={150}
      alt='vogue'
      className='w-[75px] md:w-[100px] lg:w-[150px]'
      />
      
    </div> 
<div className='flex space-x-8 lg:space-x-16 justify-center items-center 
animate-loop-scroll aria-hidden:"true"'>
   <Image src={'/Forbes.png'} 
      width={150}
      height={150}
      alt='forbes'
      className='w-[70px] md:w-[100px] lg:w-[150px]'
      />   
   <Image src={'/Elle.png'} 
      width={150}
      height={150}
      alt='elle'
      className='w-[75px] md:w-[100px] lg:w-[150px]'
      />   

   <Image src={'/Bbc.png'} 
      width={150}
      height={150}
      alt='bbc'
      className='w-[75px] md:w-[100px] lg:w-[150px] mb-1'
      
      />  

  <Image src={'/Vogue.png'} 
      width={150}
      height={150}
      alt='vogue'
      className='w-[75px] md:w-[100px] lg:w-[150px]'
      />
  <Image src={'/Glitz.png'} 
      width={150}
      height={150}
      alt='vogue'
      className='w-[75px] md:w-[100px] lg:w-[150px]'
      />
      
    </div> 
    </div>
  
      
    </section>
   
  )
}

export default Brands