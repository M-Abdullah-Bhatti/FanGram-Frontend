import React from 'react'
import WorkCard from './WorkCard'
import { Navigation, Pagination, A11y, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import 'swiper/css';

const work = [1, 2, 3, 4, 5, 6];

function LatestWork() {
  return (
    <div className="w-full mt-6">
        <h2 className="font-semibold text-xl md:text-2xl lg:text-[45px]">0ur Latest Work</h2>
        <div className="hidden md:flex flex-wrap gap-1 md:gap-4">
            {
                work.map((index)=> (
                    <WorkCard key={index} />
                ))
            }
        </div>

        {/* Mobile Swiper */}
      <div className="md:hidden py-2 w-full flex justify-center items-center hero__caurosel  ">
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
            {work.map((slide, index) => (
              <SwiperSlide key={index}>
                <div className="flex gap-5 justify-center">
                  <WorkCard />
                </div>
                <div className="h-10"></div>
              </SwiperSlide>
            ))}
          </Swiper>
      </div>
    </div>
  )
}

export default LatestWork