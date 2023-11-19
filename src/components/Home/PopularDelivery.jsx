import React, { useEffect, useRef, useState } from "react";
// import { featuredCelebrityData } from "../../Data";
import PopularDeliveryCard from "./PopularDeliveryCard";
import { Navigation, Pagination, A11y, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

function PopularDelivery({ celebritiesData }) {
  const scrollContainerRef = useRef(null);
  // const { data: celebritiesData } = useGetCelebritiesByCategories(["Popular"]);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollLeft -= 320;
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollLeft += 320;
    }
  };

  return (
    <div className="w-full bg-black text-white mb-12">
      <div className="flex items-center justify-between py-4">
        <div className="flex items-center space-x-8">
          <h2 className="text-3xl md:text-4xl font-semibold">
            Next Day Delivery
          </h2>
          <div className="hidden md:flex border border-[#D42978] text-[#D42978] rounded-3xl py-1 px-4">
            <span className="font-semibold text-lg cursor-pointer">
              See All
            </span>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <button
            onClick={scrollLeft}
            className="w-[50px] h-[50px] text-lg border border-[#D42978] hidden md:flex items-center justify-center rounded-full transition duration-300"
            style={{ fontSize: "18px" }}
          >
            <img src="/images/back.svg" alt="back" />
          </button>
          <button
            onClick={scrollRight}
            className="w-[50px] h-[50px] bg-[#D42978] hidden md:flex items-center justify-center rounded-full transition duration-300"
          >
            <img src="/images/forward.svg" alt="forward" />
          </button>
        </div>
      </div>
      <div
        className="hidden md:flex overflow-x-scroll no-scrollbar"
        ref={scrollContainerRef}
        style={{
          scrollBehavior: "smooth",
          scrollbarWidth: "thin",
          scrollbarColor: "transparent transparent",
          msOverflowStyle: "none",
        }}
      >
        <div className="flex space-x-4 py-4">
          {celebritiesData &&
            celebritiesData.map((celebrity, i) => (
              <PopularDeliveryCard celebrity={celebrity} key={i} />
            ))}
        </div>
      </div>

      {/* Mobile Swiper */}
      <div className="md:hidden w-full flex justify-center items-center hero__caurosel  ">
        <Swiper
          modules={[Navigation, Pagination, A11y, Autoplay]}
          slidesPerView={2}
          spaceBetween={10}
          slidesPerGroup={1}
          autoplay={true}
          pagination={true}
          slideActiveClass="activeSlide"
          className="swiper-container"
        >
          {celebritiesData &&
            celebritiesData.map((slide, index) => (
              <SwiperSlide key={index}>
                <div className="flex">
                  <PopularDeliveryCard celebrity={slide} />
                </div>
                <div className="h-10"></div>
              </SwiperSlide>
            ))}
        </Swiper>
      </div>

      <p className="flex py-[8px] mx-[25%] md:hidden border border-[#D42978] text-[#D42978] rounded-3xl justify-center font-semibold cursor-pointer">
        See All
      </p>
    </div>
  );
}

export default PopularDelivery;
