'use client';
 
import { CartProvider as CProvider } from 'use-shopping-cart'



const CartProvider = ({children}) => {
  return (
    <CProvider 
    mode='payment' 
    cartMode='client-only'
    stripe={process.env.NEXT_PUBLIC_STRIPE_KEY}
    successUrl='https://bev-couture.vercel.app/stripe/success'
    cancelUrl='https://bev-couture.vercel.app/stripe/error'
    languague='en-GB'
    currency='GBP'
    billingAddressCollection={true}
    shouldPersist={true}
    >
      {children}
    
    </CProvider>
  )
}

export default CartProvider