import Image from 'next/image'


const AboutCategories = () => {
  return (
    <div className='min-h-[260vh] pt-[8rem] pb-[5rem]'>
      <h5 className='text-[30px] font-cormomorantGaramond
       font-normal text-center'>About Us </h5>

     <div className='container mt-[3rem] flex justify-center
      items-center lg:items-start flex-col lg:flex-row lg:gap-[3rem]
      xl:gap-[8rem]'>
     
        <div className='flex justify-center items-center hover:scale-95 
       lg:hover:scale-110 transition duration-500'>
        <Image src={'/bevelyn.png'}
         width={540}
         height={200}
         alt="" 
         className='xl:h-[500px] '/>
        </div>
      <div className='text-center lg:text-center lg:w-[50%] w-[100%] 
      mt-10 lg:mt-0 xl:mt-10 flex flex-col gap-4'>
          <h5 className='font-lato text-[20px]'>
          Unconditional Beauty
          </h5>
          <h1 className='font-cormomorantGaramond text-[60px] uppercase'>
          Beleve In Design
      
           <h1>Priority</h1>
          </h1>
          <h5 className='font-lato xl:text-lg text-[#2f2f2f]'>
          As a global online fashion brand, we’re on a mission to empower
           our customers to feel confident and be their best selves – 
           authentically & unapologetically. At Bev Couture, we value body 
           positivity and are committed to offering an inclusive range 
           of trend-driven styles designed exclusively in United Kingdom. 
           Our styles are made for everyone, for every occasion, 
           and we want you to embrace your individuality and express
          yourself in true Bev Couture.
          </h5>
         
        </div>
       
      </div>
     
     

      <div className='flex flex-col  mt-20'>
      <div className='mb-6 px-3 flex justify-center items-center text-accent
      text-[30px] font-light'>
         <h5 className='font-semibold text-center'>Dress to Impress: Mastering the Art of Personal 
         Style</h5> 
         </div>
       

        <div className='flex justify-center items-center 
        flex-col mb-10  lg:text-[40px] '>
        
         <div className='px-3 font-lato text-md lg:w-[70%] text-center text-black lg:text-lg'>
            <h5>Fashion trends can be understood as changes in the clothing style of the majority of people in a country or around the world.
In particular, these changes create influence that causes others to follow suit. Usually, fashion trends often originate from experts,
famous designers or popular trends according to the tastes of the crowd…
            </h5>
           
            
           </div>
        </div>
         <div className='flex flex-col justify-center items-center '>
          <div className='flex justify-center items-center'>
          <video src={'./styleUp.mp4'} 
       autoPlay muted loop
       className='object-cover lg:w-[1250px] h-[600px] md:h-[650px] 
       lg:h-[600px] xl:h-[610px]'/>
          </div>
         </div>
      </div>
      
    </div>
  )
}

export default AboutCategories