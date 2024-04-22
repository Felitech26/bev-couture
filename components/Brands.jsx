import Image from 'next/image'
import React from 'react'


const Brands = () => {
  return (
    <section className='container mx-auto py-5 overflow-hidden'>

<h5 className='text-center md:hidden text-[20px] 
font-cormomorantGaramond
font-bold'>Feautures</h5>
   <div className='px-[3rem] grid md:hidden grid-cols-2 '>
   <Image src={'/Forbes.png'} 
      width={150}
      height={150}
      alt='elle'
      />   
   <Image src={'/Elle.png'} 
      width={150}
      height={150}
      alt='elle'
      />   

   <Image src={'/Bbc.png'} 
      width={150}
      height={150}
      alt='elle'
      className='mb-2'
      />  

<Image src={'/Vogue.png'} 
      width={150}
      height={150}
      alt='elle'/>
    
    </div> 



<h5 className='text-[20px] 
font-cormomorantGaramond sm:hidden md:flex justify-center items-center
font-bold'>Feautures</h5>
   <div className='flex flex-row justify-center items-center gap-10 
   lg:gap-[5rem] sm:hidden md:flex'>
   <Image src={'/Forbes.png'} 
      width={150}
      height={150}
      alt='elle'
      />   
   <Image src={'/Elle.png'} 
      width={150}
      height={150}
      alt='elle'
      />   

   <Image src={'/Bbc.png'} 
      width={150}
      height={150}
      alt='elle'
      className='mb-2'
      />  

<Image src={'/Vogue.png'} 
      width={150}
      height={150}
      alt='elle'/>
    
    </div> 
      
    </section>
   
  )
}

export default Brands