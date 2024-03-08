'use client';
import AddToCartBtn from "./AddToCartBtn";

import { urlFor } from "@/app/lib/sanity";
import Image from "next/image";
import Link from "next/link";
import { GoEye } from "react-icons/go"


const Bevs = ({bevs}) => {
  const pupolarDressCart = bevs.categories.find((bevs) => 
  bevs.name === 'popular');

  return (
    <div>
      <div className=" h-[450px] mt-10 overflow-hidden relative group transition">
        <div className="w-full h-full flex justify-center items-center">
        <div className="w-[360px] flex justify-center items-center">
        <Image 
         className="group-hover:scale-95 transition duration-500"
         src={urlFor(bevs.images[0]).url()} 
         width={340}
         height={240}
         alt=""
         />
        </div>

         </div>


         {/* btn group */}
         <div className="absolute top-0 left-0 -right-11 bottom-0 flex 
         group-hover:right-2
         justify-center items-center gap-[10px] opacity-0 
         group-hover:opacity-100 transition-all duration-300">
          <AddToCartBtn 
          price_id={bevs.price_id}
          name={bevs.name}
          currency='GBP'
          description={bevs.description}
          images={bevs.images}
          price={bevs.price}
          />
          <Link href={`/product/${bevs.slug}`}>
             <button className="py-3 px-5 text-2xl bg-gray-900 
             text-white">
              <GoEye />
             </button>
          </Link>
         </div>
      </div>
      <h5 className="text-center text-black mb-[1px] text-xl font-normal">{bevs.name}</h5>
      <div className="text-center text-lg font-normal  text-accent gap-3
      ">£{bevs.price}</div>
      <div className="text-center mt-6 md:hidden l">
      <AddToCartBtn 
          price_id={bevs.price_id}
          name={bevs.name}
          currency='GBP'
          description={bevs.description}
          images={bevs.images}
          price={bevs.price}
          />
      </div>
    </div>
  )
} 

export default Bevs