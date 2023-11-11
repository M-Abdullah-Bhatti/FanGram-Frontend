import React from "react";
import { featuredCelebrity } from "../../Data";
import { Navigation, Pagination, A11y, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import { Link } from "react-router-dom";

const tags = [
  "Celebrity Of the Week",
  "Valentine's Days Gifts",
  "Baby Doll",
  "Model",
  "TV Star",
];

function CelebrityHeader() {
  return (
    <div className="hidden lg:flex bg-[#161616] relative rounded-xl overflow-hidden px-4 md:px-8 py-6 text-white">
      <div
        className="min-w-[80px] h-[100px] lg:max-h-[300px] lg:min-h-[225px] lg:min-w-[225px] rounded-2xl overflow-hidden border border-[#ccc]"
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
      <div className="ml-2 lg:ml-6 w-full">
        <div className="flex justify-between">
          <div className="flex items-center space-x-2 lg:space-x-4">
            <h1 className="text-lg md:text-4xl font-extrabold">Sunny Leone</h1>
            <img src="/images/verification.svg" alt="verification badge" className='w-[25px] lg:w-[50px]' />
            <span className="flex space-x-1 lg:space-x-2 border border-[#fff] px-2 lg:px-4 py-1 lg:py-2 rounded-3xl">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className='w-[10px] md:w-[20px]'
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  d="M19.9478 7.28126C19.8839 7.08307 19.763 6.90808 19.6003 6.77811C19.4376 6.64814 19.2402 6.56894 19.0328 6.55038L13.2602 6.02619L10.9776 0.683473C10.8092 0.29194 10.426 0.0385742 10.0001 0.0385742C9.57422 0.0385742 9.19089 0.291979 9.0226 0.68445L6.73997 6.02623L0.9665 6.55038C0.759313 6.56936 0.562253 6.64873 0.39975 6.77865C0.237248 6.90857 0.116451 7.08333 0.052336 7.28126C-0.079347 7.68627 0.0422577 8.13046 0.363164 8.41047L4.72656 12.2371L3.43988 17.9048C3.34574 18.3216 3.50746 18.7524 3.85325 19.0023C4.03908 19.1366 4.25654 19.205 4.47581 19.205C4.66488 19.205 4.85238 19.154 5.02074 19.0533L10.0001 16.0773L14.9776 19.0533C15.3419 19.2724 15.801 19.2524 16.146 19.0023C16.3149 18.88 16.4442 18.7108 16.5177 18.5157C16.5912 18.3206 16.6057 18.1082 16.5594 17.9048L15.2728 12.2371L19.6361 8.41125C19.7931 8.27416 19.9063 8.09397 19.9617 7.89308C20.0171 7.69218 20.0123 7.47943 19.9478 7.28126Z"
                  fill="#FFC107"
                />
              </svg>
              <span className="text-xs md:text-base">4.7 (12)</span>
            </span>
          </div>
          <div className="flex items-center space-x-2">
            {/* <img src="/images/flag.svg" alt="flag" />
            <p>India’s largest celebrity engagement platform</p> */}
            <div className="bg-[#FCAE4B] w-[40px] h-[40px] flex justify-center items-center rounded-full">
              <img src="/images/heart.png" alt="heart" />
            </div>
          </div>
        </div>
        <p className="py-1 lg:py-4 text-base md:text-xl font-medium">
          Responds in <b className="text-[#D42978] font-bold">5 Days</b>
        </p>
        <div className="flex flex-wrap pr-[150px]">
          {tags.map((tag) => (
            <span className="text-[8px] lg:text-base font-normal px-2 lg:px-4 py-2 bg-[#292929] rounded-3xl my-1 lg:my-2 mr-1 md:mr-2 lg:mr-4">
              {tag}
            </span>
          ))}
        </div>
        <div className="w-full flex flex-wrap gap-4 pr-[150px]">
            <span className="flex items-center bg-[#D42978] font-medium text-xs lg:text-lg rounded-3xl px-4 py-2 cursor-pointer my-4">
              <Link to="/order">
                Book Video @ <b>&#8377; 9999</b>
                <span className="line-through ml-2 text-sm">10,999</span>
              </Link>
            </span>
          <div
            class="flex w-fit items-center border border-[#D42978] cursor-pointer my-4"
            style={{
              borderRadius: 25,
            }}
          >
            <span className="px-3">Meet & Greet</span>
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
          <span className="flex items-center border border-[#D42978] font-medium text-lg rounded-3xl px-4 py-2 cursor-pointer my-4">
            For Business
          </span>
        </div>
        <div className="flex space-x-4 text-[#999999]">
          <span className="flex items-center">
            Secured & safe payments
            <img src="/images/secure.svg" alt="" className="ml-2 w-[16px]" />
          </span>
          <span className="flex items-center">
            Need help? Text Us
            <img src="/images/help.svg" alt="" className="ml-2 w-[18px]" />
          </span>
        </div>
      </div>

      {/* Slider */}
      <div className="right-5 bottom-3 w-[150px] absolute flex justify-center items-center hero__caurosel  ">
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
  );
}

export default CelebrityHeader;
