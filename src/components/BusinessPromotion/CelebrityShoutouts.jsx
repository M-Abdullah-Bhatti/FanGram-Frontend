import { Navigation, Pagination, A11y, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import SwiperCore from "swiper";

SwiperCore.use([Navigation, Pagination]);

const CelebrityShoutouts = () => {
  return (
    <div className="w-full py-10">
      <h2 className="font-semibold text-center text-xl md:text-2xl lg:text-[45px] ">
        Celebrity Brand Shoutouts
      </h2>
      {/* Large Devices */}
      <div className="w-full hidden lg:grid grid-cols-5 gap-4 my-10 ">
        {/* Div */}
        <div className="flex flex-col gap-3">
          <div
            className="h-[300px]   rounded-xl "
            style={{
              background:
                "linear-gradient(180deg, #fff 20.71%, #D84388 109.7%)",
            }}
          ></div>
          <div
            className="h-[300px]  rounded-xl "
            style={{
              background:
                "linear-gradient(180deg, #fff 20.71%, #D84388 109.7%)",
            }}
          ></div>
        </div>
        {/* Div */}
        <div className="flex flex-col gap-3 mt-10">
          <div
            className="h-[300px]   rounded-xl "
            style={{
              background:
                "linear-gradient(180deg, #fff 20.71%, #D84388 109.7%)",
            }}
          ></div>
          <div
            className="h-[300px]  rounded-xl "
            style={{
              background:
                "linear-gradient(180deg, #fff 20.71%, #D84388 109.7%)",
            }}
          ></div>
        </div>
        {/* Div */}
        <div className="flex flex-col gap-3">
          <div
            className="h-[300px]   rounded-xl "
            style={{
              background:
                "linear-gradient(180deg, #fff 20.71%, #D84388 109.7%)",
            }}
          ></div>
          <div
            className="h-[300px]  rounded-xl "
            style={{
              background:
                "linear-gradient(180deg, #fff 20.71%, #D84388 109.7%)",
            }}
          ></div>
        </div>
        {/* Div */}
        <div className="flex flex-col gap-3 mt-10">
          <div
            className="h-[300px]   rounded-xl "
            style={{
              background:
                "linear-gradient(180deg, #fff 20.71%, #D84388 109.7%)",
            }}
          ></div>
          <div
            className="h-[300px]  rounded-xl "
            style={{
              background:
                "linear-gradient(180deg, #fff 20.71%, #D84388 109.7%)",
            }}
          ></div>
        </div>
        {/* Div */}
        <div className="flex flex-col gap-3">
          <div
            className="h-[300px]   rounded-xl "
            style={{
              background:
                "linear-gradient(180deg, #fff 20.71%, #D84388 109.7%)",
            }}
          ></div>
          <div
            className="h-[300px]  rounded-xl "
            style={{
              background:
                "linear-gradient(180deg, #fff 20.71%, #D84388 109.7%)",
            }}
          ></div>
        </div>
      </div>
      {/* Small Devices */}
      <div className="lg:hidden block mt-4 sm:mt-7 hero__caurosel w-[80%] sm:w-[40%] md:w-[30%] mx-auto">
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
          {[1, 2, 3, 4, 5].map((_, index) => (
            <SwiperSlide key={index}>
              <div>
                <div
                  className="h-[350px] w-full   rounded-xl "
                  style={{
                    background:
                      "linear-gradient(180deg, #fff 20.71%, #D84388 109.7%)",
                  }}
                ></div>
                <div className="min-h-40"></div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <h3 className=" text-center text-[12px] sm:text-lg md:text-2xl lg:text-[45px] mt-3">
        1000+ brands • 850 mn+ reach
      </h3>
    </div>
  );
};

export default CelebrityShoutouts;
