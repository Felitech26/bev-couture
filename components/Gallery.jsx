import Image from "next/image"


const Gallery = () => {
  return (
    <section className="px-[2rem] py-[5rem]">
      <div>
        <h5 className="text-[30px] mb-10 group-hover:scale-110 transition-all duration-500">
          Gallery
        </h5>
      </div>

      <div className="grid grid-cols-3 md:grid-cols-3 xl:grid-cols-6 justify-center items-center gap-4 lg:gap-7">
      <div className="h-fit group ">
        <div className="relative w-full overflow-hidden">
           <Image src={'/gallery2.png'} 
           width={350}
           height={200}
           alt=""
           className="group-hover:scale-110 transition-all duration-500"
            />
        </div>
        </div> 
      <div className="h-fit group ">
        <div className="relative w-full overflow-hidden">
           <Image src={'/gallery2.png'} 
           width={350}
           height={200}
           alt=""
           className="group-hover:scale-110 transition-all duration-500"
            />
        </div>
        </div> 
      <div className="h-fit group ">
        <div className="relative w-full overflow-hidden">
           <Image src={'/gallery2.png'} 
           width={350}
           height={200}
           alt=""
           className="group-hover:scale-110 transition-all duration-500"
            />
        </div>
        </div> 
      <div className="h-fit group ">
        <div className="relative w-full overflow-hidden">
           <Image src={'/gallery2.png'} 
           width={350}
           height={200}
           alt=""
           className="group-hover:scale-110 transition-all duration-500"
            />
        </div>
        </div> 
      <div className="h-fit group ">
        <div className="relative w-full overflow-hidden">
           <Image src={'/gallery2.png'} 
           width={350}
           height={200}
           alt=""
           className="group-hover:scale-110 transition-all duration-500"
            />
        </div>
        </div> 
      <div className="h-fit group ">
        <div className="relative w-full overflow-hidden">
           <Image src={'/gallery2.png'} 
           width={350}
           height={200}
           alt=""
           className="group-hover:scale-110 transition-all duration-500"
            />
        </div>
        </div> 
     
        </div> 
    </section>
  )
}

export default Gallery