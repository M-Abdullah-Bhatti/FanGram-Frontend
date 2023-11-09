import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { FaApple } from "react-icons/fa";
import Login from "../Login/Login";
import { useStateContext } from "../../StateContext";

// slider
import { Navigation, Pagination, A11y, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import SwiperCore from "swiper";
import { signupSliderImages } from "../../Data";
import apiUrl from "../../utils/url";

const SignUp = () => {
  const { setOpenSignupModal, setOpenLoginModal } = useStateContext();

  const handleGoogleLogin = async () => {
    window.open(`${apiUrl}/auth/google`, "_self");
  };

  return (
    <div className="w-full flex items-center justify-center fixed left-0 right-0 top-0 bottom-0 z-10 bg-black bg-opacity-50">
      <div className="w-[1062px] h-[620px] bg-[#CA2981] flex rounded-[30px]">
        <div className="w-1/2 h-full flex items-center justify-center  ">
          {/* <div className="w-[397px] h-[513px] absolute">
            <img
              src="/images/signup_left_nora.jpeg"
              alt=""
              className="w-full h-full"
            />
          </div> */}

          {/* <p className="px-4 py-2 bg-[#806D67] rounded-full w-fit text-white relative top-0 font-bold relative top-52 left-2">
            Nora Fatehi
          </p> */}
          <Swiper
            modules={[Navigation, Pagination, A11y, Autoplay]}
            slidesPerView={1}
            spaceBetween={1}
            slidesPerGroup={1}
            autoplay={true}
            pagination={true}
            slideActiveClass="activeSlide"
            className="w-[397px] "
          >
            {signupSliderImages.map((slide, index) => (
              <SwiperSlide key={index} className="absolute">
                <div className="w-[397px] h-[513px]  ">
                  <img src={slide.image} alt="" className="w-full h-full" />
                </div>
                <p className="px-4 py-2 bg-[#806D67] rounded-full w-fit text-white  font-bold relative bottom-[90px] left-[140px] z-20 ">
                  Nora Fatehi
                </p>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="w-1/2 border-solid border-2 bg-white px-6 rounded-[30px]">
          <div className="text-end ">
            <button
              className="bg-[#CA2981] text-white p-1 rounded-full mt-2"
              onClick={() => setOpenSignupModal(false)}
            >
              <FaTimes />
            </button>
          </div>
          <p className="text-[#D42978] font-satisfy text-2xl my-4">Welcome</p>
          <h2 className="font-extrabold text-3xl">Sign up with FanGram</h2>
          <div className="flex mt-6 mx-[-15px] mb-5">
            <div
              className="bg-[#EAEAEA] p-2 rounded-full ml-3 cursor-pointer"
              onClick={handleGoogleLogin}
            >
              {/* <FaGoogle className="text-[#3b5998] text-3xl " /> */}
              <img src="/images/GoogleAuth.svg" />
            </div>
          </div>
          <div className="flex mt-2">
            <p>Or Continue With Email</p>
          </div>
          <div className="mt-4">
            <input
              type="text"
              placeholder="Enter Your name"
              className="py-3 px-2 w-full rounded-lg bg-[#EAEAEA]"
            />
            <input
              type="email"
              placeholder="Enter Your Email Address"
              className="py-3 px-2 w-full rounded-lg mt-3 bg-[#EAEAEA]"
            />
            <input
              type="password"
              placeholder="Enter Your Password"
              className="py-3 px-2 w-full rounded-lg mt-3 bg-[#EAEAEA]"
            />
            <input
              type="text"
              placeholder="Enter Your invite Code (Optional)"
              className="py-3 px-2 w-full rounded-lg mt-3 bg-[#EAEAEA]"
            />
          </div>
          <div className="grid place-items-center mt-6">
            <a
              href="#"
              className="bg-[#CA2981] text-white rounded-full py-2 px-24"
            >
              Sign up
            </a>
          </div>
          <p className="text-center mt-5">
            Already on FanGram?
            <a
              href="#"
              className="text-[#CA2981]"
              onClick={() => {
                setOpenSignupModal(false);
                setOpenLoginModal(true);
              }}
            >
              Login
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
