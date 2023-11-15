import React from "react";
import PaymentExtrasSection from "./PaymentExtrasSection";
import TicketDesign from "./TicketDesign";
import SurpriseCard from "./SurpriseCard";
import { surpriseGift } from "../../Data";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { useStateContext } from "../../StateContext";

function Confirmation({ setCurrentIndex }) {
  const { orderData, setOrderData } = useStateContext();

  console.log("orderrrrrrrrrrrr: ", orderData);
  return (
    <div className="mt-12 md:mt-24 lg:mx-32">
      <div className="bg-white rounded-t-2xl md:rounded-t-3xl">
        <div className="px-6 py-2 pt-6">
          <h3 className="mb-3 text-[#7E7E7E] font-semibold">
            YOUR BOOKING DETAILS
          </h3>
          <div className="flex gap-3 border-b-4 pb-6">
            <img
              src="/images/order__sunny.png"
              className="rounded-xl h-[85px]"
              alt="sunny"
            />
            <div>
              <h1 className="text-base md:text-2xl font-extrabold mb-1">
                Sunny Leone
              </h1>
              <span className="flex gap-2 text-[#D42978] text-sm md:text-base">
                Summary
              </span>
              <p className="text-[#7E7E7E] text-xs md:text-base">
                {orderData?.customMessage
                  ? orderData?.customMessage
                  : "Don't have any custom message"}
              </p>
            </div>
          </div>

          {/* Charges */}
          <div>
            <div className="flex justify-between bg-[#F9F9F9] p-2 my-4 rounded-lg">
              <span className="font-semibold">Diwali</span>
              <div className="space-x-2 text-sm md:text-base">
                <span className="font-semibold">Rs {orderData?.price}</span>
                <span className="text-[#4E4E4E] text-xs line-through">
                  Rs{orderData?.price + 550}
                </span>
              </div>
            </div>
            <div className="flex justify-between bg-[#F9F9F9] p-2 my-4 rounded-lg text-sm md:text-base">
              <div className="flex space-x-3">
                <img src="/images/confirmation__discount.svg" alt="" />
                <span>
                  <span className="text-[#008115] font-semibold">₹550</span>{" "}
                  saved
                </span>
              </div>
              <span className="font-semibold text-[#008115]">
                Limited Offer
              </span>
            </div>
          </div>
        </div>

        {/* Applied in the end where you are offering gift to specific user from admin dashboard */}
        {/* Design */}
        {/* <TicketDesign /> */}

        {/* Free Gift */}
        {/* <div className="px-3 md:px-6 py-3">
          <h2 className="text-[#7E7E7E] font-semibold text-sm md:text-base">
            You're eligible for a FREE gift!
          </h2>
          <div className="flex justify-between bg-[#F9F9F9] gap-1 p-3 my-4 rounded-lg">
            <div className="flex space-x-2 md:space-x-3">
              <div className="flex items-center">
                <img
                  src="/images/confirmation__insta.svg"
                  alt=""
                  className="w-[25px] md:w-full"
                />
              </div>
              <div className="flex flex-col justify-center">
                <h2 className="font-semibold text-[12px] md:text-base">
                  DM On Instagram Get Unlocked
                </h2>
                <span className="space-x-1 md:space-x-4 font-medium text-[12px] md:text-base">
                  ₹0{" "}
                  <span className="line-through mx-2 text-[#7E7E7E]">
                    ₹1499{" "}
                  </span>{" "}
                  Free
                </span>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-[12px] md:text-base">
                Want to add this to your order?
              </span>
              <div className="flex items-center justify-center w-[20px] md:w-[35px] h-[14px] md:h-[35px] bg-[#D42978] rounded-full cursor-pointer">
                <img src="/images/plus.svg" alt="" className="w-1/2" />
              </div>
            </div>
          </div>
        </div> */}

        {/* Design */}
        {/* <TicketDesign /> */}

        {/* Surprise Gift */}
        {/* <div className="px-6 py-3">
          <h2 className="text-[#7E7E7E] font-semibold text-sm md:text-base">
            Level Up Your Surprise
          </h2>
          <div>
            {surpriseGift.map((surprise, index) => (
              <SurpriseCard surprise={surprise} key={index} />
            ))}
          </div>
        </div> */}

        {/* Design */}
        <TicketDesign />

        {/* Offers */}
        <div className="px-6 py-3">
          <h2 className="text-[#7E7E7E] font-semibold text-sm md:text-base">
            OFFERS
          </h2>
          <div className="flex justify-between px-2 py-1 md:p-3 my-4 rounded-lg">
            <div className="flex gap-3">
              <div className="flex items-center justify-center">
                <img src="/images/confirmation__tick.svg" alt="" />
              </div>
              <div className="text-xs md:text-base font-medium">
                <h2 className="text-[#7E7E7E] mb-1">"SMILE5" coupon applied</h2>
                <span>Save another ₹550 on this order</span>
              </div>
            </div>
            <div className="flex flex-col items-center font-bold text-xs md:text-base text-center">
              {/* <span className="text-[#D42978] mb-1 cursor-pointer">Remove</span> */}
              <span className="underline cursor-pointer">View All Offers</span>
            </div>
          </div>
        </div>

        {/* Design */}
        <TicketDesign />

        {/* Billing Details */}
        <div className="px-6 py-3">
          <h2 className="text-[#7E7E7E] font-semibold text-sm md:text-base">
            YOUR DETAILS
          </h2>
          <div className="mt-6 w-full space-y-2">
            <label className="text-[#7E7E7E] text-sm md:text-base">
              Billing Number*
            </label>
            <PhoneInput
              inputProps={{
                name: "phone",
                required: true,
                autoFocus: true,
              }}
              value={orderData?.billingNumber}
              onChange={(text) =>
                setOrderData({ ...orderData, billingNumber: text })
              }
              country={"pk"}
              containerStyle={{ height: 35 }}
              inputStyle={{ width: "100%" }}
            />
          </div>
          <div className="mt-6 w-full space-y-1 md:space-y-2">
            <label className="text-[#7E7E7E] text-sm md:text-base">
              Billing Email ID*
            </label>
            <input
              type="email"
              placeholder="Enter Your Email Address"
              value={orderData?.bookingEmail}
              onChange={(e) =>
                setOrderData({ ...orderData, bookingEmail: e.target.value })
              }
              className="w-full border border-[#ccc] rounded md:rounded-lg h-[35px] md:h-[50px] px-2 md:px-4 py-2"
            />
          </div>
          <p className="text-center mt-4 text-[#7E7E7E] text-sm md:text-base">
            *Your receipt & order updates will be sent here!
          </p>
        </div>

        {/* Design */}
        {/* <TicketDesign /> */}

        {/* Billing Summary */}
        {/* <div className="px-6 py-3">
              <h2 className="text-[#7E7E7E] font-semibold text-sm md:text-base">BILLING SUMMARY</h2>
              <div className="mt-6 w-full space-y-4 border-b-2 pb-4">
                <div className="flex justify-between text-sm md:text-base">
                  <span>Personalized Video</span>
                  <span className='text-[#4E4E4E]'>₹11000</span>
                </div>
                <div className="flex justify-between text-sm md:text-base">
                  <span className="flex gap-2 text-[#008115]">
                  <img src="/images/confirmation__discount.svg" alt="" />
                    Add-ons
                  </span>
                  <span className='text-[#4E4E4E]'>+₹2250</span>
                </div>
                <div className="flex justify-between text-sm md:text-base">
                  <span className="flex gap-2 text-[#008115]">
                  <img src="/images/confirmation__discount.svg" alt="" />
                    Coupon Discount
                  </span>
                  <span className='text-[#4E4E4E]'>-₹550</span>
                </div>
              </div>

              <div className="flex justify-between py-2 border-b-2 text-sm md:text-base">
                <span>Prime Amount</span>
                <span className='text-[#4E4E4E]'>₹99</span>
              </div>
              <div className="flex justify-between py-2 border-b-2 text-sm md:text-base">
                <span>Prime Discount</span>
                <span>-₹1650</span>
              </div>
              <div className="flex justify-between py-2 font-semibold md:text-lg text-base">
                <span>Total</span>
                <span>₹11149</span>
              </div>
            </div> */}

        <div className="flex flex-col lg:flex-row items-center justify-between my-4 gap-2 px-6">
          <p className="font-semibold lg:w-1/2 text-sm md:text-base text-center md:text-left">
            Secure and fast payments via Card, UPI, Netbanking and more By
            continuing, you agree to our terms
          </p>
          <button
            className="w-full md:w-[50%] lg:w-[25%] bg-[#D84388] text-white text-sm lg:text-xl rounded-3xl px-4 py-3 md:mb-1 mt-2 md:mt-0"
            onClick={() => setCurrentIndex(2)}
          >
            Proceed To Pay
          </button>
        </div>

        <div className="w-full flex overflow-hidden">
          {[1, 2, 3, 4].map((index) => (
            <img
              src="/images/Vector.svg"
              alt=""
              className="w-full bg-black"
              key={index}
            />
          ))}
        </div>
      </div>

      <PaymentExtrasSection />
    </div>
  );
}

export default Confirmation;
