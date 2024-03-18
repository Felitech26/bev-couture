
import { IoMail } from "react-icons/io5";
import Nav from "./Nav"
import Link from "next/link"

const Header  = () => {

 return (
  <header className="w-full fixed top-0 z-40">
      <div className="bg-black text-[#d2d0d0] py-2 px-3 font-lato
       w-full flex flex-row justify-center items-center 
       lg:gap-[20rem] text-[15px]">
      <Link href='/'>
      Free UK Delivery on all orders above £130
      </Link>

      <a className="hidden lg:inline-flex text-[#d6d5d5] flex-row
      justify-center items-center gap-2" 
     href="mailto:Uniteddevelopment83@gmail.com">
       <IoMail className="text-[#d6d5d5]"/>
      info@bevcouture.com
     </a>
      
      
      </div>
    <Nav  />
  </header>
 )

 
}

export default Header