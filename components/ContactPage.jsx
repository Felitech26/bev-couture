import Image from "next/image"
import { CiLocationOn } from "react-icons/ci";
import { CiMail } from "react-icons/ci";
import { CiChat2 } from "react-icons/ci";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";


const ContactPage = () => {
  return (
<div className="sm:h-[400vh] md:h-[430vh] lg:h-[400vh] py-[8rem]                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      -">

<div>
<h5 className="text-center text-[30px] mb-10 font-light"> 
      Contact</h5>
      <Image src={'/africa.png'}
      width={1700}
      height={700}
      alt=""
      className="fixed"/>

<div className="container mx-auto h-[300vh] sm:h-[340vh] md:h-[370vh] lg:h-[230vh] xl:h-[235vh] py-[5rem]
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
  <div className="py-[4rem] md:py-[14rem] lg:py-[5rem] xl:px-[5rem]">
    <div className="w-full md:h-[85vh] bg-[#f1eeef] flex flex-col 
    lg:flex-row">
      <div className="lg:w-[40%] flex flex-col justify-start items-center
      mt-[3rem] lg:mt-[10rem] mb-[3rem]">
        <h5 className="font-cormomorantGaramond text-[30px]
        ">Our Store</h5>
 <h5 className="text-center text-[16px] text-[#6d6d6d] font-lato mt-3"> 
 5-7 Wembley Hill Rd, Wembley</h5>

<h5 className="text-center text-[#6d6d6d] text-[16px] font-lato">info@bevcouture.com</h5>
<h5 className="text-center text-[#6d6d6d] text-[16px] font-lato mb-[3rem]">+44 (0) 149 495 67206</h5>

<h5 className="font-cormomorantGaramond text-[30px] 
">Opening Hours</h5>
<h5  className="text-center text-[#6d6d6d] text-[16px] font-lato mt-3">Monday to Friday 8am to 5pm, Australian </h5>
<h5  className="text-center text-[#6d6d6d] text-[16px] font-lato">Eastern Standard Time. </h5>

      </div>
      <div>
        <Image src={'/store.png'}
        width={1000}
        height={700}
        priority
        alt=""
        className="h-full w-full"
        
        />
      </div>
    </div>
  
  </div>
  <div>


  </div>

  <div className="w-full h-full py-[5rem] sm:px-[3rem] xl:px-[5rem]
  flex flex-row justify-center items-center gap-[6rem]">
    <div>
    <h3 className="font-semibold mb-6 text-[30px]">Get In Touch</h3>
    <form className="flex-1 flex flex-col gap-6 w-full mx-auto">
    <div className="flex flex-col lg:flex-row gap-y-9 lg:gap-x-9 ">
    <input type="text" placeholder="Name"className="border border-solid
    py-3 px-6 w-[345px] sm:w-[500px] lg:w-[320px] outline-none border-black/50
     text-lg placeholder:text-[#6b6a6a] placeholder:text-md"/>
    <input type="text" placeholder="Email"  className="border border-solid
    py-3 px-6 w-[345px] sm:w-[500px] lg:w-[320px] outline-none border-black/50
    text-lg placeholder:text-[#6b6a6a] placeholder:text-md "/>
    </div>
    <input type="text" placeholder="Phone Number"   className=" border border-solid
    py-3 px-6 outline-none border-black/50 text-lg placeholder:text-[#6b6a6a] 
    placeholder:text-md w-[345px] sm:w-[500px] lg:w-[676px]"/>
    <textarea placeholder="Message"  className="border border-solid
    py-3 px-6 outline-none border-black/50 text-lg placeholder:text-[#6b6a6a] 
    placeholder:text-md w-[345px] sm:w-[500px] h-[180px] lg:w-[676px]">     
    </textarea>
    </form>
    <a href="mailto:Uniteddevelopment83@gmail.com">
    <button className="mt-10 bg-black
    px-5 py-3 border border-xl text-white border-black text-lg
    hover:bg-white hover:text-black">Send Message</button>
    </a>
    
    </div>

    <div className="mt-10 hidden xl:inline-block">
      <h1 className="">Welcome To</h1>
      <h1>  <span className="text-accent">Bev </span>Couture</h1>
      <h3 className="mt-2 mb-3 text-[30px]">Our Scocials</h3>
      <div className=" flex flex-row text-[23px] text-accent gap-3">
       <FaInstagram />
       <FaXTwitter />
       <FaFacebook/>
       <FaTiktok />
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