'use client'



import { useShoppingCart } from "use-shopping-cart"

const CheckoutBtn = () => {
  const handleCheckout = async () => {
    try {
      const res = await redirectToCheckout();
      if (res?.error) {
        console.log(res);
      }
    } catch (error) {
      console.log(error);
    }
  };
  const {redirectToCheckout} = useShoppingCart();
  return (
    <button className="bg-black w-full
    px-5 py-3 border border-xl text-white border-black text-md" onClick={handleCheckout}>Proceed To Checkout</button>
  )
}

export default CheckoutBtn