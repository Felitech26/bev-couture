'use client'

import { useState, useEffect } from "react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "./ui/label";
import { Slider } from "./ui/slider";

import Bevs from "./Bevs";

const ShopCategories = ({bev}) => {
 const [category, setCategory] = useState('all');
 const [filteredDress, setFilteredDress] = useState ([]);
 const [price, setPrice] = useState(1000);
 console.log(category)

 
 useEffect(() => {
    const filtered = bev.filter((bevs)=> {
      const categoryMatch = 
      category === 'all'
       ? bev
       : bevs.categories.some((categ)=> 
       categ.name === category);
    const priceMatch = bevs.price <= price;
    return categoryMatch && priceMatch;
    })
    setFilteredDress(filtered)
 }, [category, price, bev])

  return (
  <div className="min-h-[3200px] py-[8rem] font-lato">
   <div className="container mx-auto">
    <div className="mb-10 xl:mb-0 gap-2 flex flex-col justify-center
    items-center">
    <h5 className="font-cormomorantGaramond
    font-semibold text-[25px] mb-2">All Collection</h5>
    <p className=" text-[#4a4b4b] lg:w-[50%] xxl:w-[25%]">
      Get dressed effortlessly throughout the seasons with our easy take on
       the latest trends from al dresses to the hero separates you can't live without.
     Your next favourite outfit starts here.</p>
    </div>
    
    <div className="flex flex-col">
              {/* sidebar */}
    <aside className="w-[300px] pb-1
     xl:fixed">
      <RadioGroup defaultValue='all' 
      className='flex flex-col gap-6 mb-12'>
        <div className="flex items-center space-x-2">
          <RadioGroupItem  value='all' id='all' 
          onClick={() => setCategory('all')} />
          <label htmlFor='all'>All</label>
          </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem  value='africa' id='africa' 
          onClick={() => setCategory('africa')} />
          <label htmlFor='africa'>African Vibe</label>
          </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem  value='continental' id='continental' 
          onClick={() => setCategory('continental')} />
          <label htmlFor='continental'>Continental Vibe</label>
          </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem  value='casual' id='casual' 
          onClick={() => setCategory('casual')} />
          <label htmlFor='casual'>Casual Vibe</label>
          </div>
      </RadioGroup>
      {/* price slider */}
      <div className="max-w-57">
        <div className="text-lg mb-4 font-medium">Max Price:  
        <span className="text-accent font-semibold ml-2">£{price}</span>
        <span className="ml-2">
         ({filteredDress.length > 1 
          ? `${filteredDress.length} items` 
          :  filteredDress === 0
          ? `${filteredDress.length} items`
          : `${filteredDress.length} item`})
          </span></div>
        <Slider 
        defaultValue={[1000]} 
        max={1200} 
        step={1} 
        onValueChange={(val) => setPrice(val[0])} />
      </div>
       </aside>
              {/* dress list */}
       <div className="w-full xl:w-[1050px] xxl:w-[1600px] ml-auto">
       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 
       xl:grid-cols-3 xxl:grid-cols-4 gap-[30px]"> 
         {filteredDress.map((bevs) => {
          return <Bevs bevs={bevs} key={bevs.price_id} />
         })}
     </div>
       </div>
     
            </div>
         </div>
    </div>
  )
}

export default ShopCategories