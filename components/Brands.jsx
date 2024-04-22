import Image from 'next/image'
import React from 'react'


const Brands = () => {
  return (
    <section className='container py-5 overflow-hidden'>
<h5 className='text-[20px] 
font-cormomorantGaramond text-center
font-bold'>Feautures</h5>
   <div className='flex flex-row justify-center items-center gap-10 
   lg:gap-[5rem]'>
   <Image src={'/Forbes.png'} 
      width={150}
      height={150}
      alt='elle'
      className='w-[70px]'
      />   
   <Image src={'/Elle.png'} 
      width={150}
      height={150}
      alt='elle'
      className='w-[70px]'
      />   

   <Image src={'/Bbc.png'} 
      width={150}
      height={150}
      alt='elle'
      className='w-[70px]'
      
      />  

<Image src={'/Vogue.png'} 
      width={150}
      height={150}
      alt='elle'
      className='w-[70px]'
      />
      
    </div> 
      
    </section>
   
  )
}

export default Brands