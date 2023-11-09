import React, { useRef } from "react";
import FeaturedCelebrityCard from "./FeaturedCelebrityCard";
import { featuredCelebrityData } from "../../Data";
import { Navigation, Pagination, A11y, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import 'swiper/css';

function FeaturedCelebrity() {
  const scrollContainerRef = useRef(null);
  const secondaryScrollContainerRef = useRef(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      console.log("Scroll Left Triggered")
      scrollContainerRef.current.scrollLeft -= 360;
      secondaryScrollContainerRef.current.scrollLeft -= 360;
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      console.log("Scroll Right Triggered")
      scrollContainerRef.current.scrollLeft += 360;
      secondaryScrollContainerRef.current.scrollLeft += 360;
    }
  };

  return (
    <div className="w-full bg-black text-white py-10">
      <div className="py-4 px-8 md:px-16">
        <div className="flex items-center justify-between mb-2 md:mb-0">
          <h2 className="text-2xl md:text-4xl font-semibold">Featured Celebrity</h2>
          <div className="flex items-center space-x-4">
            <button onClick={scrollLeft}
              className="hidden md:flex items-center justify-center w-[50px] h-[50px] border border-[#D42978] rounded-full transition duration-300"
            >
              <img src="/images/back.svg" alt="back" />
            </button>
            <button onClick={scrollRight}
              className="w-[50px] h-[50px] bg-[#D42978] hidden md:flex items-center justify-center rounded-full transition duration-300"
            >
              <img src="/images/forward.svg" alt="forward" />
            </button>
          </div>
        </div>
        <p className="text-xs md:text-lg pr-12 md:pr-0">
          Get personalised video messages from your favourite celebrity! What's
          more? The price you see is the price you pay!
        </p>
      </div>
      <div
        className="hidden md:flex overflow-x-auto no-scrollbar"
        ref={scrollContainerRef}
        style={{ scrollBehavior: "smooth" }}
      >
        <div className="flex space-x-4 px-8 py-4">
          {featuredCelebrityData.map((card, index) => (
            <FeaturedCelebrityCard celebrity={card} key={index} />
          ))}
        </div>
      </div>

      {/* Mobile Swiper */}
      <div className="md:hidden px-8 py-2 w-full flex justify-center items-center hero__caurosel  ">
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
            {featuredCelebrityData.map((slide, index) => (
              <SwiperSlide key={index}>
                <div className="flex gap-5 justify-center">
                  <FeaturedCelebrityCard celebrity={slide} />
                </div>
                <div className="h-10"></div>
              </SwiperSlide>
            ))}
          </Swiper>
      </div>

      <div className="hidden md:flex overflow-x-auto mt-12 no-scrollbar" ref={secondaryScrollContainerRef}
        style={{ scrollBehavior: 'smooth' }}
      >
        <div className="flex space-x-4 px-8 py-4">
          {featuredCelebrityData.map((card, index) => (
            <FeaturedCelebrityCard celebrity={card} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default FeaturedCelebrity;
