
import MyAccordion from "./MyAccordion";
import Link from "next/link"
import Image from "next/image";
import { CiLocationOn } from "react-icons/ci";
import { IoCallOutline } from "react-icons/io5";
import { CiMail } from "react-icons/ci";
import { IoMdGlobe } from "react-icons/io";



const Footer = () => {

  
  return (
    <footer className="w-screen bg-[#171617] h-[100vh] md:h-[80vh] bottom-0">
      <div className="px-3 md:px-10 flex flex-col justify-center items-center">
        <div className="flex md:justify-center items-center py-10 flex-col">
          <Link href='/'>
          <Image src={'/logo.svg'}
          width={200}
          height={150}
          alt=""/>
          </Link>
        </div>
        <div className="flex flex-col justify-center items-center pb-[4rem]">
        <input 
      type="text" placeholder="Email Address"
      
      className="border border-solid absolute 
  py-4 px-5 md:px-[3rem] w-[345px] bg-[#1f1f1f] sm:w-[500px] lg:w-[480px]
   outline-none border-black/10 text-sm
   md:text-md  text-accent/60 placeholder:text-accent/60 placeholder:text-md"/>

   <a href="mailto:Uniteddevelopment83@gmail.com" >
   <CiMail className="text-[20px] md:text-[25px] relative text-accent/60 -right-[9rem] md:-right-[11rem]" />
   </a>

   </div>
   <div className="container mx-auto hidden md:inline-block">
   <div className="flex flex-col gap-3 px-6">
  <a href='/' className="flex flex-row items-center font-lato gap-1 w-[290px]
      text-[#8a8a8a] hover:text-accent hover:translate-x-3 transition-all duration-500">
        <CiLocationOn className="text-[15px]"/>
        <h5>5-7 Wembley Hill Rd, Wembley - UK </h5>
      </a>
       <a href='/' className="flex flex-row items-center font-lato gap-1 w-[200px]
      text-[#8a8a8a] hover:text-accent hover:translate-x-3 transition-all duration-500">
        <IoCallOutline className="text-[15px]"/>
        <h5>+44 (0) 149 495 6720</h5>
      </a>
       <a href='mailto:Uniteddevelopment83@gmail.com' className="flex flex-row 
       items-center font-lato gap-1 w-[200px] text-[#8a8a8a] 
       hover:text-accent hover:translate-x-3 transition-all duration-500">
        <CiMail  className="text-[15px] mt-0.5"/>
        <h5> info@bevcouture.com</h5>
      </a>
       <a href='/' className="flex flex-row items-center font-lato gap-1 w-[200px]
      text-[#8a8a8a] hover:text-accent hover:translate-x-3 transition-all duration-500">
        <IoMdGlobe className="text-[15px]"/>
        <h5>www.bevcouture.com</h5>
      </a>
  </div>
   </div>
   
    
      </div>
      
      <MyAccordion />
      </footer>
  )
}

export default Footer