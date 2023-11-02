import React from "react";
import { Link, useLocation } from "react-router-dom";

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
  return (
    <div className=" bg-[#000] py-3">
      <div className="w-[85%] mx-auto flex justify-between items-center">
        <div className="flex justify-between items-center gap-16">
          <img src="/images/header__logo.png" alt="logo" />
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

                {
                  location.pathname === item.linkTo  &&   <div className="bg-[#D42978] h-[1px] w-[80%]"></div>
                }

              
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-between items-center gap-5">
          <button className="outline-none border-[1px] py-2 px-4 rounded-[40px] border-[#fff] text-[#fff]">
            Promote My Business
          </button>
          <button className="outline-none  py-2 px-4  rounded-[40px] bg-[#D42978] text-[#fff]">
            Login/Signup
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;