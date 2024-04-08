import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

import { CiLocationOn } from "react-icons/ci";

import Link from "next/link";


const MyAccordion = () => {
  return (
    <Accordion type="single" collapsible className="w-full pl-3 pr-6 text-white">
    <AccordionItem value="item-1">
      <AccordionTrigger>Contact</AccordionTrigger>
      <AccordionContent>
       <div className="flex flex-col gap-3">
       <Link href='/' className="flex flex-row items-center font-lato gap-1
      text-[#8a8a8a]">
        <CiLocationOn className="text-[15px]"/>
        <h5>5-7 Wembley Hill Rd, Wembley </h5>
      </Link>
       <Link href='/' className="flex flex-row items-center font-lato gap-1
      text-[#8a8a8a]">
        <CiLocationOn className="text-[15px]"/>
        <h5>5-7 Wembley Hill Rd, Wembley </h5>
      </Link>
       <Link href='/' className="flex flex-row items-center font-lato gap-1
      text-[#8a8a8a]">
        <CiLocationOn className="text-[15px]"/>
        <h5>5-7 Wembley Hill Rd, Wembley </h5>
      </Link>
       <Link href='/' className="flex flex-row items-center font-lato gap-1
      text-[#8a8a8a]">
        <CiLocationOn className="text-[15px]"/>
        <h5>5-7 Wembley Hill Rd, Wembley </h5>
      </Link>
       </div>
      </AccordionContent>
    </AccordionItem>
    <AccordionItem value="item-2">
      <AccordionTrigger>Information</AccordionTrigger>
      <AccordionContent>
      <div className="flex flex-col gap-3">
       <Link href='/' className=" font-lato text-[#8a8a8a]">
        <h5>Specials</h5>
      </Link>
       <Link href='/' className=" font-lato text-[#8a8a8a]">
        <h5>New products</h5>
      </Link>
       <Link href='/' className=" font-lato text-[#8a8a8a]">
        <h5> Best sellers</h5>
      </Link>
       <Link href='/' className=" font-lato text-[#8a8a8a]">
        <h5>Terms and conditions</h5>
      </Link>
       <Link href='/' className=" font-lato text-[#8a8a8a]">
        <h5>About Our Shop</h5>
      </Link>
      
       </div>
      </AccordionContent>
    </AccordionItem>
    <AccordionItem value="item-3">
      <AccordionTrigger>Our Offers</AccordionTrigger>
      <AccordionContent>
      <div className="flex flex-col gap-3">
       <Link href='/' className="flex flex-row items-center font-lato gap-1
      text-[#8a8a8a]">
        <CiLocationOn className="text-[15px]"/>
        <h5>5-7 Wembley Hill Rd, Wembley </h5>
      </Link>
       <Link href='/' className="flex flex-row items-center font-lato gap-1
      text-[#8a8a8a]">
        <CiLocationOn className="text-[15px]"/>
        <h5>5-7 Wembley Hill Rd, Wembley </h5>
      </Link>
       <Link href='/' className="flex flex-row items-center font-lato gap-1
      text-[#8a8a8a]">
        <CiLocationOn className="text-[15px]"/>
        <h5>5-7 Wembley Hill Rd, Wembley </h5>
      </Link>
       <Link href='/' className="flex flex-row items-center font-lato gap-1
      text-[#8a8a8a]">
        <CiLocationOn className="text-[15px]"/>
        <h5>5-7 Wembley Hill Rd, Wembley </h5>
      </Link>
       </div>
      </AccordionContent>
    </AccordionItem>
    <AccordionItem value="item-4">
      <AccordionTrigger>Your Account</AccordionTrigger>
      <AccordionContent>
      <div className="flex flex-col gap-3">
       <Link href='/' className="flex flex-row items-center font-lato gap-1
      text-[#8a8a8a]">
        <CiLocationOn className="text-[15px]"/>
        <h5>5-7 Wembley Hill Rd, Wembley </h5>
      </Link>
       <Link href='/' className="flex flex-row items-center font-lato gap-1
      text-[#8a8a8a]">
        <CiLocationOn className="text-[15px]"/>
        <h5>5-7 Wembley Hill Rd, Wembley </h5>
      </Link>
       <Link href='/' className="flex flex-row items-center font-lato gap-1
      text-[#8a8a8a]">
        <CiLocationOn className="text-[15px]"/>
        <h5>5-7 Wembley Hill Rd, Wembley </h5>
      </Link>
       <Link href='/' className="flex flex-row items-center font-lato gap-1
      text-[#8a8a8a]">
        <CiLocationOn className="text-[15px]"/>
        <h5>5-7 Wembley Hill Rd, Wembley </h5>
      </Link>
       </div>
      </AccordionContent>
    </AccordionItem>
  </Accordion>
  
  )
}

export default MyAccordion

