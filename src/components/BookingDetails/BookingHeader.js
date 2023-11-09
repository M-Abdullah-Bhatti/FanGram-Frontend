import React from "react";

import BookingStepProgress from "./BookingStepProgress";
import { bookingheaderdata } from "../../Data";

export const bookingheader = [
  "Request For",
  "Recorder Video",
  "Order Id",
  "630114",
  "Occasion",
  "All The Best",
  "Booking Date",
  "19 Oct, 2023",
  "Transaction Id",
  "Pay_12234561",
  "Booking For",
  "Danish Rehman",
];

function BookingHeader({ currentIndex }) {
  return (
    <div
      className="flex flex-col lg:flex-row bg-[#161616] relative rounded-xl overflow-hidden px-0  lg:px-8 py-6 text-white lg:w-full mx-1 lg:mx-[20px] sm:w-[80%]
    "
    >
      {/* left div */}
      <div className="flex items-center justify-center">
        <div
          className=" max-h-[185px] rounded-2xl overflow-hidden border border-[#ccc]"
          style={{
            background: "lightgray 50%",
            minWidth: "148px",
            maxWidth: "225px",
          }}
        >
          <img
            src="/images/sunny.png"
            alt="celebrity"
            className="w-full h-[275px] object-fill "
          />
        </div>
      </div>

      <div className="ml-6 w-full  ">
        <div className="lg:justify-between text-center pr-10 lg:pr-0 lg:text-start">
          <h1 className="text-[20px] lg:text-[35px] font-extrabold ">
            Sunny Leone
          </h1>
        </div>
        {/* 1st phase */}
        <div>
          <div className="grid grid-cols-1 lg:grid-cols-3 ">
            <div className="bookingcommonmob lg:bookingcommon py-2 text-[12px] lg:text-lg lg:py-4">
              <span className="text-[#7E7E7E]">{bookingheader[0]}</span>
              <p>{bookingheader[1]}</p>
            </div>
            <div className="bookingcommonmob lg:bookingcommon lg:py-4 py-2 text-[12px] lg:text-lg lg:pl-4">
              <span className="text-[#7E7E7E]">{bookingheader[2]}</span>
              <p>{bookingheader[3]}</p>
            </div>
            <div className="grid grid-cols-2 py-2 text-[12px] lg:text-lg lg:py-4 lg:pl-4">
              <span className="text-[#7E7E7E]">{bookingheader[4]}</span>
              <p>{bookingheader[5]}</p>
            </div>
            <div className="bookingcommonmob lg:bookingcommon py-2 text-[12px] lg:text-lg lg:py-4">
              <span className="text-[#7E7E7E]">{bookingheader[6]}</span>
              <p>{bookingheader[7]}</p>
            </div>
            <div className="bookingcommonmob lg:bookingcommon py-2 text-[12px] lg:text-lg lg:py-4 lg:pl-4">
              <span className="text-[#7E7E7E]">{bookingheader[8]}</span>
              <p>{bookingheader[9]}</p>
            </div>
            <div className="grid grid-cols-2 py-2 text-[12px] lg:text-lg lg:py-4 lg:pl-4">
              <span className="text-[#7E7E7E]">{bookingheader[10]}</span>
              <p>{bookingheader[11]}</p>
            </div>
          </div>
        </div>

        <p className="text-[#7E7E7E] text-[12px] lg:text-lg">Script</p>
        <p className="py-2 lg:py-4 text-[12px] lg:text-lg w-[90%] lg:w-full ">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s
        </p>
        <BookingStepProgress currentIndex={currentIndex} />
      </div>
    </div>
  );
}

export default BookingHeader;
