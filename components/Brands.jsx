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
    <section className='container mx-auto py-[5rem]'>

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
    
      
    </section>
   
  )
}

export default Brands