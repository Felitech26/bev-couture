import Brands from "@/components/Brands";
import Category from "@/components/Category";
import Gallery from "@/components/Gallery";
import Hero from "@/components/Hero";
import PopularDress from "@/components/PopularDress";


export default function Home() {
  return (
    <main className="h-[700vh]"> 
    <Hero/>
     <PopularDress />
     <Category />
     <Brands />
     <Gallery />
    </main>
  );
}
