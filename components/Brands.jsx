import Image from 'next/image'
import React from 'react'


const Brands = () => {
  return (
   <section className='pt-3 pb-9 md:py-[5rem] overflow-hidden'>
     <h5 className='mb-5 lg::mb-7 font-cormomorantGaramond font-medium text-[20px] md:text-[30px]
      text-center'>Featured On</h5>
 <div className="w-full h-[1px] bg-[#000000] font-thin"></div>
       <div className='logos'>
      <div className='logos-slide'>
        <div className='flex flex-row justify-center items-center gap-10 lg:gap-20 mr-5 lg:mr-[3rem]'>
        <div className='flex justify-center' >
        <Image src={'/Vogue.png'}
        width={200}
        height={180}
        alt=''/>
      </div>
      <div className='flex justify-center'>
        <Image src={'/InStyle.png'}
        width={200}
        height={180}
        alt=''/>
      </div>
      <div className=' flex justify-center'>
        <Image src={'/Catalyst.png'}
        width={200}
        height={180}
        alt=''/>
      </div>
      <div className='flex justify-center'>
        <Image src={'/Covergirl.png'}
        width={200}
        height={180}
        alt=''/>
      </div>
      <div className=' flex justify-center'>
        <Image src={'/Vox.png'}
        width={200}
        height={180}
        alt=''/>
      </div>
      <div className='flex justify-center'>
        <Image src={'/Zara.png'}
        width={200}
        height={180}
        alt=''/>
      </div>
        </div>
      </div>
      <div className='logos-slide'>
        <div className='flex flex-row justify-center items-center gap-10 lg:gap-20'>
        <div className='flex justify-center' >
        <Image src={'/Vogue.png'}
        width={200}
        height={180}
        alt=''/>
      </div>
      <div className='flex justify-center'>
        <Image src={'/InStyle.png'}
        width={200}
        height={180}
        alt=''/>
      </div>
      <div className='flex justify-center'>
        <Image src={'/Catalyst.png'}
        width={200}
        height={180}
        alt=''/>
      </div>
      <div className='flex justify-center'>
        <Image src={'/Covergirl.png'}
        width={200}
        height={180}
        alt=''/>
      </div>
      <div className='flex justify-center'>
        <Image src={'/Vox.png'}
        width={200}
        height={180}
        alt=''/>
      </div>
      <div className='flex justify-center'>
        <Image src={'/Zara.png'}
        width={200}
        height={180}
        alt=''/>
      </div>
        </div>
      </div>
    </div>
    <div className="w-full h-[1px] bg-[#000000] font-thin"></div>
    </section>
   
  )
}

export default Brands