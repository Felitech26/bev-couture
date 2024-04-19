import Brands from "@/components/Brands";
import Category from "@/components/Category";
import Hero from "@/components/Hero";
import PopularDress from "@/components/PopularDress";
import Services from "@/components/Services";


export default function Home () {
  return (
    <main className="h-[500vh] md:h-[600vh]"> 
    <Hero/>
     <PopularDress />
     <Brands />
     <Category />
     <Services />
    
    </main>
  );
}
