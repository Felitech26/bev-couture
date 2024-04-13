
import MyAccordion from "./MyAccordion";
import Link from "next/link"
import Image from "next/image";
import { CiLocationOn } from "react-icons/ci";
import { IoCallOutline } from "react-icons/io5";
import { CiMail } from "react-icons/ci";
import { IoMdGlobe } from "react-icons/io";

import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";



const Footer = () => {

  
  return (
     <footer className="w-full h-[110vh] md:h-[110vh] lg:h-[105vh] xl:h-[70vh]
      bg-[#191818] overflow-hidden pt-7 bottom-0">
      <section className="container mx-auto overflow-hidden">
      <div className="flex flex-row justify-center items-center pb-[3rem]">
      <span className="w-[60px] ml-1 h-[1px] bg-[#666363] font-thin"></span>
      <Link href='/'>
          <Image src={'/logo.svg'}
          width={170}
          height={150}
          alt=""
          />
          </Link>
          <span className="w-[60px] mt-1 h-[1px] bg-[#666363] font-thin"></span>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 md:gap-[4rem]">
        <div className="hidden md:inline-block">
          <h5 className="text-[16px] mb-7 font-lato font-semibold text-white">Get in Touch</h5>
          <div className="flex flex-col gap-3">
       <a href='/' className="flex flex-row items-center gap-1 w-[280px]
      text-[#8a8a8a] hover:text-accent hover:translate-x-3 transition-all duration-500">
        <CiLocationOn className="text-[15px]"/>
        <h5 className="font-lato font-bold">5-7 Wembley Hill Rd, Wembley - UK </h5>
      </a>
       <a href='/' className="flex flex-row items-center font-lato gap-1 w-[175px]
      text-[#8a8a8a] hover:text-accent hover:translate-x-3 transition-all duration-500">
        <IoCallOutline className="text-[15px]"/>
        <h5 className="font-lato font-bold">+44 (0) 149 495 6720</h5>
      </a>
       <a href='mailto:Uniteddevelopment83@gmail.com' className="flex flex-row 
       items-center font-lato gap-1 w-[155px] text-[#8a8a8a] 
       hover:text-accent hover:translate-x-3 transition-all duration-500">
        <CiMail  className="text-[15px] mt-0.5"/>
        <h5 className="font-lato font-bold"> info@bevcouture.com</h5>
      </a>
       <a href='/' className="flex flex-row items-center font-lato gap-1 w-[155px]
      text-[#8a8a8a] hover:text-accent hover:translate-x-3 transition-all duration-500">
        <IoMdGlobe className="text-[15px]"/>
        <h5 className="font-lato font-bold">www.bevcouture.com</h5>
      </a>
      <div className=" flex flex-row text-[#8a8a8a] gap-3 w-[155px] mt-2">
      <a href="/" className="px-3 py-3 border border-sm rounded-full 
      transition-all duration-500
      hover:text-accent hover:border-accent
       text-[#8a8a8a] border-[#8a8a8a]">
      <FaInstagram className="text-[13px]" />
      </a>
      <a href="/" className="px-3 py-3 border border-sm rounded-full 
      transition-all duration-500
      hover:text-accent hover:border-accent
       text-[#8a8a8a] border-[#8a8a8a]">
      <FaXTwitter className="text-[13px]" />
      </a>
      <a href="/" className="px-3 py-3 border border-sm rounded-full 
      transition-all duration-500
      hover:text-accent hover:border-accent
       text-[#8a8a8a] border-[#8a8a8a]">
      <FaFacebookF className="text-[13px]" />
      </a>
      <a href="/" className="px-3 py-3 border border-sm rounded-full 
      transition-all duration-500 
      hover:text-accent hover:border-accent
       text-[#8a8a8a] border-[#8a8a8a]">
      <FaTiktok className="text-[13px]" />
      </a>
      </div>
       </div>
        </div>
        <div className="ml-[5rem] hidden md:inline-block">
      <h5 className="text-[16px] mb-7 font-lato font-semibold text-white">Services</h5>
        <div className="flex flex-col gap-3">
      <Link href='/' className=" font-lato text-[#8a8a8a] w-[10px]
      hover:text-accent hover:translate-x-3 transition-all duration-500">
        <h5 className="font-lato font-bold">FAQ</h5>
      </Link>
       <Link href='/' className=" font-lato text-[#8a8a8a] w-[20px]
       hover:text-accent hover:translate-x-3 transition-all duration-500">
        <h5 className="font-lato font-bold">Shipping</h5>
      </Link>
       <Link href='/' className=" font-lato text-[#8a8a8a] w-[20px]
       hover:text-accent hover:translate-x-3 transition-all duration-500">
        <h5 className="font-lato font-bold">Tracking</h5>
      </Link>
       <Link href='/' className=" font-lato text-[#8a8a8a] w-[20px]
       hover:text-accent hover:translate-x-3 transition-all duration-500">
        <h5 className="font-lato font-bold">Returns</h5>
      </Link>
       <Link href='/' className=" font-lato text-[#8a8a8a] w-[70px]
       hover:text-accent hover:translate-x-3 transition-all duration-500">
        <h5 className="font-lato font-bold">Our Team</h5>
      </Link>
       </div>
      </div>
      <div className="hidden md:inline-block">
      <h5 className="text-[16px] mb-7 font-lato font-semibold text-white">Services</h5>
        <div className="flex flex-col gap-3">
       <a href='/' className=" font-lato text-[#8a8a8a] w-[40px]
       hover:text-accent hover:translate-x-3 transition-all duration-500">
        <h5 className="font-lato font-bold">Specials</h5>
      </a>
       <a href='/' className=" font-lato text-[#8a8a8a] w-[110px]
       hover:text-accent hover:translate-x-3 transition-all duration-500">
        <h5 className="font-lato font-bold" >New products</h5>
      </a>
       <a href='/' className=" font-lato text-[#8a8a8a] w-[90px]
       hover:text-accent hover:translate-x-3 transition-all duration-500">
        <h5 className="font-lato font-bold"> Best sellers</h5>
      </a>
       <a href='/' className=" font-lato text-[#8a8a8a] w-[160px]
       hover:text-accent hover:translate-x-3 transition-all duration-500">
        <h5 className="font-lato font-bold">Terms and conditions</h5>
      </a>
       <a href='/' className=" font-lato text-[#8a8a8a] w-[120px]
       hover:text-accent hover:translate-x-3 transition-all duration-500">
        <h5 className="font-lato font-bold">Personal Styling </h5>
      </a>
       <a href='/' className=" font-lato text-[#8a8a8a] w-[120px]
       hover:text-accent hover:translate-x-3 transition-all duration-500">
        <h5 className="font-lato font-bold">About Our Shop</h5>
      </a>
      
       </div>
      </div>
      <div className="flex flex-row md:hidden mb-5 text-[#8a8a8a] 
     gap-3">
      <a href="/" className="px-3 py-3 border border-sm rounded-full 
      transition-all duration-500
      hover:text-accent hover:border-accent
       text-[#8a8a8a] border-[#8a8a8a]">
      <FaInstagram className="text-[13px]" />
      </a>
      <a href="/" className="px-3 py-3 border border-sm rounded-full 
      transition-all duration-500
      hover:text-accent hover:border-accent
       text-[#8a8a8a] border-[#8a8a8a]">
      <FaXTwitter className="text-[13px]" />
      </a>
      <a href="/" className="px-3 py-3 border border-sm rounded-full 
      transition-all duration-500
      hover:text-accent hover:border-accent
       text-[#8a8a8a] border-[#8a8a8a]">
      <FaFacebookF className="text-[13px]" />
      </a>
      <a href="/" className="px-3 py-3 border border-sm rounded-full 
      transition-all duration-500 
      hover:text-accent hover:border-accent
       text-[#8a8a8a] border-[#8a8a8a]">
      <FaTiktok className="text-[13px]" />
      </a>
      </div>
       
      <div className="md:hidden mb-[2rem]">
      <MyAccordion />
      </div>

      <div className="flex flex-col mt-5 md:mt-0 gap-3">
       <h5 className="text-[#dddbdb] font-medium 
      font-cormomorantGaramond text-[20px]">
        Sign up to our Newsletter</h5>
        <div >
          <div >
          <input 
      type="email" placeholder="Email Address"
      
      className="border border-solid absolute 
  py-3 px-3 md:px-[2rem] w-[345px] bg-[#121111] lg:w-[380px] 
   outline-none border-[#141313] text-lg placeholder:font-cormomorantGaramond
   md:text-md text-white placeholder:text-white  placeholder:text-md"/>
          </div>
    

<a href="mailto:Uniteddevelopment83@gmail.com" >
   <CiMail className="text-[26px] relative text-white -right-[19rem] mt-3.5" />
   </a>
    </div>
      <div className="flex flex-row gap-3 mt-[2rem]">
      <div className="w-[45px] h-[30px] md:w-[80px] md:h-[40px] 
      bg-white flex justify-center items-center px-2">
      <Image src={'/money.png'}
      width={100}
      height={50}
      alt="" 
      className="w-[80px]"/>
      </div>
      <div className="w-[45px] h-[30px] md:w-[80px] md:h-[40px]
       bg-white flex justify-center items-center px-2">
      <Image src={'/visa.png'}
      width={100}
      height={50}
      alt="" 
      className="w-[80px]"/>
      </div>

      <div className="w-[45px] h-[30px] md:w-[80px] md:h-[40px]
       bg-white flex justify-center items-center px-2 pt-1">
      <Image src={'/google.png'}
      width={100}
      height={50}
      alt="" 
      className="w-[80px]"/>
      </div>
      
      <div className="w-[45px] h-[30px] md:w-[80px] md:h-[40px] 
      bg-white flex justify-center items-center px-2 pt-1">
      <Image src={'/apple-pay.png'}
      width={100}
      height={50}
      alt="" 
      className="w-[80px]"/>
      </div>
     </div>
        </div>
        
      </div>
      </section>
     </footer>
  )
}

export default Footer