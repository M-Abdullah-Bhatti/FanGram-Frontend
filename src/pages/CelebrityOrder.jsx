import React, { useState } from "react";
import OrderHeader from "../components/CelebrityOrder/OrderHeader";
import HorizontalCurl from "../components/CelebrityOrder/HorizontalCurl";
import OrderDetails from "../components/CelebrityOrder/OrderDetails";
import Payment from "../components/CelebrityOrder/Payment";
import Confirmation from "../components/CelebrityOrder/Confirmation";
import StepsProgress from "../components/CelebrityOrder/StepsProgress";
import Order from "../components/CelebrityOrder/Order";
import { useGetCelebrityDetails } from "../hooks/celebrity-hooks";
import { useNavigate, useParams } from "react-router-dom";

function CelebrityOrder() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const params = useParams();
  const navigate = useNavigate();

  console.log("Params: ", params.id);
  const { data: celebrityDetailsData, isLoading: celebrityDetailsLoading } =
    useGetCelebrityDetails(params?.id);

  return (
    <div className="bg-[#000] py-12 flex flex-col items-center overflow-hidden">
      {/* Steps Progress */}
      <StepsProgress
        currentIndex={currentIndex}
        setCurrentIndex={setCurrentIndex}
      />

      <HorizontalCurl />
      <div className="w-full px-6 md:px-12 lg:px-24">
        <OrderHeader
          celebrityDetailsData={celebrityDetailsData}
          isLoading={celebrityDetailsLoading}
        />
        {currentIndex === 0 ? (
          <Order
            setCurrentIndex={setCurrentIndex}
            celebrityDetailsData={celebrityDetailsData}
            isLoading={celebrityDetailsLoading}
          />
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
