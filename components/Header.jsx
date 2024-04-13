
import { IoMail } from "react-icons/io5";
import Nav from "./Nav"
import Link from "next/link"

const Header  = () => {

 return (
  <header className="w-full fixed top-0 z-40">
      <div className="bg-black text-[#d2d0d0] py-1.5 px-3 font-lato
       w-full flex flex-row justify-center items-center 
       lg:gap-[20rem]">
      <Link href='/'>
      <h5 className="font-lato font-semibold text-[13px] md:text-[15px]">
        Free UK Delivery on all orders above £130</h5>
      </Link>

      <a className="hidden lg:inline-flex text-[#d6d5d5] flex-row
      justify-center items-center gap-2" 
     href="mailto:Uniteddevelopment83@gmail.com">
       <IoMail className="text-[#d6d5d5] mt-0.5"/>
      <h5 className="font-lato font-semibold text-[15px]">info@bevcouture.com</h5>
     </a>
      
      
      </div>
    <Nav  />
  </header>
 )

 
}

export default Header