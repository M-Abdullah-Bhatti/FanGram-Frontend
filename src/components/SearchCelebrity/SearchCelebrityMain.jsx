import React from "react";
import { searchCelebrity } from "../../Data";

const SearchCelebrityMain = () => {
  return (
    <div className="bg-black px-10 py-10">
      <div className="text-white">
        <h1 className="pb-6 font-medium md:font-semibold text-2xl text-center ">
          Search Celebrity
        </h1>
        {/* Search */}
        <div className="flex justify-between items-center gap-1 sm:gap-3 w-full  md:w-3/4 p-1 my-5 border-[1px] rounded-[100px] border-[#fff]">
          <img
            src="/images/hero__search.png"
            alt="logo"
            className="ml-2 md:ml-3 w-[30px] md:w-unset"
          />

          <input
            type="text"
            placeholder="Search Your Favourite creator"
            className="outline-none md:text-base text-sm w-full h-full px-2 bg-transparent focus:bg-transparent text-[#fff]"
          />

          <button className="bg-[#D42978] text-[#fff] rounded-3xl py-2 px-3 sm:px-4 sm:text-base text-sm">
            Search
          </button>
        </div>
        <div className="w-full flex flex-row   flex-wrap ">
          {searchCelebrity.map((item) => (
            <div className="lg:w-[45%] w-full m-2 rounded-xl p-4 bg-[#202020] ">
              <div className="flex flex-row items-center">
                <div className="h-[4vmax] w-[4vmax] rounded-full mr-3">
                  <img
                    src={item.image}
                    alt="priya"
                    className="h-full w-full rounded-full"
                  />
                </div>
                <h2 className="font-bold">{item.heading}</h2>
              </div>

              <p className="mt-2">{item.paragraph}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SearchCelebrityMain;
