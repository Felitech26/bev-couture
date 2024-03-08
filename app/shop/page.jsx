import {client} from '@/app/lib/sanity';
import ShopCategories from '@/components/ShopCategories';

const getData = async () => {
  const query = `*[_type == 'product'] {
    _id,
      name,
      description,
      images,
      price,
      price_id,
      sizes,
      'slug': slug.current,
      'categories':categories[]->{
      name
      }
  }`
  const data = await client.fetch(query)
  return data
}

const Shop = async () => {
  const bev = await getData();
  return (
    <div>
      <ShopCategories bev={bev}/>
    </div>
  )
}

export default Shop