import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useStateContext } from "../../StateContext";
import Login from "../Login/Login";
import SignUp from "../SignUp/SignUp";

const headerLinks = [
  {
    linkText: "Categories",
    linkTo: "/categories",
  },

  {
    linkText: "Gifting",
    linkTo: "/gifting",
  },

  {
    linkText: "How to Fangram",
    linkTo: "/how_to_fangram",
  },

  {
    linkText: "Support",
    linkTo: "/support",
  },
];

const Header = () => {
  const location = useLocation();

  const { openLoginModal, setOpenLoginModal, openSignupModal} = useStateContext()


  return (
    <div className=" bg-[#000] py-3 border-b-[1px] border-[#4b4b4b]">
      <div className="w-[90%] md:w-[85%] mx-auto flex justify-between items-center">
        <div className="flex justify-between items-center gap-16">
          <img src="/images/header__logo.png" alt="logo" className="lg:block hidden" />
          <img src="/images/header__logo__small.png" alt="logo" className="lg:hidden block" />
          <div className="hidden lg:flex justify-start items-center gap-10">
            {headerLinks.map((item, index) => (
              <div className="flex justify-start items-start flex-col">
                <Link
                  className={`${
                    location.pathname === item.linkTo
                      ? "text-[#D42978]"
                      : "text-[#fff]"
                  }`}
                  key={index}
                  to={item.linkTo}
                >
                  {item.linkText}
                </Link>

                {location.pathname === item.linkTo && (
                  <div className="bg-[#D42978] h-[1px] w-[80%]"></div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-between items-center gap-3 md:gap-5">
          <button className="hidden lg:block outline-none border-[1px] py-2 px-4 rounded-[40px] border-[#fff] text-[#fff]">
            Promote My Business
          </button>
          <button
            className="outline-none lg:text-base text-[14px] py-[5px] sm:py-2 px-3 sm:px-4  rounded-[40px] bg-[#D42978] text-[#fff]"
            onClick={() => setOpenLoginModal(true)}
          >
            Login/Signup
          </button>
           <img src="/images/toggle__open.png" alt="logo" className="lg:hidden block cursor-pointer" />
          {openLoginModal && <Login  />}
          {openSignupModal && <SignUp  />}
        </div>
      </div>
    </div>
  );
};

export default Header;
