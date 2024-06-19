import React from 'react'
import { Navigation, Pagination, A11y, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import 'swiper/css';
import BusinessInfoCard from './BusinessInfoCard';
import { additionalBenefits, businessWork } from '../../Data';
import AdditionalBenefits from './AdditionalBenefits';


function FanrangBusiness() {
  return (
    <div className="w-full mt-6">
        <h2 className="font-semibold text-xl md:text-3xl lg:text-[45px] text-left md:text-center mb-2 md:mb-16">How does Fangram for Business Work?</h2>
        <div className="hidden md:flex justify-center flex-wrap gap-1 md:gap-4">
            {
                businessWork.map((work, index)=> (
                    <BusinessInfoCard work={work} key={index} />
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
                {businessWork.map((work, index) => (
                <SwiperSlide key={index}>
                    <div className="flex gap-5 justify-center">
                    <BusinessInfoCard work={work} />
                    </div>
                    <div className="h-10"></div>
                </SwiperSlide>
                ))}
            </Swiper>
        </div>

        {/* Dividing Line */}
        <p className="text-center underline text-sm md:text-2xl text-[#D84388] my-6 cursor-pointer">Click here to see additional benefits</p>

        <div className="hidden md:flex justify-center flex-wrap gap-1 md:gap-4 my-6 mt-12">
            {
                additionalBenefits.map((benefit, index)=> (
                    <AdditionalBenefits benefit={benefit} key={index} />
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
                {additionalBenefits.map((benefit, index) => (
                <SwiperSlide key={index}>
                    <div className="flex gap-5 justify-center">
                    <AdditionalBenefits benefit={benefit} />
                    </div>
                    <div className="h-10"></div>
                </SwiperSlide>
                ))}
            </Swiper>
        </div>
    </div>
  )
}

export default FanrangBusiness
