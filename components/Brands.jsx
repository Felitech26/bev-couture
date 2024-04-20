import Image from 'next/image'
import React from 'react'



import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const Brands = () => {
  return (
    <section className='container mx-auto py-5 overflow-hidden'>

<div className='hidden'>
<Carousel>
  <CarouselContent>
    <CarouselItem>
      <Image src={'/Elle.png'} 
      width={150}
      height={150}
      alt='elle'
      />
      </CarouselItem>
    <CarouselItem>
     </CarouselItem>
    <CarouselItem>
      <Image src={'/Vogue.png'} 
      width={150}
      height={150}
      alt='elle'/></CarouselItem>
    <CarouselItem>
      <Image src={'/Forbes.png'} 
      width={150}
      height={150}
      alt='elle'/></CarouselItem>
    <CarouselItem>
      <Image src={'/Glitz.png'} 
      width={150}
      height={150}
      alt='elle'/></CarouselItem>
    
  </CarouselContent>
  <CarouselPrevious />
  <CarouselNext />
</Carousel>
</div>



<h5 className='text-center text-[30px]'>Feautured On </h5>
   <div className='container grid grid-cols-2 md:grid-cols-4 justify-center
    items-center gap-4'>
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