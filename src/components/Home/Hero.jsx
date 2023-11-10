import React from "react";

import { Navigation, Pagination, A11y, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import SwiperCore from "swiper";
import { heroSliderImages } from "../../Data";

SwiperCore.use([Navigation, Pagination]);

const Hero = () => {
  return (
    <div className="flex justify-center items-center flex-col-reverse lg:flex-row gap-8 min-h-screen lg:min-h-[85vh] relative bg-[#000] py-9 md:py-unset px-6 sm:px-10 overflow-hidden">
      <img
        src="/images/hero__ladder__1.png"
        alt="logo"
        className="absolute top-0 left-0 lg:block hidden"
      />
      <img
        src="/images/hero__ladder__2.png"
        alt="logo"
        className="absolute bottom-0 left-2/4 lg:block hidden"
      />

      <img
        src="/images/hero__ladder__2.png"
        alt="logo"
        className="absolute bottom-0 -right-20 block lg:hidden"
      />

      <img
        src="/images/hero__ellipse1.png"
        alt="logo"
        className="absolute left-0 top-0 lg:block hidden"
      />

      <img
        src="/images/hero__ellipse__1__small.png"
        alt="logo"
        className="absolute left-0 bottom-0 lg:hidden block"
      />

      <img
        src="/images/hero__ellipse2.png"
        alt="logo"
        className="absolute right-0 top-0 lg:block hidden"
      />

      {/* Left Container */}
      <div className="w-full lg:w-[60%] relative flex justify-center items-center lg:items-start flex-col">
        <img
          src="/images/ladder__1__small.png"
          alt="logo"
          className="absolute -top-20 -left-5 block lg:hidden"
        />

        <img
          src="/images/hero__shape__1.png"
          alt="logo"
          className="absolute right-0 top-2 lg:-top-[2rem] w-[130px] lg:w-[250px] "
        />

        <img
          src="/images/hero__shape__2.png"
          alt="logo"
          className="absolute right-0 top-[40%] lg:top-[60%] w-[130px] lg:w-[300px] "
        />

        {/* Content */}
        <h1 className="hero__message text-[18px] md:text-[30px] mb-2 md:mb-unset text-left w-full  md:w-fit">
          # PersonalisedCelebrityMessages
        </h1>
        <h2 className="font-[Poppins] text-[22px] sm:text-[30px] md:text-[40px] lg:text-[50px] text-[#fff] sm:text-center lg:text-left font-bold leading-normal">
          We make your favourite celebritiestalk to you, personally.
        </h2>

        {/* Search */}
        <div className="flex justify-between items-center gap-1 sm:gap-3 w-full md:w-3/4 p-1 mt-5 border-[1px] rounded-[100px] border-[#fff]">
          <img
            src="/images/hero__search.png"
            alt="logo"
            className="ml-2 md:ml-3 w-[30px] md:w-unset"
          />

          <input
            type="text"
            placeholder="Search Your Favourite creator"
            className="outline-none md:text-base text-sm w-full h-full px-2 bg-transparent focus:bg-transparent text-[#fff]"
          />

          <button className="bg-[#D42978] text-[#fff] rounded-3xl py-2 px-3 sm:px-4 sm:text-base text-sm   ">
            Search
          </button>
        </div>
      </div>

      {/* Right Container */}
      <div className="w-full lg:w-[40%]  flex justify-center items-center hero__caurosel  ">
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
          {heroSliderImages.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="flex gap-5 lg:justify-start justify-center ">
                <div className="flex flex-col gap-5 ">
                  <img
                    src={slide.images[0]}
                    alt="logo"
                    className="w-[200px] rounded-lg"
                  />

                  <img
                    src={slide.images[1]}
                    alt="logo"
                    className="w-[200px] rounded-lg"
                  />
                </div>

                <div className="flex flex-col gap-5 mt-10">
                  <img
                    src={slide.images[2]}
                    alt="logo"
                    className="w-[200px] rounded-lg"
                  />

                  <img
                    src={slide.images[3]}
                    alt="logo"
                    className="w-[200px] rounded-lg"
                  />
                </div>
              </div>
              <div className="h-10"></div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Hero;
