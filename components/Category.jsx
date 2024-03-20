import Link from "next/link"
import Image from "next/image"

const Category = () => {
  return (
    <section className="mx-auto px-3"> 
     <h5 className="mb-10 text-[30px] md:text-[40px] text-center
      uppercase">Shop By Categories</h5> 
      <div className="flex flex-col lg:flex-row justify-center items-center gap-7">
      <div className="h-fit group ">
        <div className="relative w-[500px] lg:w-[320px] xl:w-[480px] overflow-hidden">
           <Image src={'/con.png'} 
           width={600}
           height={400}
           alt=""
           className="group-hover:scale-110 transition  duration-500"
            />
     <div className="absolute h-full w-full bg-black/20 flex items-center
     justify-center -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100
     transition-all duration-300">
      <div className="flex flex-col justify-center items-center">
      <h5 className="text-white text-[30px]">CONTINENTAL VIBE</h5>
        <Link href='shop'>
        <button className="mt-10 bg-black
    px-5 py-3 border border-xl text-white border-black text-lg
    hover:bg-white hover:text-black">SHOP COLLECTION</button>
        </Link>
      </div>
      
     
      </div>
        </div>
        </div> 
      <div className="h-fit group ">
        <div className="relative w-[500px] lg:w-[320px] xl:w-[480px] overflow-hidden">
           <Image src={'/casual.png'} 
           width={600}
           height={400}
           alt=""
           className="group-hover:scale-110 transition  duration-500"
            />
     <div className="absolute h-full w-full bg-black/20 flex items-center
     justify-center -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100
     transition-all duration-300">
      <div className="flex flex-col justify-center items-center">
      <h5 className="text-white text-[30px]">CASUAL VIBE</h5>
        <Link href='shop'>
        <button className="mt-10 bg-black
    px-5 py-3 border border-xl text-white border-black text-lg
    hover:bg-white hover:text-black">SHOP COLLECTION</button>
        </Link>
      </div>
      
     
      </div>
        </div>
        </div> 
      <div className="h-fit group ">
        <div className="relative w-[500px] lg:w-[320px] xl:w-[480px] overflow-hidden">
           <Image src={'/afri.png'} 
           width={600}
           height={400}
           alt=""
           className="group-hover:scale-110 transition  duration-500"
            />
     <div className="absolute h-full w-full bg-black/20 flex items-center
     justify-center -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100
     transition-all duration-300">
      <div className="flex flex-col justify-center items-center">
      <h5 className="text-white text-[30px]">AFRICAN VIBE</h5>
        <Link href='shop'>
        <button className="mt-10 bg-black
    px-5 py-3 border border-xl text-white border-black text-lg
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