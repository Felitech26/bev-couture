'use client'


import React from 'react'
import { useShoppingCart } from 'use-shopping-cart'
import { useToast } from './ui/use-toast';

const AddToCartBtn = ({
  id, 
  currency, 
  name, 
  images,
  description,
  price,
  price_id
 
}) => {
  
  const {addItem} = useShoppingCart();
  const {toast} = useToast();

  const bevs = {
    id: id,
    currency: currency,
    name: name,
    images: images,
    description: description,
    price: price,
    price_id: price_id
  };

  return (
    <button 
    className='py-3 px-6 bg-gray-900 text-white'
    onClick={() => {
      addItem(bevs);
      toast({
       title: `${name} has been added to your cart`,
      })
      }}>
      
       Add To Cart
       
</button>
  )
}

export default AddToCartBtn