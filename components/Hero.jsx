import Image from 'next/image'
import Link from 'next/link'

const Hero = () => {
  return (
    <section className='overflow-hidden pb-5'>
     <div>
      <div className='h-[900px] lg:h-[1700px]'>
        <Image src={'/hero4.png'}
        width={1720}
        height={1280}
        alt=''
        className='h-[900px] object-cover lg:h-[1700px]'
         />

      </div>
   
      </div>   
    </section>
  )
}

export default Hero