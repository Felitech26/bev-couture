import Image from 'next/image'
import Link from 'next/link'

const Hero = () => {
  return (
    <section className='overflow-hidden pb-5'>
     <div>
      <div className='h-[620px] md:h-[650px] lg:h-[900px] xl:h-[920px] '>
        <video src={'./videoBg.mp4'} 
        autoPlay muted loop
        className='object-cover w-full h-[620px] md:h-[650px] 
        lg:h-[900px] xl:h-[920px] absolute '/>

<div className='flex relative w-full mt-4 h-full bg-opacity-50 bg-black flex-col justify-center 
items-center text-white gap-4'>
        <h5 className='font-lato text-[14px] lg:text-[20px] font-normal text-white
        '>UNCONDITIONAL <span className='text-accent italic
        text-[30px] lg:text-[55px] font-cormomorantGaramond font-bold ml-2
        '> BEAUTY</span></h5>
        <h5 className='font-cormomorantGaramond text-[22px] lg:text-[50px] 
        font-medium'>ELEGANT AND CLASSY STYLES</h5>
             <div className='z-10 mt-5'>
     <Link href='/shop'>
      <button className=" w-[200px] text-[20px] h-[200] relative font-bold py-3
       bg-transparent border-[2px]
       border-accent text-black items-center transition-colors
       before:absolute before:left-0 
        before:top-0 before:-z-10 before:h-full after:hover:text-white
       before:w-full before:origin-top-left before:scale-x-0 
       before:hover:bg-accent before:transition-transform  
       before:duration-300 before:content-['']
       before:hover:scale-x-100">COLLECTION</button>
  </Link>

           </div>
      </div>
      </div>
   
      </div>   
    </section>
  )
}

export default Hero