import React, { useRef } from "react";
import { featuredCelebrityData } from "../../Data";
import PopularDeliveryCard from "./PopularDeliveryCard";

function TringDhamaka() {
  const scrollContainerRef = useRef(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollLeft -= 300;
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollLeft += 300;
    }
  };

  return (
    <div className="w-full bg-black text-white">
      <div className="flex items-center justify-between py-4">
        <div className="flex items-center space-x-8">
            <h2 className="text-4xl font-semibold">Tring Dhamaka</h2>
            <div className="border border-[#D42978] text-[#D42978] rounded-3xl py-1 px-4">
            <span className="font-semibold text-lg cursor-pointer">See All</span>
            </div>
        </div>
        <div className="flex items-center space-x-4">
            <button
                onClick={scrollLeft}
                className="w-[50px] h-[50px] border border-[#D42978] text-[#D42978] flex items-center justify-center rounded-full transition duration-300"
            >
                <img src="/images/back.svg" alt="back" />
            </button>
            <button onClick={scrollRight}
                className="w-[50px] h-[50px] bg-[#D42978] flex items-center justify-center rounded-full transition duration-300"
            >
                <img src="/images/forward.svg" alt="forward" />
            </button>
        </div>
      </div>
      <div
        className="overflow-x-scroll no-scrollbar"
        ref={scrollContainerRef}
        style={{ scrollBehavior: "smooth" }}
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

export default TringDhamaka;
