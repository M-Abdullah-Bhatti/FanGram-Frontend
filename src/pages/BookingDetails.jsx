import React from "react";
import BookingHeader from "../components/BookingDetails/BookingHeader";
import Collapsible from "../components/BookingDetails/Collapsible";

const BookingDetails = () => {
  return (
    <div className="bg-[#000] py-12 lg:px-20 px-3 flex flex-col items-center overflow-hidden text-white">
      <h1 className="pb-6 font-semibold text-[20px] lg:text-[45px] text-center">
        Booking details page
      </h1>
      <BookingHeader />
      <h1 className="my-4 lg:my-[50px] text-[20px] font-semibold lg:text-[45px] text-center">
        Frequently asked questions
      </h1>
      <Collapsible />
    </div>
  );
};

export default BookingDetails;
