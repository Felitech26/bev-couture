import Link from "next/link"
import Image from "next/image"

const Category = () => {
  return (
    <section className="pb-[5rem]"> 
     <h5 className="mb-5 text-[30px] md:text-[40px] text-center
      uppercase">Shop By Categories</h5> 

      <div className="flex justify-center items-center">
      <h5 className="mb-7 px-2 font-lato text-lg w-[600px] text-center">
        You will surely have something spectacular to wear, Just choose through 
        the varieties for your taste. Bev Couture has different range of classy 
        and elegant designs to suit your taste
      </h5>
      </div>

        
    <div className="flex flex-col lg:flex-row gap-7 justify-center
    items-center px-[5rem]">
    <div className="w-[500px] h-[600px] lg:w-[350px] lg:h-[400px] xl:w-[500px]
     xl:h-[600px] overflow-hidden">
        <div className="relative group">
         <img src="/continental.png" alt=""
         className="w-[500px] h-[600px] lg:h-[400px] xl:h-[600px]  absolute" />
        </div>
        <div className="w-full h-[600px] lg:h-[400px] xl:h-[600px] relative bg-black/30">
         <div>
               Come Home
         </div>
        </div>
      </div>
    <div className="w-[500px] h-[600px] lg:w-[350px] lg:h-[400px] xl:w-[500px]
     xl:h-[600px] overflow-hidden">
        <div className="relative">
         <img src="/continental.png" alt=""
         className="w-[500px] h-[600px] lg:h-[400px] xl:h-[600px]  absolute" />
        </div>
        <div className="w-full h-[600px] lg:h-[400px] xl:h-[600px] relative bg-black/30">
         <div>
               Come Home
         </div>
        </div>
      </div>
    <div className="w-[500px] h-[600px] lg:w-[350px] lg:h-[400px] xl:w-[500px]
     xl:h-[600px] overflow-hidden">
        <div className="relative">
         <img src="/continental.png" alt=""
         className="w-[500px] h-[600px] lg:h-[400px] xl:h-[600px]  absolute" />
        </div>
        <div className="w-full h-[600px] lg:h-[400px] xl:h-[600px] relative bg-black/30">
         <div>
               Come Home
         </div>
        </div>
      </div>
    
    </div>
      
      
      </section>
  )
}

export default Category