import Image from 'next/image'
import React from 'react'

const Brands = () => {
  return (
    <section>
       <div>
        <h5 className='text-[30px] text-center font-medium'>
          Trusted By  <span className='text-accent'>The World </span> Leading Brands
        </h5>
      <div className='logos'>
      <div className='logos-slide'>
        <div className='flex flex-row justify-center items-center gap-10 lg:gap-[5rem]
        xl:gap-[7rem]'>
        <div className='h-[48px] flex justify-center' >
        <Image src={'/Vogue.png'}
        width={200}
        height={100}
        alt='' 
      />
      </div>
      <div className='h-[48px] flex mt-3 justify-center'>
        <Image src={'/InStyle.png'}
        width={200}
        height={180}
        alt=''/>
      </div>
      <div className='h-[42px] flex justify-center'>
        <Image src={'/Covergirl.png'}
        width={200}
        height={180}
        alt=''/>
      </div>
      <div className='h-[37px] flex mt-1 justify-center'>
        <Image src={'/Zara.png'}
        width={200}
        height={100}
        alt=''/>
      </div>
        </div>
      </div>
      <div className='logos-slide'>
        <div className='flex flex-row justify-center items-center gap-10 lg:gap-20'>
        <div className='h-[48px] flex justify-center' >
        <Image src={'/Vogue.png'}
        width={200} 
        height={100}
        alt=''/>
      </div>
      <div className='h-[48px] flex mt-3 justify-center'>
        <Image src={'/InStyle.png'}
        width={200}
        height={180}
        alt=''/>
      </div>
      <div className='h-[42px] flex justify-center'>
        <Image src={'/Covergirl.png'}
        width={200}
        height={180}
        alt=''/>
      </div>
      <div className='h-[37px] flex mt-1 justify-center'>
        <Image src={'/Zara.png'}
        width={200}
        height={100}
        alt=''/>
      </div>
        </div>
      </div>
    </div>
      </div>
      
    </section>
   
  )
}

export default Brands