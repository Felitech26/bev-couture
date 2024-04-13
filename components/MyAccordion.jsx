import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

import { CiLocationOn } from "react-icons/ci";
import { IoCallOutline } from "react-icons/io5";
import { CiMail } from "react-icons/ci";
import { IoMdGlobe } from "react-icons/io";

import Link from "next/link";

import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";



const MyAccordion = () => {
  return (
    <Accordion type="single" collapsible className="w-full text-[#d8d5d5] md:hidden">
    <AccordionItem value="item-1">
      <AccordionTrigger>Contact</AccordionTrigger>
      <AccordionContent>
       <div className="flex flex-col gap-3">
       <a href='/' className="flex flex-row items-center font-lato gap-1 w-[240px]
      text-[#8a8a8a] hover:text-accent hover:translate-x-3 transition-all duration-500">
        <CiLocationOn className="text-[15px]"/>
        <h5 className="font-medium">5-7 Wembley Hill Rd, Wembley - UK </h5>
      </a>
       <a href='/' className="flex flex-row items-center font-lato gap-1 w-[155px]
      text-[#8a8a8a] hover:text-accent hover:translate-x-3 transition-all duration-500">
        <IoCallOutline className="text-[15px]"/>
        <h5>+44 (0) 149 495 6720</h5>
      </a>
       <a href='mailto:Uniteddevelopment83@gmail.com' className="flex flex-row 
       items-center font-lato gap-1 w-[155px] text-[#8a8a8a] 
       hover:text-accent hover:translate-x-3 transition-all duration-500">
        <CiMail  className="text-[15px] mt-0.5"/>
        <h5 > info@bevcouture.com</h5>
      </a>
       <a href='/' className="flex flex-row items-center font-lato gap-1 w-[155px]
      text-[#8a8a8a] hover:text-accent hover:translate-x-3 transition-all duration-500">
        <IoMdGlobe className="text-[15px]"/>
        <h5>www.bevcouture.com</h5>
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
      </AccordionContent>
    </AccordionItem>
    <AccordionItem value="item-2">
      <AccordionTrigger>Information</AccordionTrigger>
      <AccordionContent>
      <div className="flex flex-col gap-3">
       <a href='/' className=" font-lato text-[#8a8a8a] w-[40px]
       hover:text-accent hover:translate-x-3 transition-all duration-500">
        <h5>Specials</h5>
      </a>
       <a href='/' className=" font-lato text-[#8a8a8a] w-[90px]
       hover:text-accent hover:translate-x-3 transition-all duration-500">
        <h5>New products</h5>
      </a>
       <a href='/' className=" font-lato text-[#8a8a8a] w-[75px]
       hover:text-accent hover:translate-x-3 transition-all duration-500">
        <h5> Best sellers</h5>
      </a>
       <a href='/' className=" font-lato text-[#8a8a8a] w-[130px]
       hover:text-accent hover:translate-x-3 transition-all duration-500">
        <h5>Terms and conditions</h5>
      </a>
       <a href='/' className=" font-lato text-[#8a8a8a] w-[100px]
       hover:text-accent hover:translate-x-3 transition-all duration-500">
        <h5>About Our Shop</h5>
      </a>
      
       </div>
      </AccordionContent>
    </AccordionItem>
    <AccordionItem value="item-3">
      <AccordionTrigger>Services</AccordionTrigger>
      <AccordionContent>
      <div className="flex flex-col gap-3">
      <Link href='/' className=" font-lato text-[#8a8a8a] w-[10px]
      hover:text-accent hover:translate-x-3 transition-all duration-500">
        <h5>Faq</h5>
      </Link>
       <Link href='/' className=" font-lato text-[#8a8a8a] w-[20px]
       hover:text-accent hover:translate-x-3 transition-all duration-500">
        <h5>Shipping</h5>
      </Link>
       <Link href='/' className=" font-lato text-[#8a8a8a] w-[20px]
       hover:text-accent hover:translate-x-3 transition-all duration-500">
        <h5>Tracking</h5>
      </Link>
       <Link href='/' className=" font-lato text-[#8a8a8a] w-[20px]
       hover:text-accent hover:translate-x-3 transition-all duration-500">
        <h5>Returns</h5>
      </Link>
       <Link href='/' className=" font-lato text-[#8a8a8a] w-[70px]
       hover:text-accent hover:translate-x-3 transition-all duration-500">
        <h5>Our Team</h5>
      </Link>
       </div>
      </AccordionContent>
    </AccordionItem>
    <AccordionItem value="item-4">
      <AccordionTrigger>Your Account</AccordionTrigger>
      <AccordionContent>
      <div className="flex flex-col gap-3">
      <a href='/' className=" font-lato text-[#8a8a8a]
      hover:text-accent hover:translate-x-3 transition-all duration-500">
        <h5>Addresses</h5>
      </a>
       <a href='/' className=" font-lato text-[#8a8a8a] w-[70px]
       hover:text-accent hover:translate-x-3 transition-all duration-500">
        <h5>Credit slips</h5>
      </a>
       <a href='/' className=" font-lato text-[#8a8a8a] w-[40px]
       hover:text-accent hover:translate-x-3 transition-all duration-500">
        <h5>Orders</h5>
      </a>
       <a href='/' className=" font-lato text-[#8a8a8a] w-[85px]
       hover:text-accent hover:translate-x-3 transition-all duration-500">
        <h5>Personal info</h5>
      </a>
       <a href='/' className=" font-lato text-[#8a8a8a] w-[40px]
       hover:text-accent hover:translate-x-3 transition-all duration-500">
        <h5>Vouchers</h5>
      </a>
       </div>
      </AccordionContent>
    </AccordionItem>
  </Accordion>
  
  )
}

export default MyAccordion

