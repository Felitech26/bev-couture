'use client'; 
import Bevs from './Bevs';

// import swiper react component
import { Swiper, SwiperSlide } from 'swiper/react';

//import swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

// import required modules
import {Autoplay} from 'swiper/modules'

  


const PopularDressCarousel = ({bev}) => {
  return (
    <Swiper
    slidesPerView={1} 
    spaceBetween={20} 
    breakpoints={{
      640: {slidesPerView: 1},
      768: {slidesPerView: 2},
      960: {slidesPerView: 3},
      1440: {slidesPerView: 4},
    }}
   
    autoplay={true}
    modules={[ Autoplay]}
    >

      {bev.map(bevs => {
        return ( 
        <SwiperSlide key={bevs._id}>
       <Bevs bevs={bevs} />
        </SwiperSlide>
      )
      })}
    </Swiper>
  )
}

export default PopularDressCarousel