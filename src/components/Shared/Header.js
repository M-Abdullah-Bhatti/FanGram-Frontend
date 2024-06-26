import React, { useState } from "react";
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
  const [openNavbar, setOpenNavbar]  = useState(false)

  const handleNavbar = () =>{
    setOpenNavbar(!openNavbar)
  }


  return (
    <div className=" bg-[#000] py-3 border-b-[1px] border-[#4b4b4b]">
      <div className="w-[90%] md:w-[85%] mx-auto flex justify-between items-center">
        <div className="flex w-full justify-between items-center gap-16">
          <Link to="/" className="lg:block hidden">

          <img src="/images/header__logo.png" alt="logo"  />
          </Link>
          <Link to="/" className="lg:hidden block">

          <img src="/images/header__logo__small.png" alt="logo"  />
          </Link>
          <div className="hidden lg:flex justify-start items-center gap-10">
        
          <div className="flex justify-start items-center gap-10">
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
         
        <div className="flex justify-between items-center gap-3 md:gap-5">
          <button className="hidden lg:block outline-none border-[1px] py-2 px-4 rounded-[40px] border-[#fff] text-[#fff]">
            <Link to="/promotion">
              Promote My Business
            </Link>
          </button>
          <button
            className="outline-none lg:text-base text-[14px] py-[5px] sm:py-2 px-3 sm:px-4  rounded-[40px] bg-[#D42978] text-[#fff]"
            onClick={() => setOpenLoginModal(true)}
          >
            Login/Signup
          </button>
           <img src="/images/toggle__open.png" alt="logo" className="lg:hidden block cursor-pointer" onClick={handleNavbar} />
          {openLoginModal && <Login  />}
          {openSignupModal && <SignUp  />}
        </div>
      </div>
    </div>
    </div>

    {/* Mobile Dawer */}
        {openNavbar && (
          <div
            className="block  basis-full overflow-hidden  lg:hidden w-[90%] mx-auto"
            style={{ height: "auto" }}
          >
            <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6 ">
              {headerLinks.map((item) => (
                <li
                  key={item.linkTo}
                  onClick={           
                    handleNavbar
                  }
                  className={`text-[#fff] block antialiased font-sans text-sm leading-normal  p-1  lg:transition-transform lg:hover:scale-105`}
                >
                  <Link
                    className="flex items-center"
                    to={item.linkTo}
                  >
                    {item.linkText}
                  </Link>
                </li>
              ))}
            </ul>

          

           

            <Link
            to={"/promotion"}
            onClick={handleNavbar}
              className="text-center text-sm py-2 px-4  text-white bg-[#D42978] hover:shadow-lg block w-full mb-2 rounded-[16px] capitalize shadow-none"
            >
              <span>Promote My Business</span>
            </Link>
          </div>
        )}


    </div>
  );
};

export default Header;
