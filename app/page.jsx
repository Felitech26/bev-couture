import Brands from "@/components/Brands";
import Category from "@/components/Category";
import Hero from "@/components/Hero";
import PopularDress from "@/components/PopularDress";
import Services from "@/components/Services";


export default function Home () {
  return (
    <main className="h-[700vh] md:h-[785vh]"> 
    <Hero/>
     <PopularDress />
     <Services />
     <Category />
     <Brands />
     
    
    </main>
  );
}
