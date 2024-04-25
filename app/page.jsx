import Brands from "@/components/Brands";
import Category from "@/components/Category";
import Hero from "@/components/Hero";
import PopularDress from "@/components/PopularDress";
import Services from "@/components/Services";


export default function Home () {
  return (
    <main className="max-h-[650vh] md:max-h-[760vh] lg:max-h-[610vh] xl:max-h-[625vh]"> 
    <Hero/>
     <PopularDress />
     <Services />
     <Brands />
     <Category />
     
     
    
    </main>
  );
}
