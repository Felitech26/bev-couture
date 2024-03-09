
import CartItem from './CartItem';
import Link from 'next/link';

import { 
Sheet,
SheetContent,
SheetHeader,
SheetTitle,
} from '@/components/ui/sheet';
import { useShoppingCart } from 'use-shopping-cart';

import { ScrollArea } from './ui/scroll-area';
import CheckoutBtn from './CheckoutBtn';



const CartSidebar = () => {
  const {
    cartCount,
    cartDetails,
    shouldDisplayCart,
    handleCartClick,
    totalPrice,
  } = useShoppingCart();

  return (
    <Sheet open={shouldDisplayCart} onOpenChange={() => handleCartClick()}>
      <SheetContent>
        <SheetHeader>
          <SheetTitle className='flex font-lato flex-col text-center mb-7 text-[#000000]'>
        Shooping Cart ({cartCount})
        <span className="w-full mt-3 h-[1px] bg-[#acacac] font-thin"></span>
          </SheetTitle>
         
        </SheetHeader>
        <>
        {cartCount === 0 ? ( 
        <div>
          <h5 className='text-black/50 text-center mb-5'>
            Your cart is currently empty</h5>
           <div>
           <Link href='/shop'>
      <button className="btn btn-accent mx-auto">SHOP COLLECTION</button>
  </Link>

           </div>
            </div> 
        ) : (
        
        
        <ScrollArea className='h-[70pvh] xl:h-[74vh] pr-4 mb-4'>
          {cartDetails && Object.entries(cartDetails).map(([key, item]) => {
            return  <CartItem item={item} key={key}/>
          })}
          </ScrollArea>)}
        </>
      { cartCount > 0 && (
        <div className='font-lato'>
          <div className='flex justify-between font-semibold'>
            <div className='uppercase mb-5'>Subtotal</div>
            <div>£{totalPrice}</div>
          </div>
          <CheckoutBtn />
        </div>
      )}
      </SheetContent>
    </Sheet>
  );
};

export default CartSidebar