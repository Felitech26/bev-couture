import Aunthentication from "./Aunthentication"
import Nav from "./Nav"
import Link from "next/link"

const Header  = () => {

 return (
  <header className="w-full fixed top-0 z-40">
      <div className="bg-black text-[#d2d0d0] py-2 px-3 font-lato
       w-full flex flex-row justify-between lg:justify-center items-center 
       lg:gap-[20rem] text-[15px]">
      <Link href='/'>
      Free UK Delivery on all orders above £130
      </Link>
      <div className="mr-2 hidden">
      <Aunthentication  />
      </div>
      
      </div>
    <Nav  />
  </header>
 )

 
}

export default Header