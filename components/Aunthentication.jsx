import {RegisterLink, LoginLink,LogoutLink} from "@kinde-oss/kinde-auth-nextjs/components";
import {getKindeServerSession} from "@kinde-oss/kinde-auth-nextjs/server";
import { RxPerson } from "react-icons/rx";

const Aunthentication = async () => {

  const { isAuthenticated } = getKindeServerSession();
  return (
    <div className="flex flex-row justify-center items-center
       lg:text-[#d2d0d0]">
      {await isAuthenticated() ? (
        <div className="text-[15px]">
           <LogoutLink >Logout</LogoutLink>
        </div>
       
      ): (
        <div className="text-[15px]" >
        <LoginLink>Login</LoginLink>
           <RegisterLink className="hidden">Sign up</RegisterLink>
     </div>
      )}


      </div>
  )
}

export default Aunthentication