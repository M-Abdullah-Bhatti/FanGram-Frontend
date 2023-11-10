import React, { useState } from "react";
import { feedbackSliderData } from "../../Data";
import PopularDeliveryCard from "./PopularDeliveryCard";
import VideoPlayerModal from "../Shared/VideoPlayerModal";


import { Navigation, Pagination, A11y, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import SwiperCore from "swiper";

SwiperCore.use([Navigation, Pagination]);



function Feedback() {
  const [openVideoModal, setOpenVideoModal] = useState(false);
  const handleOpen = () => setOpenVideoModal(true);
  const handleClose = () => setOpenVideoModal(false);

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleScrollLeft = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleScrollRight = () => {
    if (currentIndex < feedbackSliderData.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const currentFeedback = feedbackSliderData[currentIndex];

  return (
    <div className="w-full   bg-black text-white px-5 sm:px-7 lg:px-16 pb-10">
      {openVideoModal && (
        <VideoPlayerModal
          url="https://www.youtube.com/watch?v=krOjUoK7ZD0"
          handleClose={handleClose}
        />
      )}

      <div className="flex items-center justify-between py-4">
        <div className="">
          <h2 className="text-[20px] sm:text-2xl md:text-4xl font-semibold mb-2">Loved by the People</h2>
          <p className="text-[12px] md:text-[15px]">
            Lorem ipsum is placeholder text commonly Lorem ipsum is placeholder
            text commonly
          </p>
        </div>
        <div className="hidden lg:flex items-center space-x-4">
          <button
            onClick={handleScrollLeft}
            className="w-[50px] h-[50px] border border-[#D42978] text-[#D42978] flex items-center justify-center rounded-full transition duration-300"
          >
            <img src="/images/back.svg" alt="back" />
          </button>
          <button
            onClick={handleScrollRight}
            className="w-[50px] h-[50px] bg-[#D42978] flex items-center justify-center rounded-full transition duration-300"
          >
            <img src="/images/forward.svg" alt="forward" />
          </button>
        </div>
      </div>

      {/* ================== */}

      {/* Large Screens */}
      <div className="lg:block hidden w-[80%] mx-auto relative mt-20 min-h-[60vh]">
        {/* Left Container */}
        <div className=" absolute left-20 -top-10 z-20">
          <div className="relative">
            {/* Behind  Image */}
            <div className=" w-[220px] absolute z-30 top-5 -right-10 ">
              <img
                src={currentFeedback.images[0]}
                alt="logo"
                className="w-full h-full rounded-xl"
              />

              <img
                src="/images/feedback__sound.png"
                alt="logo"
                className="absolute w-[20px] h-[20px] right-1 top-3"
              />
            </div>

            {/* Upper Image */}
            <div className=" w-[250px] relative z-50 ">
              <img
                src={currentFeedback.images[1]}
                alt="logo"
                className="w-full h-full rounded-xl"
              />

              <img
                src="/images/feedback__sound.png"
                alt="logo"
                className="absolute right-3 top-3"
              />

              <div
                onClick={handleOpen}
                className="grid place-items-center absolute z-50 left-[37%] top-[43%] w-[70px] h-[70px] rounded-full cursor-pointer"
                style={{
                  fill: "rgba(0, 0, 0, 0.30)",
                  backdropFilter: "blur(7px)",
                }}
              >
                <img src="/images/feedbackplay.png" alt="logo" />
              </div>
            </div>
          </div>
        </div>

        {/* Right Container */}
        <div className="px-20 py-10 bg-[#292929] min-h-[280px] w-full absolute right-0 top-0 z-10 rounded-xl flex justify-end items-center">
          <div className="text-[#fff]  w-[55%] text-center relative ">
            <img
              src="/images/hero__quotes.png"
              alt="logo"
              className="absolute -top-10 -left-10"
            />

            <p className="font-extralight text-[16px]">
              {currentFeedback.feedback}
            </p>
            <div className="flex justify-center items-center gap-4 my-3">
              {[1, 2, 3, 4, 5].map((_, index) => (
                <img key={index} src="/images/feedback__star.png" alt="logo" />
              ))}
            </div>

            <h1 className="font-semibold"> {currentFeedback.givenBy}</h1>
            <p className="text-xs"> {currentFeedback.designation}</p>

            <div className="flex justify-center items-center gap-2 mt-5">
              {Array.from({ length: feedbackSliderData.length }).map(
                (_, index) => (
                  <div
                    key={index}
                    className={`w-[8px] h-[8px] rounded-full ${
                      index === currentIndex ? "bg-[#fff]" : "bg-[#918f8f]"
                    }`}
                  ></div>
                )
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Small Screen */}

        <div className="lg:hidden block mt-4 sm:mt-7 hero__caurosel">

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

          {
            feedbackSliderData.map((slide, index)=>(
               <SwiperSlide key={index}>

                 {/* Left Container */}
        <div className="w-full -mb-20 ">
        <div className="w-[60%] sm:w-[45%] md:w-[30%] mx-auto  ">
            <div className="relative w-full">
            {/* Behind  Image */}
            <div className=" w-[90%] absolute z-30 top-3 -right-9 ">
              <img
                src={slide.images[0]}
                alt="logo"
                className="w-full h-full rounded-xl"
              />

              <img
                src="/images/feedback__sound.png"
                alt="logo"
                className="absolute w-[20px] h-[20px] right-1 top-3"
              />
            </div>

            {/* Upper Image */}
            <div className=" w-full relative z-50 ">
              <img
                src={slide.images[1]}
                alt="logo"
                className="w-full h-full rounded-xl"
              />

              <img
                src="/images/feedback__sound.png"
                alt="logo"
                className="absolute right-3 top-3"
              />

              <div
                onClick={handleOpen}
                className="grid place-items-center absolute z-50 left-[37%] top-[43%] w-[70px] h-[70px] rounded-full cursor-pointer"
                style={{
                  fill: "rgba(0, 0, 0, 0.30)",
                  backdropFilter: "blur(7px)",
                }}
              >
                <img src="/images/feedbackplay.png" alt="logo" />
              </div>
            </div>
          </div>
        </div>
        </div>

        {/* Right Container */}
        <div className="px-5 sm:px-7 pt-10 bg-[#292929] min-h-[280px] w-full z-10 rounded-xl flex  items-center">
          <div className="text-[#fff]  ww-full text-center relative ">
            <img
              src="/images/hero__quotes.png"
              alt="logo"
              className=" w-[30px] h-[30px]"
            />

            <p className="font-extralight text-[12px] md:text-[15px]">
              {slide.feedback}
            </p>
            <div className="flex justify-center items-center gap-2 md:gap-4 my-2 md:my-3">
              {[1, 2, 3, 4, 5].map((_, index) => (
                <img key={index} src="/images/feedback__star.png" alt="logo" className="w-[14px] h-[14px]" />
              ))}
            </div>

            <h1 className="font-semibold text-[10px] md:text-[14px]"> {slide.givenBy}</h1>
            <p className="text-[10px] md:text-[14px]"> {slide.designation}</p>

            <div className="min-h-10">
             
            </div>
          </div>
        </div>



               </SwiperSlide>
            ))
          }


        </Swiper>


       
      </div>



    </div>
  );
}

export default Feedback;
