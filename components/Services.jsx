import React from 'react'

const Services = () => {
  return (
   <section className='container mx-auto py-5 overflow-hidden'>
    <div>
      <div className='relative flex justify-center items-center'>
        <video src={'/personalise.mp4'} autoPlay loop muted
        className='object-cover w-[450px] h-[500px] md:h-[650px] 
        lg:h-[500px] xl:h-[500px]'/>
      </div>
    </div>
   </section>
  )
}

export default Services