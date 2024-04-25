

import { client, urlFor } from '@/app/lib/sanity';
import Image from 'next/image';
import Link from 'next/link';
import { getSizeName } from '@/lib/utils';
import { IoStarOutline } from "react-icons/io5";
import { IoStarSharp } from "react-icons/io5";

import AddToCartBtn from '@/components/AddToCartBtn';


const getData = async (slug)=> {
  const query = `*[_type == 'product' && slug.current == '${slug}'][0] {
    _id,
    images,
    price,
    sizes,
    price_id,
    name,
    description,
    'slug': slug.current,
    'category': categories->{name}
  }`
  const data = await client.fetch(query);
  return data;
}

const ProductDetails = async ({params}) => {
  const bevs = await getData(params.slug)
  return (
    <section className='py-[8rem] font-lato'>
      <div className='container mx-auto'>
      <div className='flex flex-row items-center mb-6 gap-3'>
          <Link href='/'>Home /</Link>
          <Link href='/shop'>Shop /</Link>
             <h5>{bevs.name}</h5> 
          </div>
        <div className='flex flex-col lg:flex-row xl:flex-row gap-14'>
         {/* img */}  
          <div>
          <Image src={urlFor(bevs.images[0]).url()} 
          width={550}
          height={250}
          priority
          alt=''/>
          </div>
         {/* text */}
         <div className='flex-1 flex flex-col xl:px-20'>
            <div>
              <h5 className='text-[25px] lg:text-[40px] font-light'>{bevs.name}</h5>
               <h5 className='text-[20px] font-light mb-2'>£{bevs.price}</h5>
             <div>
              <p className='text-lg'>
                Size: <strong>{getSizeName(bevs.sizes[0])}</strong>
              </p>
              {bevs.sizes.map((size) => (
                <button 
                key={size} className='w-[50px] h-[40px] mr-2 mt-2
                 bg-[#e9e9e9] hover:bg-accent transform hover:translate-x-1 
                 transition-all duration-300' >
                   {(size)}
                </button>
              ))}
             </div>
             <div className='flex flex-row gap-4 mt-5'>
             <div className='flex flex-row gap-1 mt-1 text-[#f23c82]'>
             <IoStarSharp size={20} />
             <IoStarSharp size={20} />
             <IoStarSharp size={20} />
             <IoStarSharp size={20} />
             <IoStarOutline size={20} />
             </div>
             <div className='flex flex-row text-[18px] gap-1'>
              <h5 className='font-lato'>5</h5>
              <h5 className='font-lato'>Reviews</h5>
             </div>
             </div>
             
             <div className='mt-8'>
             <AddToCartBtn 
              price_id={bevs.price_id}
              name={bevs.name}
              currency='GBP'
              description={bevs.description}
              images={bevs.images}
              price={bevs.price}/>
             </div>

             <div className='mt-6'>
              <h5 className='text-[#605f5f]'>
                {bevs.description}
              </h5>
             </div>
           
            </div>
         </div>
        </div>
      </div>
    </section>
  )
}

export default ProductDetails