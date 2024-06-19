import React from "react";
import { Navigation, Pagination, A11y, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import SwiperCore from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

SwiperCore.use([Navigation, Pagination]);

const CelebrityShoutouts = () => {
  const images = [
    "/images/bs1.jpg",
    "/images/bs2.jpg",
    "/images/bs3.jpg",
    "/images/bs4.jpg",
    "/images/bs5.jpg",
    "/images/bs6.jpg",
    "/images/bs7.jpg",
    "/images/bs8.jpg",
    "/images/bs9.jpg",
    "/images/bs10.jpg",
  ];

  return (
    <div className="w-full py-10">
      <h2 className="font-semibold text-center text-xl md:text-2xl lg:text-[45px] ">
        Celebrity Brand Shoutouts
      </h2>
      {/* Large Devices */}
      <div className="w-full hidden lg:grid grid-cols-5 gap-4 my-10 ">
        {/* Div */}
        {images.map((image, index) => (
          <div
            key={index}
            className={`flex flex-col gap-3 ${
              index % 2 !== 0 && index < 5 && "mt-10"
            } ${index % 2 !== 0 && index >= 5 && "mt-[-40px]"}`}
          >
            <div className="h-[300px] rounded-xl overflow-hidden">
              <img src={image} alt="" className="object-cover w-full h-full" />
            </div>
            {/* Add similar div for the second image */}
          </div>
        ))}
      </div>
      {/* Small Devices */}
      <div className="lg:hidden block mt-4 sm:mt-7 hero__caurosel w-[80%] sm:w-[40%] md:w-[30%] mx-auto">
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
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <div className="h-[350px] w-full rounded-xl overflow-hidden">
                <img
                  src={image}
                  alt=""
                  className="object-cover w-full h-full"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <h3 className=" text-center text-[12px] sm:text-lg md:text-2xl lg:text-[45px] mt-3">
        1000+ brands • 850 mn+ reach
      </h3>
    </div>
  );
};

export default CelebrityShoutouts;
