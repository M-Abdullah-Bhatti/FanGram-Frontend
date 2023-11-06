import React from "react";
import { myProfilePageLinks } from "../../Data";
import { Link } from "react-router-dom";

const BottomLinks = () => {
  return (
    <>
      <h1 className="pb-6 font-semibold text-2xl text-start">Discover More:</h1>
      <div className="flex items-center justify-between ">
        {myProfilePageLinks.map((links, index) => (
          <div
            key={index}
            className="w-fit py-2 px-2 m-2 bg-[#D42978] rounded-full "
          >
            <Link to="#">{links.text}</Link>
          </div>
        ))}
      </div>
    </>
  );
};

export default BottomLinks;
