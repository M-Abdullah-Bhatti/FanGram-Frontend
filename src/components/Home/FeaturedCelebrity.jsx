import React, { useRef } from "react";
import FeaturedCelebrityCard from "./FeaturedCelebrityCard";
import { featuredCelebrityData } from "../../Data";

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
    <div className="w-full bg-black text-white">
      <div className="py-4 px-16">
        <div className="flex items-center justify-between">
          <h2 className="text-4xl font-semibold">Featured Celebrity</h2>
          <div className="flex items-center space-x-4">
            <button onClick={scrollLeft}
              className="w-[50px] h-[50px] border border-[#D42978] flex items-center justify-center rounded-full transition duration-300"
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
        <p className="text-lg">
          Get personalised video messages from your favourite celebrity! What's
          more? The price you see is the price you pay!
        </p>
      </div>
      <div
        className="overflow-x-scroll no-scrollbar"
        ref={scrollContainerRef}
        style={{ scrollBehavior: "smooth" }}
      >
        <div className="flex space-x-4 px-8 py-4">
          {featuredCelebrityData.map((card, index) => (
            <FeaturedCelebrityCard celebrity={card} key={index} />
          ))}
        </div>
      </div>

      <div className="overflow-x-scroll mt-12 no-scrollbar" ref={secondaryScrollContainerRef}
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
