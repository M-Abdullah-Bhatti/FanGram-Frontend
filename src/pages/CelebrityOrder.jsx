import React, { useState } from "react";
import OrderHeader from "../components/CelebrityOrder/OrderHeader";
import HorizontalCurl from "../components/CelebrityOrder/HorizontalCurl";
import OrderDetails from "../components/CelebrityOrder/OrderDetails";
import Payment from "../components/CelebrityOrder/Payment";
import Confirmation from "../components/CelebrityOrder/Confirmation";
import StepsProgress from "../components/CelebrityOrder/StepsProgress";
import Order from "../components/CelebrityOrder/Order";

function CelebrityOrder() {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <div className="bg-[#000] py-12 flex flex-col items-center overflow-hidden">
      {/* Steps Progress */}
      <StepsProgress currentIndex={currentIndex} setCurrentIndex={setCurrentIndex} />

      <HorizontalCurl />
      <div className="w-full px-6 md:px-12 lg:px-24">
        <OrderHeader />
        {currentIndex === 0 ? (
          <Order setCurrentIndex={setCurrentIndex} />
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
