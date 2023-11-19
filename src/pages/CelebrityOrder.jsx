import React, { useEffect, useState } from "react";
import OrderHeader from "../components/CelebrityOrder/OrderHeader";
import HorizontalCurl from "../components/CelebrityOrder/HorizontalCurl";
import OrderDetails from "../components/CelebrityOrder/OrderDetails";
import Payment from "../components/CelebrityOrder/Payment";
import Confirmation from "../components/CelebrityOrder/Confirmation";
import StepsProgress from "../components/CelebrityOrder/StepsProgress";
import Order from "../components/CelebrityOrder/Order";
import { useGetCelebrityDetails } from "../hooks/celebrity-hooks";
import { useNavigate, useParams } from "react-router-dom";
import { useStateContext } from "../StateContext";

function CelebrityOrder() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { setOpenLoginModal, isLoggedIn, setOrderData } = useStateContext();
  const params = useParams();
  const navigate = useNavigate();

  console.log("Params: ", params.id);
  const { data: celebrityDetailsData, isLoading: celebrityDetailsLoading } =
    useGetCelebrityDetails(params?.id);

  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/");
      setOpenLoginModal(true);
    }

    return () => {
      console.log("User leaves the CelebrityOrder page");
      setOrderData({
        bookingTo: { name: "", gender: "He/Him" },
        bookingBy: { name: "", gender: "He/Him" },
        occasion: "",
        language: "English",
        customMessage: "",
        price: "",
        publicVideo: true,
        fastDelivery: false,
        extras: [],
        billingNumber: "",
        bookingEmail: "",
        addOnnPrice: 0,
        coupenDiscount: 550,
        coupenNames: [],
      });
    };
  }, []);

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
          <Payment
            celebrityDetailsData={celebrityDetailsData}
            isLoading={celebrityDetailsLoading}
          />
        )}
      </div>
    </div>
  );
}

export default CelebrityOrder;
