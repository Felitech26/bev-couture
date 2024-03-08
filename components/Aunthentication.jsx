import {RegisterLink, LoginLink,LogoutLink} from "@kinde-oss/kinde-auth-nextjs/components";
import {getKindeServerSession} from "@kinde-oss/kinde-auth-nextjs/server";
import { RxPerson } from "react-icons/rx";

const Aunthentication = async () => {

  const { isAuthenticated } = getKindeServerSession();
  return (
    <div className="flex flex-row justify-center items-center gap-2
       lg:text-white">
      {await isAuthenticated() ? (
        <div className=" lg:inline-flex">
           <LogoutLink className="text-sm" >Logout</LogoutLink>
        </div>
       
      ): (
        <div className="text-[19px] lg:inline-flex" >
        <LoginLink><RxPerson /></LoginLink>
           <RegisterLink className="hidden">Sign up</RegisterLink>
     </div>
      )}

      <div className="flex flex-row  gap-2
      lg:text-white text-[20px] "> 
     
      </div>
      </div>
  )
}

export default Aunthentication