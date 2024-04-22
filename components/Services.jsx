import React from 'react'

const Services = () => {
  return (
   <section className='container mx-auto py-10 overflow-hidden'>
    <div className='flex flex-row justify-center gap-5'>
    <div className='flex flex-col lg:flex-row justify-center 
    items-center gap-8 lg:gap-[4rem] xl:gap-[10rem]'>

<div className='relative flex justify-center items-center'>

  <video src={'/personalise.mp4'} autoPlay loop muted
  className='object-cover w-[600px] h-[500px] md:h-[650px] 
  lg:h-[600px] xl:h-[650px]'/>

</div>



<div className='flex flex-col justify-center items-center leading-tight'>
  <h5 className='text-[35px] md:text-[70px] lg xl:w-[500px] font-cormomorantGaramond uppercase'>
  A Story of Craft:
  </h5>
  <h5 className='text-[35px] md:text-[70px] xl:w-[500px] font-cormomorantGaramond uppercase'>
  True Unique Style
  </h5>
</div>


</div>
    <div className='hidden flex-col justify-center items-center gap-6'>

<div className='relative flex justify-center items-center'>

  <video src={'/pickup.mp4'} autoPlay loop muted
  className='object-cover w-[400px] h-[400px] md:h-[650px] 
  lg:h-[500px] xl:h-[450px]'/>

</div>

<h5 className='font-cormomorantGaramond font-bold text-[20px]
uppercase text-center'>In Store Shopping</h5>

<p className='font-lato w-[350px] text-center font-medium text-[#414242]'> 
The signature Gucci box 
comes with a cotton canvas tote bag, a complimentary piece that 
can be used again and again.</p>
</div>
    <div className='hidden flex-col justify-center items-center gap-6'>

<div className='relative flex justify-center items-center'>

  <video src={'/styleUp.mp4'} autoPlay loop muted
  className='object-cover w-[400px] h-[400px] md:h-[650px] 
  lg:h-[500px] xl:h-[450px]'/>

</div>

<h5 className='font-cormomorantGaramond font-bold text-[20px] 
uppercase text-center'>Style Up</h5>

<p className='font-lato w-[350px] text-center font-medium text-[#414242]'> 
Emboss select bags, 
luggage, belts, leather accessories,
 and items from the pet’s collection with initials to create a
  truly unique piece.</p>
</div>
    </div>
    
   </section>
  )
}

export default Services