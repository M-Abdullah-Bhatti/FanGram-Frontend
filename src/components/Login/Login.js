import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { FaApple } from "react-icons/fa";
import { useStateContext } from "../../StateContext";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import apiUrl from "../../utils/url";
import { useUserLogin } from "../../hooks/auth-hooks";

const Login = () => {
  const { setOpenSignupModal, setOpenLoginModal } = useStateContext();

  const [userData, setUserData] = useState({});
  console.log(userData);

  const handleGoogleLogin = async () => {
    window.open(`${apiUrl}/auth/google`, "_self");
  };

  // const {
  //   mutate: addMutate,
  //   isLoading,
  // } = useUserLogin(JSON.stringify(userData));

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserData({
      ...userData,
      [name]: value,
    });
  };

  // const handleSubmit = async (event) => {
  //   event.preventDefault();

  //   addMutate(
  //     {},
  //     {
  //       onSuccess: (response) => {
  //         if (response?.data?.status === false) {
  //           toast.error(response?.data?.message);
  //         }
  //         if (response?.data?.status === true) {
  //           toast.success(response?.data?.message);

  //         }
  //       },
  //     }
  //   );
  // };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("hello", userData);
  };

  return (
    <div className="w-full  flex items-center justify-center fixed left-0 right-0 top-0 bottom-0 z-10 bg-black bg-opacity-50">
      <div className="bg-white rounded-xl">
        <div className="w-[584px] h-[511px] border-2 rounded-xl">
          <div className="text-end ">
            <button
              className="bg-[#CA2981] text-white p-1 rounded-full mt-2 mr-2"
              onClick={() => {
                setOpenLoginModal(false);
              }}
            >
              <FaTimes />
            </button>
          </div>
          <div className="px-10">
            <h2 className="font-extrabold text-3xl my-6">Login with FanGram</h2>
            <div className="flex mt-6 mx-[-15px] mb-5">
              <div
                className="bg-[#EAEAEA] p-2 rounded-full ml-3 cursor-pointer"
                onClick={handleGoogleLogin}
              >
                {/* <FaGoogle className="text-[#3b5998] text-3xl " /> */}
                <img src="/images/GoogleAuth.svg" />
              </div>
            </div>
            <div className="flex mt-2 mb-4">
              <p>Or Continue With Email</p>
            </div>
            <div className="mt-4">
              <input
                type="email"
                name="email"
                required
                onChange={handleInputChange}
                placeholder="Enter Your Email Address"
                className="py-3 px-5 w-full rounded-lg mb-3 bg-[#EAEAEA]"
              />

              <input
                type="text"
                placeholder="Password"
                required
                name="password"
                onChange={handleInputChange}
                className="py-3 px-5 w-full rounded-lg bg-[#EAEAEA]"
              />
            </div>
            <div className="grid place-items-center mt-6">
              <button
                onClick={handleSubmit}
                className="bg-[#CA2981] text-white rounded-full py-2 px-24"
              >
                Login
              </button>
            </div>
            <p className="text-center my-10">
              Not on FanGram?
              <Link
                to="#"
                className="text-[#CA2981]"
                onClick={() => {
                  setOpenLoginModal(false);
                  setOpenSignupModal(true);
                }}
              >
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
