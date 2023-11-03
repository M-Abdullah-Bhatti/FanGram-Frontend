import React, { useState } from 'react'
import PopularDelivery from './PopularDelivery'
import TringDhamaka from './TringDhamaka'
import { categories, featuredCelebrity } from '../../Data'
import { Navigation, Pagination, A11y, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import 'swiper/css';

function PopularCategories() {

  const [selected, setSelected] = useState(0);
  const divStyle = {
    backgroundImage: `url('/images/background.png')`,
    backgroundSize: 'cover',
    backgroundPosition: 'cover',
  };

  return (
    <div className='bg-black text-white px-16 py-12'>
      <h2 className='font-semibold text-2xl mb-2'>Popular Categories to explore</h2>
      <div className='py-4'>
        {
          categories.map((category, index) => (
            <span key={index} className="mr-4 cursor-pointer px-4 py-2 rounded-3xl" 
              style={{backgroundColor: index === selected ? '#D42978' : '#292929'}}
              onClick={()=> setSelected(index)}
            >
              {category}
            </span>
          ))
        }
      </div>
      <PopularDelivery />
      <TringDhamaka />

      <div className="flex bg-[#FCAE4B] bg-[`/images/background.png`] min-h-[350px] rounded-xl mt-10" style={divStyle}>
        <div className='w-2/3 p-10 space-y-8 mt-4'>
          <h1 className='font-bold text-5xl w-[80%]'>Promote your business through <b className='text-black'>celebrity</b></h1>
          <p className='font-normal text-xl'>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries</p>
          <button className='bg-white text-[#D42978] text-medium px-4 py-2 rounded-3xl'>Fill The Form</button>
        </div>

        {/* Slider */}
        <div className="w-[33%]  flex justify-center items-center hero__caurosel  ">
          <Swiper
            modules={[Navigation, Pagination, A11y, Autoplay]}
            slidesPerView={1}
            spaceBetween={1}
            slidesPerGroup={1}
            autoplay={true}
            pagination={true}
            slideActiveClass="activeSlide"
            className="swiper-container"
          >
            {featuredCelebrity.map((slide, index) => (
              <SwiperSlide key={index}>
                <div className="flex gap-5 justify-center">
                  <div className="flex flex-col gap-5">
                    <img
                      src={slide.image}
                      alt="logo"
                      className="w-[300px] rounded-lg"
                    />
                    <p className="text-center text-black text-xl" style={{fontFamily: 'Satisfy'}}>#{slide.name}</p>
                  </div>
                </div>
                <div className="h-10"></div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  )
}

export default PopularCategories