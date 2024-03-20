import { client } from "@/app/lib/sanity";
import Link from "next/link";
import PopularDressCarousel from "./PopularDressCarousel";

// get data
const getData = async () => {
  const query = `*[_type == 'product' && references(*[_type == 'category' && name == 'popular']._id, categories)] {
    _id,
      name,
      description,
      images,
      sizes,
      price,
      price_id,
      'slug': slug.current,
      'categories':categories[]-> {
      name }
  }`;
  const data = await client.fetch(query);
  return data;
}; 



const PopularDress = async () => {
  const bev = await getData();
  return (
    <section className="font-lato py-[5rem] px-[5rem]">
  <div >
   <h2 className="text-center text-[30px] md:text-[40px] font-medium
    font-cormomorantGaramond ">ICONIC MUST HAVES</h2>
   <p className="text-center font-lato text-[#2f2f2f]">Creativity and 
    sustainability are the driving forces behind the Bev Couture
     Clothing brand. </p>
     
     <div>
     <PopularDressCarousel bev={bev} />
     </div>
  

 

 
  
  </div>
   

  </section>
  )
};

export default PopularDress