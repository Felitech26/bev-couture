import Link from "next/link"
import Image from "next/image"

const Category = () => {
  return (
    <section className="pb-[5rem] overflow-hidden"> 
    <h5 className="mb-5 text-[30px] md:text-[40px] text-center
     uppercase">Shop By Categories</h5> 

     <div className="flex justify-center items-center">
     <h5 className="mb-10 px-2 font-lato text-md w-[600px] text-center">
       You will surely have something spectacular to wear, Just choose through 
       the varieties for your taste. Bev Couture has different range of classy 
       and elegant designs to suit your taste
     </h5>
     </div>

       
   <div className="flex flex-col lg:flex-row gap-7 justify-center
   items-center lg:px-1">
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