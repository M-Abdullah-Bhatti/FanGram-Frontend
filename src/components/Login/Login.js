import React from "react";
import { FaTimes } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { FaApple } from "react-icons/fa";
import { useStateContext } from "../../StateContext";

const Login = () => {

    const { openSignupModal, setOpenSignupModal, setOpenLoginModal} = useStateContext()

  return (
    <div className="w-full  flex items-center justify-center fixed left-0 right-0 top-0 bottom-0 z-10 bg-black bg-opacity-50">
      <div className="bg-white rounded-xl">
        <div className="w-[584px] h-[511px] border-2 rounded-xl">
          <div className="text-end ">
            <button
              className="bg-[#CA2981] text-white p-1 rounded-full mt-2 mr-2"
              onClick={()=>{
                setOpenLoginModal(false)
              }}
            >
              <FaTimes />
            </button>
          </div>
          <div className="px-10">
            <h2 className="font-extrabold text-3xl my-6">Login with FanGram</h2>
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
            <div className="flex mt-2 mb-4">
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
            </div>
            <div className="grid place-items-center mt-6">
              <a
                href="#"
                className="bg-[#CA2981] text-white rounded-full py-2 px-24"
              >
                Login
              </a>
            </div>
            <p className="text-center my-10">
              Not on FanGram?
              <a href="#" className="text-[#CA2981]" onClick={()=>{
               setOpenLoginModal(false)
               setOpenSignupModal(true)
              }}>
                Sign up
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
