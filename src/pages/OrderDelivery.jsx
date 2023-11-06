import React from "react";
import { orderdeliveryicons } from "../Data";

const svg = {
  icon: (
    <svg
      width="3S0"
      height="30"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_92_32423)">
        <path
          d="M9.16134 1.23895C5.67669 -0.759889 2.85156 0.877586 2.85156 4.89343V34.5286C2.85156 38.5485 5.67669 40.1838 9.16134 38.1869L35.064 23.3319C38.5498 21.3323 38.5498 18.0928 35.064 16.0937L9.16134 1.23895Z"
          fill="#FFF1F1"
        />
      </g>
      <defs>
        <clipPath id="clip0_92_32423">
          <rect
            width="38.6514"
            height="38.6514"
            fill="white"
            transform="translate(0.939453 0.386719)"
          />
        </clipPath>
      </defs>
    </svg>
  ),
};

const OrderDelivery = () => {
  return (
    <div className="bg-black grid place-items-center h-screen">
      <div className="w-[70vmax] h-[40vmax] flex items-center justify-center bg-white">
        <div className="w-[45%] bg-[#D42978] h-full rounded-r-full flex items-center justify-center">
          <div className="bg-[#D9D9D9] h-[25vmax] w-[18vmax] rounded-lg grid place-items-center">
            <div className="bg-[#989898] rounded-full w-fit p-4 ">
              {svg.icon}
            </div>
          </div>
        </div>
        <div className="w-[55%] text-black h-full text-center pt-[12vmax] px-[3vmax]  box-border bg-white">
          <h1 className="font-bold text-2xl">Sunny Leone</h1>
          <p className="text-sm my-2">Script</p>
          <p className="mb-4">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s
          </p>
          <button className="w-fit bg-[#D42978] py-[10px] px-[50px] rounded-full cursor-pointer text-white font-bold mb-4">
            Download {orderdeliveryicons.icon}
          </button>
          <div className="flex items-center justify-center">
            {orderdeliveryicons.map((item) => (
              <div className="border border-[#D42978] w-fit p-2 rounded-lg m-4">
                {item.icon}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderDelivery;
