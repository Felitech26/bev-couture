import Brands from "@/components/Brands";
import Category from "@/components/Category";
import Hero from "@/components/Hero";
import PopularDress from "@/components/PopularDress";


export default function Home() {
  return (
    <main className="h-[4000px]"> 
    <Hero/>
     <PopularDress />
     <Brands />
     <Category />
    </main>
  );
}
