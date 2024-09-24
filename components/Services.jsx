import React from 'react'
import { HiPlusSm } from "react-icons/hi";
import Link from 'next/link'

const Services = () => {
  return (
   <section className='container mx-auto py-10 overflow-hidden'>
    <div className='flex flex-row justify-center gap-5'>
    <div className='flex flex-col lg:flex-row justify-center 
    items-center gap-8 lg:gap-[4rem] xl:gap-[10rem]'>

<div className='relative flex justify-center items-center'>

  <video src={'/personalise.mp4'} autoPlay loop controls
  className='object-cover w-[630px] h-[750px] md:h-[650px] 
  lg:h-[600px] xl:h-[650px]'/>

</div>



<div className='flex flex-col justify-center items-center xl:mb-[4rem] leading-tight'>
 <div className='md:leading-[4.5rem]'>
 <h5 className='text-[35px] md:text-[70px] lg xl:w-[500px] font-cormomorantGaramond uppercase'>
  A Story of <span className='text-accent'>Craft</span> 
  </h5>
  <h5 className='text-[35px] md:text-[70px] xl:w-[500px] font-cormomorantGaramond uppercase'>
  True <span className='text-accent'>Unique</span> Style
  </h5>
 </div>

 <div className='mt-8 gap-1 hidden lg:inline-block lg:mr-7'>
 <p className='font-lato font-medium text-[#272727]'
 >With the best moodern classy and elegant designs</p>
 <p className='font-lato font-medium text-[#272727] text-center'>
  Bev Couture always comes with great styles.</p>
 <p className='font-lato font-medium text-[#272727] text-center'>
  We are the best</p>
 </div>



 <Link href='/shop' className='flex flex-row group transition duration-500 justify-center items-center gap-1
   mt-[2rem] mr-2 md:mr-0 lg:mr-7 underline '>
  <HiPlusSm  className='mt-0.5 group-hover:rotate-180 transition duration-300'/>
  <h5 className='font-lato font-semibold text-sm '>Discover More</h5>
 </Link>
</div>




</div>
  
   






    </div>
    
   </section>
  )
}

export default Services