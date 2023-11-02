import React from "react";
import "./styles.css";

const Footer = () => {
  return (
    <div className="flex flex-col relative bg-black">
      {/* Upper Container */}
      <div className="text-white px-[100px]">
        <img src="/images/logo.png" />
      </div>

      {/* Below Container */}
      <div className="flex flex-col">
        <div className="w-[70%] min-h-[1px] bg-[#9A9A9A]"></div>
        <p className="text-[#747474] text-[14px] font-normal pb-2 pt-2 px-[100px]">
          Copyright © 2004-2023 FanGram® All Rights Reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
