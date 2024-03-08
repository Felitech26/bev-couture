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
    <button className="btn-accent w-full" onClick={handleCheckout}>Proceed To Checkout</button>
  )
}

export default CheckoutBtn