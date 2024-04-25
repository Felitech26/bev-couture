import React from 'react'

const Services = () => {
  return (
   <section className='container mx-auto py-10 overflow-hidden'>
    <div className='flex flex-row justify-center gap-5'>
    <div className='flex flex-col lg:flex-row justify-center 
    items-center gap-8 lg:gap-[4rem] xl:gap-[10rem]'>

<div className='relative flex justify-center items-center'>

  <video src={'/personalise.mp4'} autoPlay loop muted
  className='object-cover w-[630px] h-[750px] md:h-[650px] 
  lg:h-[600px] xl:h-[650px]'/>

</div>



<div className='flex flex-col justify-center items-center leading-tight'>
  <h5 className='text-[35px] md:text-[70px] lg xl:w-[500px] font-cormomorantGaramond uppercase'>
  A Story of Craft
  </h5>
  <h5 className='text-[35px] md:text-[70px] xl:w-[500px] font-cormomorantGaramond uppercase'>
  True Unique Style
  </h5>
</div>


</div>
  
   






    </div>
    
   </section>
  )
}

export default Services