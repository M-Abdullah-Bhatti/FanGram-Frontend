import React, { useState } from "react";
import OrderHeader from "../components/CelebrityOrder/OrderHeader";
import HorizontalCurl from "../components/CelebrityOrder/HorizontalCurl";
import OrderDetails from "../components/CelebrityOrder/OrderDetails";
import Payment from "../components/CelebrityOrder/Payment";
import Confirmation from "../components/CelebrityOrder/Confirmation";
import StepsProgress from "../components/CelebrityOrder/StepsProgress";

function CelebrityOrder() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const firstDivStyles = {
    backgroundColor: currentIndex >= 0 ? "#D42978" : ''
  }

  const secondDivStyles = {
    backgroundColor: currentIndex >= 1 ? "#D42978" : '',
    borderWidth: currentIndex < 1 ? 1 : '0',
    borderColor: currentIndex < 1 ? '#FFFFFF' : '',
  }

  const thirdDivStyles = {
    backgroundColor: currentIndex > 1 ? "#D42978" : '',
    borderWidth: currentIndex < 2 ? 1 : '0',
    borderColor: currentIndex < 2 ? '#FFFFFF' : '',
  }

  const firstLineStyles = {
    backgroundColor: currentIndex > 0 ? "#D42978" : '#FFFFFF',
  }

  const secondLineStyles = {
    backgroundColor: currentIndex > 1 ? "#D42978" : '#FFFFFF',
  }

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
