import React, { useState } from "react";
import OrderHeader from "../components/CelebrityOrder/OrderHeader";
import HorizontalCurl from "../components/CelebrityOrder/HorizontalCurl";
import OrderDetails from "../components/CelebrityOrder/OrderDetails";
import Payment from "../components/CelebrityOrder/Payment";
import Confirmation from "../components/CelebrityOrder/Confirmation";

function CelebrityOrder() {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <div className="bg-[#000] py-12 flex flex-col items-center overflow-hidden">
      {/* Steps Progress */}

      <div className="border-2 flex justify-start items-center">
        {/* First Div */}
        <div className="border-2 flex justify-start items-center">
          <div className="bg-[#D42978] w-[40px] h-[40px] rounded-full"></div>
          <div className="w-[300px] h-[3px] bg-[#D42978]"></div>
        </div>
        {/* Second Div */}
        <div className="border-2 flex justify-start items-center">
          <div className="bg-[#D42978] w-[40px] h-[40px] rounded-full"></div>
          <div className="w-[300px] h-[3px] bg-[#D42978]"></div>
        </div>
        {/* Third Div */}
        <div className="bg-[#D42978] w-[40px] h-[40px] rounded-full"></div>
      </div>

      <HorizontalCurl />
      <div className="px-20">
        <OrderHeader />
        {currentIndex === 0 ? (
          <OrderDetails setCurrentIndex={setCurrentIndex} />
        ) : currentIndex === 1 ? (
          <Confirmation setCurrentIndex={setCurrentIndex} />
        ) : (
          <Payment />
        )}
      </div>
    </div>
  );
}

export default CelebrityOrder;
