import React from "react";
import BookingHeader from "../components/BookingDetails/BookingHeader";
import Collapsible from "../components/BookingDetails/Collapsible";

const BookingDetails = () => {
  return (
    <div className="bg-[#000] py-12 px-20 flex flex-col items-center overflow-hidden text-white">
      <h1 className="pb-6 font-semibold text-[45px] text-center">
        Booking details page
      </h1>
      <BookingHeader />
      <h1 className="my-[50px] font-semibold text-[45px] text-center">
        Frequently asked questions
      </h1>
      <Collapsible />
    </div>
  );
};

export default BookingDetails;
