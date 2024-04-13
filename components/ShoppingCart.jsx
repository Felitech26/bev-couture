'use client'



import { BsBagDash } from "react-icons/bs";
import CartSidebar from "./CartSidebar";
import { useShoppingCart } from "use-shopping-cart";

const ShoppingCart = () => {

  const {cartCount, handleCartClick} = useShoppingCart();
  
  return (
  
      <div >
        <div className="text-[21px] cursor-pointer relative">

        <BsBagDash onClick={() => handleCartClick()} />
        <div
         onClick={() => handleCartClick()}
        className="bg-accent text-white w-[15px] lg:w-[16px] h-[15px] lg:h-[16px]
         text-[11px] font-normal absolute
        -right-2 -bottom-2 rounded-full flex justify-center 
        align-middle items-center">{cartCount}</div>
        
        </div>
  
        <div>
        <CartSidebar />
        </div>
  
        
  
       
       
  
      
  
  
      </div>
    
  )
}

export default ShoppingCart