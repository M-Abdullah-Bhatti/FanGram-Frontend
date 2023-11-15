import React from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import PaymentExtrasSection from "./PaymentExtrasSection";
import TicketDesign from "./TicketDesign";
import { useStateContext } from "../../StateContext";
function Payment({ isLoading, celebrityDetailsData }) {
  const { orderData, setOrderData } = useStateContext();

  return (
    <div className="mt-12 md:mt-24 lg:mx-32">
      <div className="bg-white rounded-t-3xl">
        <div className="px-6 py-2 pt-6">
          <h3 className="mb-3 text-[#7E7E7E] font-semibold text-sm md:text-base">
            Your Cart
          </h3>
          <div className="flex gap-2">
            <img
              src={isLoading ? "" : celebrityDetailsData?.celebrityImage?.url}
              className="rounded-xl h-[85px]"
              alt="sunny"
            />
            <div>
              <h1 className="text-base md:text-2xl font-extrabold mb-1">
                {isLoading ? "" : celebrityDetailsData?.name}
              </h1>
              <span className="flex gap-2 text-[#D42978]">
                <span className="flex gap-1 md:gap-2 text-sm md:text-base text-[#D42978] cursor-pointer">
                  Show/Edit
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="cursor-pointer w-[14px] md:w-[22px]"
                  viewBox="0 0 22 22"
                  fill="none"
                >
                  <path
                    d="M11 15.125C10.9097 15.1251 10.8203 15.1074 10.7369 15.0728C10.6535 15.0382 10.5777 14.9875 10.514 14.9236L3.63898 8.04861C3.37034 7.77996 3.37034 7.34495 3.63898 7.07648C3.90762 6.80801 4.34264 6.80784 4.61111 7.07648L11 13.4654L17.389 7.07648C17.6576 6.80784 18.0926 6.80784 18.3611 7.07648C18.6296 7.34512 18.6297 7.78014 18.3611 8.04861L11.4861 14.9236C11.4223 14.9875 11.3466 15.0382 11.2632 15.0728C11.1798 15.1074 11.0903 15.1251 11 15.125Z"
                    fill="#D42978"
                  />
                </svg>
              </span>
            </div>
          </div>

          {/* Charges */}
          <div
            className=""
            style={{ borderBottomWidth: 5, borderBottomColor: "#E9E9E9" }}
          >
            <div className="flex my-4 justify-between text-sm md:text-base">
              <span>Video Message</span>
              <span className="text-[#4E4E4E]">₹150</span>
            </div>
            <div className="flex my-4 justify-between text-sm md:text-base">
              <span>Service Fees</span>
              <span className="text-[#4E4E4E]">₹7.50</span>
            </div>
          </div>

          {/* Coupon Code */}
          <div className="flex justify-between items-center gap-3 p-1 mt-5 border-[1px] rounded-xl border-[#D2D1D1]">
            <input
              type="text"
              placeholder="Coupon Code"
              className="outline-none w-full h-full px-2 bg-transparent focus:bg-transparent text-black"
            />

            <button className="bg-[#D42978] text-[#fff] rounded-3xl py-2 px-6">
              Add
            </button>
          </div>

          {/* Total */}
          {/* <div className="flex items-center justify-between my-3 md:my-4 text-base md:text-2xl">
                    <span className="font-semibold">Total</span>
                    <span className="font-bold">₹11149</span>
                </div> */}
        </div>

        {/* Design */}
        <TicketDesign />

        <div className="px-6 py-3">
          {/* Your Detail */}
          {/* <div className="gap-1">
                    <h1 className="my-4 text-[#7E7E7E] font-semibold text-sm md:text-base">YOUR DETAILS</h1>
                    <h3 className="my-2 text-sm md:text-base">Billing Email</h3>
                    <p className='text-sm md:text-base'>Email is required ro continue to payment</p>
                    <p className="text-sm md:text-base text-[#D84388]">Iamduteraboys@gmail.com</p>

                    <div className="mt-6 w-full">
                        <label className="text-sm md:text-base">Billing Phone</label>
                        <PhoneInput
                            inputProps={{
                                name: 'phone',
                                required: true,
                                autoFocus: true
                            }}
                            country={'pk'}
                            inputStyle={{width: '100%'}}
                        />
                    </div>
                    <div className='flex items-center gap-2 my-2'>
                        <input type="checkbox" className="w-[14px] h-[14px] bg-[#202020] border border-[#999999]" style={{accentColor: '#D42978'}} />
                        <p className="text-[#999999] text-sm md:text-base">I’m purchasing as a company</p>
                    </div>

                    <div className='flex flex-col lg:flex-row items-center justify-between my-4 space-y-2'>
                        <p className='font-semibold lg:w-1/2 text-sm md:text-base text-center md:text-left'>Secure and fast payments via Card, UPI, Netbanking and more By continuing, you agree to our terms</p>
                        <button className='w-full md:w-[50%] lg:w-[25%] bg-[#D84388] text-white text-sm lg:text-xl rounded-3xl px-4 py-3 md:mb-1 mt-2 md:mt-0'>Continue</button>
                    </div>
                </div> */}

          {/* Billing Summary */}
          <div className="px-6 py-3">
            <h2 className="text-[#7E7E7E] font-semibold text-sm md:text-base">
              BILLING SUMMARY
            </h2>
            <div className="mt-6 w-full space-y-4 border-b-2 pb-4">
              <div className="flex justify-between text-sm md:text-base">
                <span>Personalized Video</span>
                <span className="text-[#4E4E4E]">Rs {orderData?.price}</span>
              </div>
              <div className="flex justify-between text-sm md:text-base">
                <span className="flex gap-2 text-[#008115]">
                  <img src="/images/confirmation__discount.svg" alt="" />
                  Add-ons
                </span>
                <span className="text-[#4E4E4E]">
                  +Rs{orderData?.addOnnPrice ? orderData.addOnnPrice : "0"}
                </span>
              </div>
              <div className="flex justify-between text-sm md:text-base">
                <span className="flex gap-2 text-[#008115]">
                  <img src="/images/confirmation__discount.svg" alt="" />
                  Coupon Discount
                </span>
                <span className="text-[#4E4E4E]">-₹550</span>
              </div>
            </div>

            <div className="flex justify-between py-2 border-b-2 text-sm md:text-base">
              <span>Prime Amount</span>
              <span className="text-[#4E4E4E]">
                Rs {orderData.price + orderData?.addOnnPrice - 550}
              </span>
            </div>
            <div className="flex justify-between py-2 border-b-2 text-sm md:text-base">
              <span>Prime Discount</span>
              <span>-₹1650</span>
            </div>
            <div className="flex justify-between py-2 font-semibold md:text-lg text-base">
              <span>Total</span>
              <span>₹11149</span>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row items-center justify-between my-4 space-y-2">
            <p className="font-semibold lg:w-1/2 text-sm md:text-base text-center md:text-left">
              Secure and fast payments via Card, UPI, Netbanking and more By
              continuing, you agree to our terms
            </p>
            <button className="w-full md:w-[50%] lg:w-[25%] bg-[#D84388] text-white text-sm lg:text-xl rounded-3xl px-4 py-3 md:mb-1 mt-2 md:mt-0">
              Continue
            </button>
          </div>
        </div>

        <div className="flex overflow-hidden">
          {[1, 2, 3, 4, 5].map((index) => (
            <img
              src="/images/Vector.svg"
              alt=""
              className="bg-black"
              key={index}
            />
          ))}
        </div>
      </div>

      <PaymentExtrasSection />
    </div>
  );
}

export default Payment;
