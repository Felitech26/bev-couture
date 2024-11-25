import Image from 'next/image'


const Hero = () => {
  return (
    <section className='overflow-hidden pb-5'>
     <div>
      <div className='h-[900px] lg:h-[1700px] xxl:w-full'>
        <Image src={'/hero4.png'}
        width={2000}
        height={1280}
        alt=''
        className='h-[900px] object-cover lg:h-[1700px] xxl:w-full'
         />

      </div>
   
      </div>   
    </section>
  )
}

export default Hero