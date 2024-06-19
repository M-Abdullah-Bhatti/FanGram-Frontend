import React, { useRef } from "react";
import VideoCard from "./VideoCard";
import RandomCard from "./RandomCard";
import { celebrityDemoData } from "../../Data";
import { Navigation, Pagination, A11y, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

function DemoVideos({ data }) {
  const scrollContainerRef = useRef(null);
  console.log("video data is", data);

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
    <div className="flex w-full py-6 lg:space-x-6">
      {data?.length > 4 && (
        <div className="flex items-center">
          <button
            onClick={scrollLeft}
            className="w-[50px] h-[50px] border border-[#D42978] hidden md:flex items-center justify-center rounded-full transition duration-300"
          >
            <img src="/images/back.svg" alt="back" />
          </button>
        </div>
      )}

      <div
        className="hidden md:flex overflow-x-scroll no-scrollbar w-full"
        ref={scrollContainerRef}
        style={{ scrollBehavior: "smooth" }}
      >
        <div className="flex space-x-4 py-4 w-screen">
          {data.map((card, index) => (
            <React.Fragment key={index}>
              <VideoCard celebrity={card} />
              {(index + 1) % 2 === 0 && <RandomCard />}
            </React.Fragment>
          ))}
        </div>
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
          {data.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="flex gap-5 justify-center">
                {(index + 1) % 2 === 0 ? (
                  <RandomCard />
                ) : (
                  <VideoCard celebrity={slide} />
                )}
              </div>
              <div className="h-10"></div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {data.length > 4 && (
        <div className="flex items-center">
          <button
            onClick={scrollRight}
            className="w-[50px] h-[50px] bg-[#D42978] hidden md:flex items-center justify-center rounded-full transition duration-300"
          >
            <img src="/images/forward.svg" alt="forward" />
          </button>
        </div>
      )}
    </div>
  );
}

export default DemoVideos;
