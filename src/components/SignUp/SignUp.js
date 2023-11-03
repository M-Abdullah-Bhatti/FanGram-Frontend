import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { FaApple } from "react-icons/fa";
import Login from "../Login/Login";

const SignUp = ({ closeModal }) => {
  const [showModalLogin, setShowModalLogin] = useState(false);
  const closeModalLogin = () => setShowModalLogin(false);
  return (
    <div className="w-full flex items-center justify-center fixed left-0 right-0 top-0 bottom-0 z-10 bg-black bg-opacity-50">
      <div className="w-[1062px] h-[677px] bg-[#CA2981] flex rounded-[30px]">
        <div className="w-1/2 h-full grid place-items-center  ">
          <div className="w-[397px] h-[513px] absolute">
            <img
              src="/images/signup_left_nora.jpeg"
              alt=""
              className="w-full h-full"
            />
          </div>

          <p className="px-4 py-2 bg-[#806D67] rounded-full w-fit text-white relative top-0 font-bold relative top-52 left-2">
            Nora Fatehi
          </p>
        </div>
        <div className="w-1/2 border-solid border-2 bg-white px-6 rounded-[30px]">
          <div className="text-end ">
            <button
              className="bg-[#CA2981] text-white p-1 rounded-full mt-2"
              onClick={closeModal}
            >
              <FaTimes />
            </button>
          </div>
          <p className="text-[#D42978] font-satisfy text-2xl my-6">Welcome</p>
          <h2 className="font-extrabold text-3xl">Sign up with FanGram</h2>
          <div className="flex  mt-6">
            <div className="bg-[#EAEAEA] p-2 rounded-full">
              <FaFacebook className=" text-[#3b5998] text-3xl" />
            </div>
            <div className="bg-[#EAEAEA] p-2 rounded-full ml-3">
              <FaGoogle className="text-[#3b5998] text-3xl" />
            </div>
            <div className="bg-[#EAEAEA] p-2 rounded-full ml-3">
              <FaApple className="text-black text-3xl" />
            </div>

            {/* <div>
              <img
                src="/images/signup_right_facebook.jpeg"
                alt=""
                className="rounded-full p-2"
              />
            </div> */}
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
          <p className="text-center my-10">
            Already on FanGram?
            <a
              href="#"
              className="text-[#CA2981]"
              onClick={() => {
                closeModal();
                setShowModalLogin(true);
              }}
            >
              Login
            </a>
            {showModalLogin && <Login closeModal={closeModal} />}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
