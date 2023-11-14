import React, { useEffect, useRef, useState } from "react";
import Extras from "./Extras";
import { extras, ocassions, initialMessages } from "../../Data";
import { useStateContext } from "../../StateContext";

const Options = ["He/Him", "She/Her", "Other"];
const languages = ["English", "اردو"];

function Order({ setCurrentIndex, celebrityDetailsData, isLoading }) {
  const scrollContainerRef = useRef(null);
  const [message, setMessage] = useState("This is a message");
  const [language, setLanguage] = useState("");
  const [selectedOcassion, setSelectedOcassion] = useState("");

  const [isEditing, setIsEditing] = useState(false);
  const [editedMessage, setEditedMessage] = useState("Hi");

  const { orderData, setOrderData } = useStateContext();
  //   const [charLimit, setCharLimit] = useState(132);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    setIsEditing(false);
  };

  const handleRecipientChange = (event) => {
    setOrderData({ ...orderData, recipient: event.target.value });
  };

  //   bookingTo, bookingBy -> person
  const handleSelect = (gender, personType) => {
    if (personType === "bookingTo") {
      setOrderData({
        ...orderData,
        bookingTo: { ...orderData.bookingTo, gender },
      });
    } else if (personType === "bookingBy") {
      setOrderData({
        ...orderData,
        bookingBy: { ...orderData.bookingBy, gender },
      });
    }
  };
  const continueToConfirmation = () => {
    console.log("orderData: ", orderData);
    setCurrentIndex(1);
  };

  useEffect(() => {
    console.log("customMessage.length: ", orderData?.customMessage.length);
    setSelectedOcassion(orderData?.ocassion);
    setLanguage(orderData?.language);
  }, []);

  //   useEffect(() => {
  //     const currentLength = orderData?.customMessage?.length || 0;
  //     setCharLimit(charLimit - currentLength);
  //   }, [orderData?.customMessage]);

  return (
    <div className="text-white pb-12">
      {/* Order Details */}
      <div className="w-full bg-[#202020] rounded-xl overflow-hidden p-4 my-6">
        <h2 className="font-semibold text-2xl lg:text-3xl mb-2">
          Order details
        </h2>
        <p className="font-semibold text-base lg:text-xl">
          Who is this video for?
        </p>
        <div className="flex my-4 gap-4 mb-6 text-sm lg:text-base">
          <span className="flex items-center gap-2 bg-[#D42978] w-fit px-4 py-2 rounded-3xl">
            <input
              type="radio"
              value="Someone Else"
              checked={orderData.recipient === "Someone Else"}
              onChange={handleRecipientChange}
              className="w-[15px] lg:w-[20px] h-[15px] lg:h-[20px]"
              style={{ accentColor: "white" }}
            />
            Someone Else
          </span>
          <span className="flex items-center gap-2 bg-[#D42978] w-fit px-4 py-2 rounded-3xl">
            <input
              type="radio"
              value="My Self"
              checked={orderData.recipient === "My Self"}
              onChange={handleRecipientChange}
              className="w-[15px] lg:w-[20px] h-[15px] lg:h-[20px]"
              style={{ accentColor: "white" }}
            />
            My Self
          </span>
        </div>

        {orderData?.recipient == "Someone Else" ||
        orderData?.recipient === undefined ? (
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="flex flex-col rounded w-full">
              <label className="mb-2">
                To <span>(First Name)</span>
              </label>
              <input
                className="border border-[#6D6D6D] bg-[#292929] px-4 py-2 rounded"
                type="text"
                placeholder="Name Of the Receiver"
                value={orderData?.bookingTo?.name}
                onChange={(e) => {
                  setOrderData({
                    ...orderData,
                    bookingTo: { ...orderData.bookingTo, name: e.target.value },
                  });
                }}
              />
              <div className="flex flex-wrap">
                {Options.map((item, index) => (
                  <span
                    key={index}
                    className={`text-sm md:text-base font-normal px-4 py-2 rounded-3xl my-2 lg:my-4 mr-3 cursor-pointer ${
                      orderData.bookingTo.gender === item
                        ? "bg-[#D42978]"
                        : "bg-[#292929]"
                    }`}
                    onClick={() => handleSelect(item, "bookingTo")}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex flex-col rounded w-full">
              <label className="mb-2">
                From <span>(First Name)</span>
              </label>
              <input
                className="border border-[#6D6D6D] bg-[#292929] px-4 py-2 rounded"
                type="text"
                placeholder="John Doe"
                value={orderData?.bookingBy?.name}
                onChange={(e) => {
                  setOrderData({
                    ...orderData,
                    bookingBy: { ...orderData.bookingBy, name: e.target.value },
                  });
                }}
              />
              <div className="flex flex-wrap">
                {Options.map((item, index) => (
                  <span
                    key={index}
                    className={`text-sm md:text-base font-normal px-4 py-2 rounded-3xl my-2 lg:my-4 mr-3 cursor-pointer ${
                      orderData.bookingBy.gender === item
                        ? "bg-[#D42978]"
                        : "bg-[#292929]"
                    }`}
                    onClick={() => handleSelect(item, "bookingBy")}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ) : (
          <div className="flex flex-col rounded w-full">
            <label className="mb-2">
              <span>(First Name)</span>
            </label>
            <input
              className="border border-[#6D6D6D] bg-[#292929] px-4 py-2 rounded"
              type="text"
              placeholder="Name Of the Receiver"
              value={orderData?.bookingBy?.name}
              onChange={(e) => {
                setOrderData({
                  ...orderData,
                  bookingBy: { ...orderData.bookingBy, name: e.target.value },
                });
              }}
            />
            <div className="flex flex-wrap">
              {Options.map((item, index) => (
                <span
                  key={index}
                  className={`text-sm md:text-base font-normal px-4 py-2 rounded-3xl my-2 lg:my-4 mr-3 cursor-pointer ${
                    orderData.bookingBy.gender === item
                      ? "bg-[#D42978]"
                      : "bg-[#292929]"
                  }`}
                  onClick={() => handleSelect(item, "bookingBy")}
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Ocassion */}
      <div className="bg-[#202020] rounded-xl overflow-hidden p-6 my-6">
        <h2 className="font-semibold text-2xl lg:text-3xl mb-3">Occasion</h2>
        <h3 className="font-semibold text-base lg:text-xl mb-2">
          What’s the occasion?
        </h3>

        <div className="flex flex-col flex-wrap gap-2 mb-4">
          <label className="text-sm lg:text-base">Select an Occasion</label>
          <div className="flex flex-wrap">
            {ocassions.map((ocassion, index) => (
              <span
                key={index}
                className="text-xs md:text-sm lg:text-base mr-1 lg:mr-2 my-2 rounded-3xl px-3 lg:px-4 py-2 cursor-pointer"
                style={{
                  backgroundColor:
                    selectedOcassion === ocassion ? "#D42978" : "#292929",
                }}
                onClick={() => {
                  setOrderData({
                    ...orderData,
                    ocassion: ocassion,
                  });
                  setSelectedOcassion(ocassion);
                }}
              >
                {ocassion}
              </span>
            ))}
          </div>
        </div>

        <h2 className="font-semibold text-xl lg:text-3xl mb-1">
          What do you want Sunny Leone to say in the video?
        </h2>
        <p className="text-[#D42978] text-xs lg:text-sm mb-3">
          (Not applicable for Brand, Social Work and Corporate messages)
        </p>

        <div className="flex flex-col flex-wrap gap-2 mb-4">
          <label className="text-sm lg:text-base">Select a Language</label>
          <div className="flex flex-wrap">
            {languages.map((Language, index) => (
              <span
                className="text-xs md:text-sm lg:text-base mr-1 lg:mr-2 my-2 rounded-3xl px-3 lg:px-4 py-2 cursor-pointer"
                style={{
                  backgroundColor:
                    Language === language ? "#D42978" : "#292929",
                }}
                onClick={() => {
                  setOrderData({
                    ...orderData,
                    language: Language,
                  });
                  setLanguage(Language);
                }}
              >
                {Language}
              </span>
            ))}
          </div>
        </div>

        {/* Messages Section */}
        <div className="px-0 md:px-14 py-2 relative">
          {/* <div className="absolute flex items-center justify-center bg-[#D42978] top-0 md:top-[-5px] right-[-5px] w-[20px] md:w-[30px] h-[20px] md:h-[30px] rounded-3xl cursor-pointer">
                    <img src="/images/times.svg" alt="" className="max-w-[60%]" />
                </div> */}
          <div className="bg-[#292929] border border-[#D42978] text-white rounded-lg shadow-lg p-4">
            {isEditing ? (
              <textarea
                className="w-full border text-black rounded p-2"
                value={orderData?.customMessage || ""}
                // onChange={(e) => {
                //   console.log("-", e.target.value.length);
                //   setOrderData({
                //     ...orderData,
                //     customMessage: e.target.value,
                //   });
                // }}
                style={{ minHeight: "220px" }}
              />
            ) : (
              <p
                className="text-white text-lg overflow-y-scroll no-scrollbar"
                style={{ height: "220px" }}
              >
                {orderData?.customMessage
                  ? orderData?.customMessage
                  : "Type message here..."}
              </p>
            )}
          </div>

          <div className="flex items-center justify-between mt-3">
            <p className="text-sm">132 characters remaining</p>
            {isEditing ? (
              <span
                className="bg-white text-black px-4 py-1 rounded-3xl cursor-pointer"
                onClick={handleSave}
              >
                Save
              </span>
            ) : (
              <span
                className="flex items-center gap-1 bg-white text-black px-4 py-1 rounded-3xl cursor-pointer"
                onClick={handleEdit}
              >
                Edit
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="15"
                  height="15"
                  viewBox="0 0 12 12"
                  fill="none"
                >
                  <path
                    d="M10.5495 1.45013C10.41 1.30878 10.2438 1.19655 10.0606 1.11995C9.8773 1.04335 9.68066 1.00391 9.48205 1.00391C9.28343 1.00391 9.08679 1.04335 8.90354 1.11995C8.72029 1.19655 8.55408 1.30878 8.41455 1.45013L7.45455 2.42513L9.57455 4.54513L10.5345 3.58513C10.6769 3.44659 10.7903 3.28117 10.8682 3.09846C10.9461 2.91575 10.9869 2.71938 10.9883 2.52077C10.9897 2.32215 10.9516 2.12523 10.8763 1.94144C10.801 1.75765 10.6899 1.59065 10.5495 1.45013ZM6.74455 3.13513L2.54955 7.33013C2.51194 7.36879 2.47996 7.41256 2.45455 7.46013L1.06455 10.2651C1.02422 10.3408 1.00406 10.4257 1.00599 10.5114C1.00792 10.5972 1.03188 10.681 1.07557 10.7548C1.11926 10.8287 1.18121 10.89 1.25546 10.933C1.32972 10.9759 1.41377 10.999 1.49955 11.0001C1.57573 11.0004 1.65098 10.9833 1.71955 10.9501L4.52455 9.56013C4.57212 9.53472 4.61588 9.50274 4.65455 9.46513L8.84955 5.27013L6.74455 3.13513ZM10.4995 11.0001H5.99955C5.86694 11.0001 5.73976 10.9475 5.64599 10.8537C5.55223 10.7599 5.49955 10.6327 5.49955 10.5001C5.49955 10.3675 5.55223 10.2403 5.64599 10.1466C5.73976 10.0528 5.86694 10.0001 5.99955 10.0001H10.4995C10.6322 10.0001 10.7593 10.0528 10.8531 10.1466C10.9469 10.2403 10.9995 10.3675 10.9995 10.5001C10.9995 10.6327 10.9469 10.7599 10.8531 10.8537C10.7593 10.9475 10.6322 11.0001 10.4995 11.0001Z"
                    fill="black"
                  />
                </svg>
              </span>
            )}
          </div>
        </div>

        <div className="md:px-14">
          <p className="text-xs md:text-base mt-1 text-[#D42978]">
            Note - Our celebrities wish to complete your order in their true
            self. Hence, the message / script may differ in some cases.
          </p>
          {/* Extra */}
          <div className="flex justify-between items-center px-2 md:px-4 py-2 bg-[#202020] border border-[#888888] rounded-xl my-4">
            <div className="flex items-center gap-4">
              <div
                className="bg-white h-full rounded-xl p-2 md:p-4"
                style={{ height: "100%", padding: "auto" }}
              >
                <img
                  className="w-[30px] md:w-[50px]"
                  src="/images/order__message.svg"
                  alt=""
                />
              </div>
              <div className="text-white">
                <h2 className="text-sm md:text-xl font-semibold">
                  Write longer message
                </h2>
                <span className="text-[#737373] text-base">₹600</span>
              </div>
            </div>
            <div className="flex items-center justify-center w-[20px] md:w-[35px] h-[20px] md:h-[35px] bg-[#D42978] rounded-2xl cursor-pointer">
              <img src="/images/plus.svg" alt="" className="max-w-[60%]" />
            </div>
          </div>
          <div className="flex items-center gap-2 my-2">
            <input
              type="checkbox"
              className="w-[14px] h-[14px] bg-[#202020] border border-[#999999]"
              style={{ accentColor: "#D42978" }}
            />
            <p className="text-xs md:text-base text-[#999999]">
              Don’t make this video public on Tring
            </p>
          </div>
        </div>
      </div>

      {/* Delivery */}
      <div className="bg-[#202020] rounded-xl overflow-hidden p-4 my-6">
        <h2 className="font-semibold text-2xl md:text-3xl mb-2 md:mb-4">
          Delivery
        </h2>

        <div className="flex flex-col my-2 md:my-4">
          <label className="mb-1 md:mb-2 text-sm md:text-xl">
            How quickly do you want the video?
          </label>
          <span className="flex items-center gap-2 bg-[#D42978] w-fit px-[10px] md:px-4 py-2 rounded-3xl text-xs lg:text-base">
            <input
              type="radio"
              className="w-[15px] lg:w-[20px] h-[15px] lg:h-[20px]"
              style={{ accentColor: "white" }}
            />
            Within 4 days Free
          </span>
        </div>
        {/* <div className='flex flex-col my-4'>
                <label className="mb-2 text-sm md:text-xl">Do you want to deliver this surprise to the recipient?</label>
                <div className="flex gap-2 md:gap-4">
                    <span className="flex items-center gap-2 bg-[#D42978] w-fit px-[8px] md:px-4 py-2 rounded-3xl text-xs lg:text-base">
                        <input type="radio" className="w-[15px] lg:w-[20px] h-[15px] lg:h-[20px]" style={{accentColor: 'white'}} />
                        Yes, go head ₹1500
                    </span>
                    <span className="flex items-center gap-2 bg-[#D42978] w-fit px-[8px] md:px-4 py-2 rounded-3xl text-xs lg:text-base">
                        <input type="radio" className="w-[15px] lg:w-[20px] h-[15px] lg:h-[20px]" style={{accentColor: 'white'}} />
                        No, Skip for now
                    </span>
                </div>
            </div> */}
      </div>

      {/* Extras */}
      <div>
        <h1 className="text-2xl md:text-3xl font-semibold mb-2 md:mb-4">
          Extras
        </h1>
        <div className="space-y-3 md:space-y-4">
          {extras.map((extra, index) => (
            <Extras extra={extra} key={index} />
          ))}
        </div>
      </div>

      {/* Payment Info Section */}
      <div className="flex flex-col md:flex-row items-center w-full justify-between pt-6 md:pt-12">
        <p className="text-base md:text-xl font-semibold w-full md:w-1/2 mb-2 md:mb-0 text-center md:text-left">
          Secure and fast payments via Card, UPI, Netbanking and more By
          continuing, you agree to our terms
        </p>
        <div className="flex flex-col items-center w-full md:w-[30%]">
          <button
            className="bg-[#535353] rounded-3xl px-4 py-3 mb-2 w-full"
            onClick={continueToConfirmation}
          >
            Continue
          </button>
          <p className="text-[#737373] text-xs md:text-sm text-center md:text-left">
            You will not be charged when you press this button
          </p>
        </div>
      </div>
    </div>
  );
}

export default Order;
