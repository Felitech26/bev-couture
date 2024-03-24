import Image from 'next/image'
import React from 'react'

const Brands = () => {
  return (
    <section className='container lg:hidden'>
       <h5 className='text-[40px] text-center mb-10 font-medium'>
       Featured  <span className='text-accent'>In  </span> 
        </h5>
     <div className='grid grid-cols-2 justify-center items-center gap-[3rem] lg:gap-20'>
        <div className='h-[50px] flex justify-center' >
        <Image src={'/Vogue.png'}
        width={200}
        height={100}
        alt=''/>
      </div>
      <div className='h-[50px] flex mt-3 justify-center'>
        <Image src={'/InStyle.png'}
        width={200}
        height={180}
        alt=''/>
      </div>
      <div className='h-[55px] mt-3 flex justify-center'>
        <Image src={'/Catalyst.png'}
        width={200}
        height={180}
        alt=''/>
      </div>
      <div className='h-[48px] flex justify-center'>
        <Image src={'/Covergirl.png'}
        width={200}
        height={180}
        alt=''/>
      </div>
      <div className='h-[50px] flex mb-2 justify-center'>
        <Image src={'/Vox.png'}
        width={200}
        height={180}
        alt=''/>
      </div>
      <div className='h-[40px] flex mt-1 justify-center'>
        <Image src={'/Zara.png'}
        width={200}
        height={100}
        alt=''/>
      </div>
        </div>
    </section>
   
  )
}

export default Brands