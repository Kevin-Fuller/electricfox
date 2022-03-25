import React from 'react'
import './Swiper.css'
// Import Swiper React components
import { Swiper, SwiperSlide} from 'swiper/react';


// import required modules
import { EffectCoverflow, Pagination } from "swiper";
// Import Swiper styles
import 'swiper/css';

import './Swiper.css';


function newSwiper() {
  return (
    <div className='swiper_container'>

<Swiper
      className='grabbable'
      loop
      watchOverflow={false}
      spaceBetween={50}
      onSlideChange={() => console.log('slide change')}
      
      effect={'coverflow'}
      coverflowEffect={{
        rotate: 0,
        stretch: 0,
        depth: 300,
        modifier: 1,
        slideShadows: false,
      }}
      modules={[EffectCoverflow, Pagination]}
      slidesPerView={3}
    >
      <SwiperSlide><div className='swiperContainerContent'></div></SwiperSlide>
      <SwiperSlide><div className='swiperContainerContent'></div></SwiperSlide>
      <SwiperSlide><div className='swiperContainerContent'></div></SwiperSlide>
      <SwiperSlide><div className='swiperContainerContent'></div></SwiperSlide>
    </Swiper>

    </div>
  )
}

export default newSwiper