import React from 'react'
import { featuredCelebrity } from '../../Data';
import { Navigation, Pagination, A11y, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import 'swiper/css';

function HomeCTA() {

    const divStyle = {
        backgroundImage: `url('/images/background.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'cover',
    };

  return (
    <div className="flex flex-col-reverse md:flex-row bg-[#FCAE4B] bg-[`/images/background.png`] min-h-[350px] rounded-xl mt-10 py-12 px-4 lg:px-0" style={divStyle}>
        <div className='text-center md:text-left w-full md:w-2/3 p-6 md:p-10 space-y-2 md:space-y-8 mt-4'>
          <h1 className='font-bold text-sm md:text-5xl md:w-[80%]'>Promote your business through <b className='text-black'>celebrity</b></h1>
          <p className='font-normal text-xs md:text-xl'>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries</p>
          <button className='bg-white text-[#D42978] text-sm md:text-medium px-4 py-2 rounded-3xl'>Fill The Form</button>
        </div>

        {/* Slider */}
        <div className="w-full md:w-[33%] flex justify-center items-center hero__caurosel  ">
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
                                <p className="font-satisfy text-center text-black text-sm md:text-xl">#{slide.name}</p>
                            </div>
                        </div>
                        <div className="h-10"></div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    </div>
  )
}

export default HomeCTA