import React, { useEffect, useRef, useState } from "react";
import { cartoonData } from "../../Data";
import CelebrityPageCard from "./CelebrityPageCard";
import { Navigation, Pagination, A11y, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

function RecentViewed({ data }) {
  const scrollContainerRef = useRef(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollLeft -= 360;
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollLeft += 360;
    }
  };

  const [recentData, setRecentData] = useState([]);

  useEffect(() => {
    let recent = localStorage.getItem("recentlyViewed");
    recent = recent ? JSON.parse(recent) : [];
    setRecentData(recent);
  }, []);

  return (
    <div className="w-full bg-black text-white pb-10">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-3xl md:text-4xl font-semibold">Recent Viewed</h2>
        {recentData?.length > 3 && (
          <div className="flex items-center space-x-4">
            <button
              onClick={scrollLeft}
              className="w-[50px] h-[50px] text-lg border border-[#D42978] hidden md:flex items-center justify-center rounded-full transition duration-300"
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
        )}
      </div>
      <div
        className="hidden md:flex overflow-x-scroll no-scrollbar"
        ref={scrollContainerRef}
        style={{ scrollBehavior: "smooth" }}
      >
        <div className="flex space-x-4 py-4">
          {recentData?.map((card, index) => (
            <CelebrityPageCard celebrity={card} key={index} />
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
          {recentData.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="flex gap-5 justify-center">
                <CelebrityPageCard celebrity={slide} />
              </div>
              <div className="h-10"></div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default RecentViewed;
