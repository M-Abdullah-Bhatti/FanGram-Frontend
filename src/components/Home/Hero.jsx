import React from "react";

const Hero = () => {
  return (
    <div className="flex justify-center items-center min-h-[80vh] relative home__hero__bg border-2 px-20">
      <img
        src="/images/hero__ladder__1.png"
        alt="logo"
        className="absolute top-0 left-0"
      />
      <img
        src="/images/hero__ladder__2.png"
        alt="logo"
        className="absolute bottom-0 left-2/4"
      />

      {/* Left Container */}
      <div className="w-[60%] relative border-2 flex justify-center items-start flex-col">
        <img
          src="/images/hero__shape__1.png"
          alt="logo"
          className="absolute right-0 -top-[2rem] w-[250px]"
        />

        <img
          src="/images/hero__shape__2.png"
          alt="logo"
          className="absolute right-0 top-[60%] w-[300px]"
        />

        {/* Content */}
        <h1 className="hero__message"># PersonalisedCelebrityMessages</h1>
        <h2 className="font-[Poppins] text-[50px] text-[#fff] font-bold leading-normal">
          We make your favourite celebritiestalk to you, personally.
        </h2>

        {/* Search */}
        <div className="flex justify-between items-center gap-3 w-3/4 p-1 mt-5 border-[1px] rounded-[100px] border-[#fff]">
          <img src="/images/hero__search.png" alt="logo" className="ml-3" />

          <input
            type="text"
            placeholder="Search Your Favourite creator"
            className="outline-none w-full h-full px-2 bg-transparent focus:bg-transparent text-[#fff]"
          />

          <button className="bg-[#D42978] text-[#fff] rounded-3xl py-2 px-4  ">
            Search
          </button>
        </div>
      </div>

      {/* Right Container */}
      <div className="w-[40%] border-2 flex justify-center items-start ">
        <div>
          <div className="flex ">
            <img
              src="/images/hero__slider__img1.png"
              alt="logo"
              className="w-[180px]"
            />
            <img
              src="/images/hero__slider__img2.png"
              alt="logo"
              className="w-[180px] mt-5"
            />
          </div>

          <div className="flex ">
            <img
              src="/images/hero__slider__img3.png"
              alt="logo"
              className="w-[180px]"
            />
            <img
              src="/images/hero__slider__img4.png"
              alt="logo"
              className="w-[180px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
