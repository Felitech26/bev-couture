import Brands from "@/components/Brands";
import Category from "@/components/Category";
import Hero from "@/components/Hero";
import PopularDress from "@/components/PopularDress";
import Services from "@/components/Services";


export default function Home () {
  return (
    <main className="max-h-[640vh] md:max-h-[750vh] lg:max-h-[605vh] xl:max-h-[615vh]"> 
    <Hero/>
     <PopularDress />
     <Services />
     <Brands />
     <Category />
     
     
    
    </main>
  );
}
