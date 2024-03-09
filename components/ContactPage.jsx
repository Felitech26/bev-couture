import Image from "next/image"
import { CiLocationOn } from "react-icons/ci";
import { CiMail } from "react-icons/ci";
import { CiChat2 } from "react-icons/ci";

const ContactPage = () => {
  return (
<div className="h-[400vh] py-[8rem]                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      -">

<div>
<h5 className="text-center text-[30px] mb-10 font-light"> 
      Contact</h5>
      <Image src={'/africa.png'}
      width={1700}
      height={200}
      alt=""
      className="fixed"/>

<div className="container mx-auto h-[220vh] lg:h-[180vh] py-[5rem]
 mt-[12rem] relative bg-white">
  <div>
  <div className="flex flex-col font-lato lg:flex-row justify-center items-center 
  gap-[3rem] lg:gap-[2rem] xl:gap-[7rem]">
    <div className="flex flex-col justify-center items-center gap-1">
      <div className="bg-[#f4f1f2] w-[90px] h-[90px] rounded-[45px] 
      flex justify-center items-center mb-4">
        <CiLocationOn className="text-black text-[40px] font-bold" />
      </div>
      <h5 className="font-semibold text-lg">
      Store Address
      </h5>
      <h5 className="text-[#6d6d6d]">
      5-7 Wembley Hill Rd, Wembley  
      </h5>
      <h5 className="text-[#6d6d6d]">
      United Kingdom
      </h5>
    </div>
    <div className="flex flex-col justify-center items-center gap-1">
      <div className="bg-[#f1eeef] w-[90px] h-[90px] rounded-[55px] 
      flex justify-center items-center mb-4">
       <Image src={'/phone.svg'} 
       width={38}
       height={25}
       alt="" className="text-black "/>
      </div>
      <h5 className="font-semibold text-lg">
      Call Info
      </h5>
      <h5 className="text-[#6d6d6d]">
      Open a chat or give us call at   
      </h5>
      <h5 className="text-[#6d6d6d]">
      +44 (0) 149 495 6720
      </h5>
    </div>
    <div className="flex flex-col justify-center items-center gap-1">
      <div className="bg-[#f1eeef] w-[90px] h-[90px] rounded-[45px] 
      flex justify-center items-center mb-4">
        <CiMail className="text-black text-[40px] font-bold" />
      </div>
      <h5 className="font-semibold text-lg">
      Email Support 
      </h5>
      <h5 className="text-[#6d6d6d]">
      Sent mail to
      </h5>
      <a href="mailto:Uniteddevelopment83@gmail.com" className="text-[#6d6d6d]">
      info@bevcouture.com
      </a>
    </div>
    <div className="flex flex-col justify-center items-center gap-1">
      <div className="bg-[#f1eeef] w-[90px] h-[90px] rounded-[45px] 
      flex justify-center items-center mb-4">
        <CiChat2 className="text-black text-[40px] font-bold" />
      </div>
      <h5 className="font-semibold text-lg">
      Live Support 
      </h5>
      <h5 className="text-[#6d6d6d]">
      Live chat service 
      </h5>
      <h5 className="text-[#6d6d6d]">
      https://www.livechat.com
      </h5>
    </div>
    
  </div>
  <div className="py-[5rem] xl:px-[5rem]">
    <div className="w-full  md:h-[85vh] bg-[#f1eeef] flex flex-col 
    lg:flex-row">
      <div className="lg:w-[35%] flex flex-col justify-start items-center
      mt-[3rem] lg:mt-[10rem] mb-[3rem]">
        <h5 className="font-cormomorantGaramond text-[30px]
        lg:text-[40px]">Our Store</h5>
 <h5 className="text-center text-[18px] font-lato mt-10"> 
 5-7 Wembley Hill Rd, Wembley</h5>

<h5 className="text-center text-[18px] font-lato">info@bevcouture.com</h5>
<h5 className="text-center text-[18px] font-lato">+44 (0) 149 495 67206</h5>
      </div>
      <div >
        <Image src={'/store.png'}
        width={1000}
        height={700}
        priority
        alt=""
        className="h-full"
        
        />
      </div>
    </div>
  
  </div>
  </div>
</div>
</div>


     

  
       
     
       
      
      </div>
  )
}

export default ContactPage