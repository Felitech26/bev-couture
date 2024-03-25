import Image from "next/image"
import { Swiper, SwiperSlide } from "swiper"





const Gallery = () => {
  return (
    <div className="px-3 hidden">


     
      <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 justify-center items-center gap-4 lg:gap-7">
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
    </div>
  )
}

export default Gallery