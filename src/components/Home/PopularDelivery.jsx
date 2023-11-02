import React, { useRef } from "react";
import { featuredCelebrityData } from "../../Data";
import PopularDeliveryCard from "./PopularDeliveryCard";

function PopularDelivery() {
  const scrollContainerRef = useRef(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollLeft -= 270;
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollLeft += 260;
    }
  };

  return (
    <div className="w-full bg-black text-white mb-12">
      <div className="flex items-center justify-between py-4">
      <div className="flex items-center space-x-8">
        <h2 className="text-4xl font-semibold">Next Day Delivery</h2>
        <div className="border border-[#D42978] text-[#D42978] rounded-3xl py-1 px-4">
          <span className="font-semibold text-lg cursor-pointer">See All</span>
        </div>
      </div>
      <div className="flex items-center space-x-4">
          <button
            onClick={scrollLeft}
            className="w-[50px] h-[50px] text-lg border border-[#D42978] flex items-center justify-center rounded-full transition duration-300"
            style={{ fontSize: "18px" }}
          >
            <img src="/images/back.svg" alt="back" />
          </button>
          <button
            onClick={scrollRight}
            className="w-[50px] h-[50px] bg-[#D42978] flex items-center justify-center rounded-full transition duration-300"
          >
            <img src="/images/forward.svg" alt="forward" />
          </button>
      </div>
      </div>
      <div
        className="overflow-x-scroll no-scrollbar" 
        ref={scrollContainerRef}
        style={{ scrollBehavior: "smooth", scrollbarWidth: "thin", scrollbarColor: "transparent transparent", msOverflowStyle: "none", }}
      >
        <div className="flex space-x-4 py-4">
          {featuredCelebrityData.map((card, i) => (
            <PopularDeliveryCard celebrity={card} key={i} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default PopularDelivery;
