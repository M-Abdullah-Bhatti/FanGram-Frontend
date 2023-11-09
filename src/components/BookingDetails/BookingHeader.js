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
      className="flex bg-[#161616] relative rounded-xl overflow-hidden px-8 py-6 text-white w-full mx-[20px]
    "
    >
      {/* left div */}
      <div
        className="max-h-[275px] rounded-2xl overflow-hidden border border-[#ccc]"
        style={{
          background: "lightgray 50%",
          minWidth: "225px",
          maxWidth: "225px",
        }}
      >
        <img
          src="/images/sunny.png"
          alt="celebrity"
          className="w-full h-[275px] object-fill"
        />
      </div>
      <div className="ml-6 w-full  ">
        <div className="flex justify-between">
          <h1 className="text-[35px] font-extrabold">Sunny Leone</h1>
        </div>
        {/* 1st phase */}
        <div>
          <div className="grid grid-cols-3">
            <div className="bookingcommon py-4">
              <span className="text-[#7E7E7E]">{bookingheader[0]}</span>
              <p>{bookingheader[1]}</p>
            </div>
            <div className="bookingcommon py-4 pl-4">
              <span className="text-[#7E7E7E]">{bookingheader[2]}</span>
              <p>{bookingheader[3]}</p>
            </div>
            <div className="grid grid-cols-2 py-4 pl-4">
              <span className="text-[#7E7E7E]">{bookingheader[4]}</span>
              <p>{bookingheader[5]}</p>
            </div>
            <div className="bookingcommon py-4">
              <span className="text-[#7E7E7E]">{bookingheader[6]}</span>
              <p>{bookingheader[7]}</p>
            </div>
            <div className="bookingcommon py-4 pl-4">
              <span className="text-[#7E7E7E]">{bookingheader[8]}</span>
              <p>{bookingheader[9]}</p>
            </div>
            <div className="grid grid-cols-2 py-4 pl-4">
              <span className="text-[#7E7E7E]">{bookingheader[10]}</span>
              <p>{bookingheader[11]}</p>
            </div>
          </div>
        </div>

        <p className="text-[#7E7E7E]">Script</p>
        <p className="py-4">
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
