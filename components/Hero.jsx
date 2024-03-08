import Image from 'next/image'
import Link from 'next/link'

const Hero = () => {
  return (
    <section className='overflow-hidden pb-5'>
     <div>
  <video src={'./videoBg.mp4'} 
        autoPlay muted loop
        className='object-cover w-full h-[620px] md:h-[650px] 
        lg:h-[900px] xl:h-[920px]'/>
      </div> 
    </section>
  )
}

export default Hero