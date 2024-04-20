import React from 'react'

const Services = () => {
  return (
   <section className='container mx-auto py-[5rem] overflow-hidden'>
    <div className='container flex flex-row justify-center gap-10'>
    <div className='flex flex-col justify-center items-center gap-6'>

<div className='relative flex justify-center items-center'>

  <video src={'/personalise.mp4'} autoPlay loop muted
  className='object-cover w-[400px] h-[400px] md:h-[650px] 
  lg:h-[500px] xl:h-[450px]'/>

</div>

<h5 className='font-cormomorantGaramond font-semibold text-[20px]
uppercase text-center'>Personalization</h5>

<p className='font-lato w-[350px] text-center'> Emboss select bags, luggage, belts, leather accessories,
 and items from the pet’s collection with initials to create a
  truly unique piece.</p>
</div>
    <div className='flex flex-col justify-center items-center gap-6'>

<div className='relative flex justify-center items-center'>

  <video src={'/pickup.mp4'} autoPlay loop muted
  className='object-cover w-[400px] h-[400px] md:h-[650px] 
  lg:h-[500px] xl:h-[450px]'/>

</div>

<h5 className='font-cormomorantGaramond font-semibold text-[20px]
uppercase text-center'>In Store Shopping</h5>

<p className='font-lato w-[350px] text-center'> Emboss select bags, luggage, belts, leather accessories,
 and items from the pet’s collection with initials to create a
  truly unique piece.</p>
</div>
    <div className='flex flex-col justify-center items-center gap-6'>

<div className='relative flex justify-center items-center'>

  <video src={'/styleUp.mp4'} autoPlay loop muted
  className='object-cover w-[400px] h-[400px] md:h-[650px] 
  lg:h-[500px] xl:h-[450px]'/>

</div>

<h5 className='font-cormomorantGaramond font-semibold text-[20px]
uppercase text-center'>Style Up</h5>

<p className='font-lato w-[350px] text-center'> Emboss select bags, luggage, belts, leather accessories,
 and items from the pet’s collection with initials to create a
  truly unique piece.</p>
</div>
    </div>
    
   </section>
  )
}

export default Services