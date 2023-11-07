import React, { useState } from "react";
import OrderHeader from "../components/CelebrityOrder/OrderHeader";
import HorizontalCurl from "../components/CelebrityOrder/HorizontalCurl";
import OrderDetails from "../components/CelebrityOrder/OrderDetails";
import Payment from "../components/CelebrityOrder/Payment";
import Confirmation from "../components/CelebrityOrder/Confirmation";
import StepsProgress from "../components/CelebrityOrder/StepsProgress";

function CelebrityOrder() {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <div className="bg-[#000] py-12 flex flex-col items-center overflow-hidden">
      {/* Steps Progress */}
      <StepsProgress currentIndex={currentIndex} />

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
