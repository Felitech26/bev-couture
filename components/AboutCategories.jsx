import Image from 'next/image'


const AboutCategories = () => {
  return (
    <div className='h-[220vh] py-[8rem]'>
      <h5 className='text-[30px] font-cormomorantGaramond
       font-normal text-center'>About Us </h5>

     <div className='container mx-auto mt-[3rem] flex justify-center
     items-start flex-col xl:flex-row xl:gap-[8rem]'>
     
        <div className='flex justify-center items-center hover:scale-95 
       lg:hover:scale-110 transition duration-500'>
        <Image src={'/bevelyn.png'}
         width={540}
         height={200}
         alt="" 
         className='xl:h-[500px] '/>
        </div>
      <div className='xl:w-[40%] mt-10 xl:mt-7 flex flex-col gap-4'>
          <h5 className='font-lato text-[20px]'>
          Unconditional Beauty
          </h5>
          <h1 className='font-cormomorantGaramond text-[60px] uppercase'>
          Beleve
         <h1> In Design </h1>
           <h1>Priority</h1>
          </h1>
          <h5 className='font-lato text-[#2f2f2f]'>
          As a global online fashion brand, we’re on a mission to empower
           our customers to feel confident and be their best selves – 
           authentically & unapologetically. At Bev Couture, we value body 
           positivity and are committed to offering an inclusive range 
           of trend-driven styles designed exclusively in United Kingdom. 
           Our styles are made for everyone, for every occasion, 
           and we want you to embrace your individuality and express
          yourself in true Bev Couture fashion.
          </h5>
         
        </div>
       
      </div>
      <div className='hidden lg:inline-block'>
        <h5 className='text-[40px] text-center pt-[5rem] mb-2 font-medium'>
          Trusted By The <span className='text-accent'>World Leading Brands</span>
        </h5>
      <div className='logos'>
      <div className='logos-slide'>
        <div className='flex flex-row justify-center items-center gap-10 lg:gap-20'>
        <div className='h-[50px] flex justify-center' >
        <Image src={'/Vogue.png'}
        width={200}
        height={100}
        alt=''/>
      </div>
      <div className='h-[50px] flex mt-3 justify-center'>
        <Image src={'/InStyle.png'}
        width={200}
        height={180}
        alt=''/>
      </div>
      <div className='h-[55px] mt-3 flex justify-center'>
        <Image src={'/Catalyst.png'}
        width={200}
        height={180}
        alt=''/>
      </div>
      <div className='h-[48px] flex justify-center'>
        <Image src={'/Covergirl.png'}
        width={200}
        height={180}
        alt=''/>
      </div>
      <div className='h-[50px] flex mb-2 justify-center'>
        <Image src={'/Vox.png'}
        width={200}
        height={180}
        alt=''/>
      </div>
      <div className='h-[40px] flex mt-1 justify-center'>
        <Image src={'/Zara.png'}
        width={200}
        height={100}
        alt=''/>
      </div>
        </div>
      </div>
      <div className='logos-slide'>
        <div className='flex flex-row justify-center items-center gap-10 lg:gap-20'>
        <div className='h-[50px] flex justify-center' >
        <Image src={'/Vogue.png'}
        width={200} 
        height={100}
        alt=''/>
      </div>
      <div className='h-[50px] flex mt-3 justify-center'>
        <Image src={'/InStyle.png'}
        width={200}
        height={180}
        alt=''/>
      </div>
      <div className='h-[55px] mt-3 flex justify-center'>
        <Image src={'/Catalyst.png'}
        width={200}
        height={180}
        alt=''/>
      </div>
      <div className='h-[48px] flex justify-center'>
        <Image src={'/Covergirl.png'}
        width={200}
        height={180}
        alt=''/>
      </div>
      <div className='h-[50px] flex mb-2 justify-center'>
        <Image src={'/Vox.png'}
        width={200}
        height={180}
        alt=''/>
      </div>
      <div className='h-[40px] flex mt-1 justify-center'>
        <Image src={'/Zara.png'}
        width={200}
        height={100}
        alt=''/>
      </div>
        </div>
      </div>
    </div>
      </div>
     

      <div className='flex flex-col mt-20'>
      <div className='mb-6 flex justify-center items-center text-accent
      text-[30px] font-light'>
         <h5 className='container font-semibold text-center'>Dress to Impress: Mastering the Art of Personal 
         Style</h5> 
         </div>
       

        <div className='container mx-auto flex justify-center items-center flex-col mb-10 
        lg:text-[40px] '>
        
         <div className='container lg:w-[70%] text-center text-black lg:text-lg'>
            <h5>Fashion trends can be understood as changes in the clothing style of the majority of people in a country or around the world.
In particular, these changes create influence that causes others to follow suit. Usually, fashion trends often originate from experts,
famous designers or popular trends according to the tastes of the crowd…
            </h5>
           
            
           </div>
        </div>
         <div className='flex flex-col justify-center items-center'>
          <div className='flex justify-center items-center'>
          <video src={'./styleUp.mp4'} 
       autoPlay muted loop
       className='object-cover lg:w-[1250px] h-[400px] md:h-[500px] 
       lg:h-[500px] xl:h-[610px]'/>
          </div>
         </div>
      </div>
      
    </div>
  )
}

export default AboutCategories