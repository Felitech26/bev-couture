import Link from "next/link"
import Image from "next/image"

const Category = () => {
  return (
    <section className="pb-[5rem] px-[5rem]"> 
     <h5 className="mb-5 text-[30px] md:text-[40px] text-center
      uppercase">Shop By Categories</h5> 

      <div className="flex justify-center items-center">
      <h5 className="mb-7 px-2 font-lato text-lg w-[600px] text-center">
        You will surely have something spectacular to wear, Just choose through 
        the varieties for your taste. Bev Couture has different range of classy 
        and elegant designs to suit your taste
      </h5>
      </div>

      <div className="flex flex-col lg:flex-row justify-center items-center gap-7">
        <div className="group overflow-hidden">
        <div className="w-[500px] h-[600px] group-hover:scale-110 transition-all duration-500">
        <div className="absolute">
      <Image src={'/continental.png'}
       alt=""
       width={500}
       height={600} 
       className="object-cover w-[500px] h-[600px]"
      />
      </div>
      <div className="relative w-[500px] h-[600px] bg-black/25 
      flex justify-center items-end group-hover:-translate-y-7 
     transition-all duration-500">
        <div className="flex flex-col justify-center items-center 
        
        ">
        <h3 className="text-white font-lato text-md">CONTINENTAL VIBE</h3>
        <Link href='shop'>
        <button className="bg-black mb-10 mt-5
    px-5 py-3 border border-xl text-white border-black text-md
    hover:bg-white hover:text-black">SHOP COLLECTION</button>
        </Link>
        </div>
      </div>
        </div>
        </div>
        <div className="group overflow-hidden">
        <div className="w-[500px] h-[600px] group-hover:scale-110 transition-all duration-500">
        <div className="absolute">
      <Image src={'/casual.png'}
       alt=""
       width={500}
       height={600} 
       className="object-cover w-[500px] h-[600px]"
      />
      </div>
      <div className="relative w-[500px] h-[600px] bg-black/25 
      flex justify-center group-hover:-translate-y-7 
      transition-all duration-500 items-end">
        <div className="flex flex-col justify-center items-center">
        <h3 className="text-white font-lato text-md">CASUAL VIBE</h3>
        <Link href='shop'>
        <button className="bg-black mb-10 mt-5
    px-5 py-3 border border-xl text-white border-black text-md
    hover:bg-white hover:text-black">SHOP COLLECTION</button>
        </Link>
        </div>
      </div>
        </div>
        </div>
        <div className="group overflow-hidden">
        <div className="w-[500px] h-[600px] group-hover:scale-110 transition-all duration-500">
        <div className="absolute">
      <Image src={'/afri.png'}
       alt=""
       width={500}
       height={600} 
       className="object-cover w-[500px] h-[600px]"
      />
      </div>
      <div className="relative w-[500px] h-[600px] bg-black/25 
      flex justify-center items-end group-hover:-translate-y-7 
      transition-all duration-500">
        <div className="flex flex-col justify-center items-center">
        <h3 className="text-white font-lato text-md">AFRICAN VIBE</h3>
        <Link href='shop'>
        <button className="bg-black mb-10 mt-5
    px-5 py-3 border border-xl text-white border-black text-md
    hover:bg-white hover:text-black">SHOP COLLECTION</button>
        </Link>
        </div>
      </div>
        </div>
        </div>
      
      </div>
        
    
      
      
      </section>
  )
}

export default Category