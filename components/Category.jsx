import Link from "next/link"
import Image from "next/image"

const Category = () => {
  return (
    <section className="w-full px-2 md:px-3 xl:px-[5rem] pb-[10rem] pt-6 md:pt-10 lg:pt-[4rem] overflow-hidden"> 
    <h5 className="mb-5 text-[30px] md:text-[40px] text-center 
    font-cormomorantGaramond
     uppercase">Shop By Categories</h5> 

     <div className="flex justify-center items-center">
     <h5 className="mb-10 px-2 font-lato text-md w-[600px] text-center">
       You will surely have something spectacular to wear, Just choose through 
       the varieties for your taste. Bev Couture has different range of classy 
       and elegant designs to suit your taste
     </h5>
     </div>

       
  <div className='flex flex-col lg:flex-row gap-10 justify-center
   items-center'>
    <div className='group relative w-full h-full overflow-hidden'>
    <div className='overflow-hidden inline-block'>
      <img src="/continental.png" height='auto' width='auto' alt="children"  className='group-hover:scale-110
      duration-500 transition-transform'/>
     </div> 
     <div className='absolute top-5 group-hover:hidden left-4'>
      <h1 className='text-sm text-white font-semibold px-2 py-2 rounded-sm
       bg-black bg-opacity-30'>Continental</h1>
     </div>
     <div className='w-full bg-black bg-opacity-40 absolute bottom-1.5 right-0 left-0 h-0
     flex justify-center items-center  
     overflow-hidden group-hover:h-[100%] group-hover:w-[100%] transition-all duration-500'>
    <div className="flex flex-col justify-center items-center">
        <h3 className="text-white font-lato text-[17px] md:text-md">CONTINENTAL VIBE</h3>
        <Link href='/shop'>
        <button className="bg-black mb-10 mt-5
    px-5 py-3 border border-xl text-white border-black text-md
    hover:bg-white hover:text-black">SHOP COLLECTION</button>
        </Link>
        </div>
     
     </div>
    </div>
    <div className='group relative w-full h-full overflow-hidden'>
    <div className='overflow-hidden inline-block'>
      <img src="/casual.png" height='auto' width='auto' alt="children"  className='group-hover:scale-110
      duration-500 transition-transform'/>
     </div> 
     <div className='absolute top-5 group-hover:hidden left-4'>
      <h1 className='text-sm text-white font-semibold px-2 py-2 rounded-sm
       bg-black bg-opacity-30'>Casual</h1>
     </div>
     <div className='w-full bg-black bg-opacity-40 absolute bottom-1.5 right-0 left-0 h-0
     flex justify-center items-center  
     overflow-hidden group-hover:h-[100%] group-hover:w-[100%] transition-all duration-500'>
    <div className="flex flex-col justify-center items-center">
        <h3 className="text-white font-lato text-[17px] md:text-md">CASUAL VIBE</h3>
        <Link href='/shop'>
        <button className="bg-black mb-10 mt-5
    px-5 py-3 border border-xl text-white border-black text-md
    hover:bg-white hover:text-black">SHOP COLLECTION</button>
        </Link>
        </div>
     
     </div>
    </div>
    <div className='group relative w-full h-full overflow-hidden'>
    <div className='overflow-hidden inline-block'>
      <img src="/afri.png" height='auto' width='auto' alt="children"  className='group-hover:scale-110
      duration-500 transition-transform'/>
     </div> 
     <div className='absolute top-5 group-hover:hidden left-4'>
      <h1 className='text-sm text-white font-semibold px-2 py-2 rounded-sm
       bg-black bg-opacity-30'>African</h1>
     </div>
     <div className='w-full bg-black bg-opacity-40 absolute bottom-1.5 right-0 left-0 h-0
     flex justify-center items-center  
     overflow-hidden group-hover:h-[100%] group-hover:w-[100%] transition-all duration-500'>
    <div className="flex flex-col justify-center items-center">
        <h3 className="text-white font-lato text-[17px] md:text-md">AFRICAN VIBE</h3>
        <Link href='/shop'>
        <button className="bg-black mb-10 mt-5
    px-5 py-3 border border-xl text-white border-black text-md
    hover:bg-white hover:text-black">SHOP COLLECTION</button>
        </Link>
        </div>
     
     </div>
    </div>
   
      </div>

       
   <div className="flex-col lg:flex-row gap-7 justify-center
   items-center lg:px-1 hidden">
   <div className="w-[375px] h-[460px] md:w-[500px] md:h-[600px] 
   lg:w-[350px] lg:h-[400px] xl:w-[500px] xl:h-[600px] overflow-hidden">
       <div className="relative group">
        <div className="group-hover:scale-110 transition-all duration-500">
        <img src="/continental.png" alt=""
        className="w-[375px] h-[460px] md:w-[500px] md:h-[600px] 
        lg:w-[350px] lg:h-[400px] xl:w-[500px] xl:h-[600px] absolute" />
        </div>
        
       </div>
       <div className="relative w-[375px] h-[460px] md:w-[500px] md:h-[600px] 
       lg:w-[350px] lg:h-[400px] xl:w-[500px] xl:h-[600px] bg-black/10
       flex justify-center items-end">
         <div className="flex flex-col justify-center items-center">
        <h3 className="text-white font-lato text-[17px] md:text-md">CONTINENTAL VIBE</h3>
        <Link href='shop'>
        <button className="bg-black mb-10 mt-5
    px-5 py-3 border border-xl text-white border-black text-md
    hover:bg-white hover:text-black">SHOP COLLECTION</button>
        </Link>
        </div>

        <div>
             
        </div>
       </div>
     </div>
   <div className="w-[375px] h-[460px] md:w-[500px] md:h-[600px] 
   lg:w-[350px] lg:h-[400px] xl:w-[500px] xl:h-[600px] overflow-hidden">
       <div className="relative group">
        <div className="group-hover:scale-110 transition-all duration-500">
        <img src="/casual.png" alt=""
        className="w-[375px] h-[460px] md:w-[500px] md:h-[600px] 
        lg:w-[350px] lg:h-[400px] xl:w-[500px] xl:h-[600px] absolute" />
        </div>
        
       </div>
       <div className="relative w-[375px] h-[460px] md:w-[500px] md:h-[600px] 
       lg:w-[350px] lg:h-[400px] xl:w-[500px] xl:h-[600px] bg-black/10
       flex justify-center items-end">
         <div className="flex flex-col justify-center items-center">
        <h3 className="text-white font-lato text-[17px] md:text-md">CASUAL VIBE</h3>
        <Link href='shop'>
        <button className="bg-black mb-10 mt-5
    px-5 py-3 border border-xl text-white border-black text-md
    hover:bg-white hover:text-black">SHOP COLLECTION</button>
        </Link>
        </div>

        <div>
             
        </div>
       </div>
     </div>
   <div className="w-[375px] h-[460px] md:w-[500px] md:h-[600px] 
   lg:w-[350px] lg:h-[400px] xl:w-[500px] xl:h-[600px] overflow-hidden">
       <div className="relative group">
        <div className="group-hover:scale-110 transition-all duration-500">
        <img src="/afri.png" alt=""
        className="w-[375px] h-[460px] md:w-[500px] md:h-[600px] 
        lg:w-[350px] lg:h-[400px] xl:w-[500px] xl:h-[600px] absolute" />
        </div>
        
       </div>
       <div className="relative w-[375px] h-[460px] md:w-[500px] md:h-[600px] 
       lg:w-[350px] lg:h-[400px] xl:w-[500px] xl:h-[600px] bg-black/10
       flex justify-center items-end">
         <div className="flex flex-col justify-center items-center">
        <h3 className="text-white font-lato text-[17px] md:text-md">AFRICAN VIBE</h3>
        <Link href='shop'>
        <button className="bg-black mb-10 mt-5
    px-5 py-3 border border-xl text-white border-black text-md
    hover:bg-white hover:text-black">SHOP COLLECTION</button>
        </Link>
        </div>

        <div>
             
        </div>
       </div>
     </div>

   
   </div>
     
     
     </section>
  )
}

export default Category