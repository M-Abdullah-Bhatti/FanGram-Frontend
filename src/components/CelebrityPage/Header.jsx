import React from "react";
import { featuredCelebrity } from "../../Data";
import { Navigation, Pagination, A11y, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import { Link } from "react-router-dom";

const tags = [
  "Celebrity Of the Week",
  "Model",
  "Valentine's Days Gifts",
  "Baby Doll",
  "TV Star",
];

function Header() {
  return (
    <div className="flex flex-col lg:hidden justify-center bg-[#161616] rounded-xl gap-4 overflow-hidden px-2 py-4">
      <div className="flex items-center justify-center gap-2 md:gap-4">
        <img src="/images/flag.svg" alt="flag" />
        <p className="text-xs md:text-base">India’s largest celebrity engagement platform</p>
        <div className="bg-[#FCAE4B] w-[25px] md:w-[40px] h-[25px] md:h-[40px] flex justify-center items-center rounded-full">
          <img src="/images/heart.png" alt="heart" className="max-w-[60%]" />
        </div>
      </div>

      <div className="flex gap-2 md:gap-4">
        {/* Image */}
        <div
          className="min-w-[100px] h-[140px] rounded-2xl overflow-hidden border border-[#ccc]"
          style={{
            background: "lightgray 50%",
          }}
        >
          <img
            src="/images/sunny.png"
            alt="celebrity"
            className="w-full h-full object-fill"
          />
        </div>
        
        <div className="flex flex-col gap-2">
          {/* Name */}
          <div className="flex items-center gap-1 md:gap-2">
            <h1 className="text-sm md:text-2xl font-extrabold">Sunny Leone</h1>
            <img src="/images/verification.svg" alt="verification badge" className='w-[20px] md:w-[30px]' />
            <span className="flex items-center gap-0.5 md:gap-2 border border-[#fff] px-2 py-1 rounded-3xl">
              <img src="/images/feedback__star.png" alt="star" className="w-[10px] h-[10px] md:w-[25px] md:h-[25px]" />
              <span className="text-[10px] md:text-base">4.7 (12)</span>
            </span>
          </div>

          <p className="py-1 text-xs md:text-xl font-medium">
            Responds in <b className="text-[#D42978] font-bold">5 Days</b>
          </p>
          
          {/* Awards */}
          <div className="flex flex-wrap">
            {tags.map((tag) => (
              <span className="text-[10px] md:text-xs font-normal px-2 md:px-4 py-1 md:py-2 bg-[#292929] rounded-3xl my-1 lg:my-2 mr-1 md:mr-2 lg:mr-4">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div>
        {/* Buttons */}
        <div className="w-full flex items-center justify-center flex-wrap gap-2 md:gap-4">
            <span className="flex items-center bg-[#D42978] font-medium text-xs md:text-base rounded-3xl px-4 py-2 cursor-pointer">
              <Link to="/order">
                Book Video @ <b>₹9999</b>
                <span className="line-through ml-2 text-xs">10,999</span>
              </Link>
            </span>
          <div
            class="flex w-fit text-xs md:text-base items-center border border-[#D42978] cursor-pointer"
            style={{
              borderRadius: 25,
            }}
          >
            <span className="px-2 md:px-3">Meet & Greet</span>
            <span
              style={{
                borderRadius: "0px 300px 300px 300px",
                background: "#D42978",
                padding: "0 16px",
              }}
            >
              <p>Starts from</p>
              <p>&#8377; 39,980</p>
            </span>
          </div>
          <span className="flex items-center border border-[#D42978] font-medium text-xs md:text-base rounded-3xl px-4 py-2 cursor-pointer my-4">
            For Business
          </span>
        </div>

        {/* Notes */}
        <div className="flex items-center justify-center gap-2 md:gap-4 text-[#999999]">
          <span className="flex items-center text-[10px] md:text-sm">
            Secured & safe payments
            <img src="/images/secure.svg" alt="" className="ml-1 md:ml-2 w-[12px] md:w-[16px]" />
          </span>
          <span className="flex items-center text-[10px] md:text-sm">
            Need help? Text Us
            <img src="/images/help.svg" alt="" className="ml-1 md:ml-2 w-[13px] md:w-[18px]" />
          </span>
        </div>

        {/* Slider */}
        <div className="flex justify-center items-center hero__caurosel mt-6">
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
                <div className="flex  gap-3 justify-center">
                  <div className="flex w-[125px] md:w-[200px] flex-col gap-5">
                    <img
                      src={slide.image}
                      alt="logo"
                      className="w-[250px] h-[125px] rounded-lg object-cover"
                    />
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

export default Header