import React from "react";

function BookingStepProgress({ currentIndex }) {
  const firstDivStyles = {
    backgroundColor: currentIndex >= 0 ? "#D42978" : "",
  };

  const secondDivStyles = {
    backgroundColor: currentIndex >= 1 ? "#D42978" : "",
    borderWidth: currentIndex < 1 ? 1 : "0",
    borderColor: currentIndex < 1 ? "#FFFFFF" : "",
  };

  const thirdDivStyles = {
    backgroundColor: currentIndex >= 1 ? "#D42978" : "",
    borderWidth: currentIndex < 1 ? 1 : "0",
    borderColor: currentIndex < 1 ? "#FFFFFF" : "",
  };

  const firstLineStyles = {
    // backgroundColor: currentIndex > 0 ? "#D42978" : "#FFFFFF",
    border: "1px dashed #4B4B4B",
  };

  const secondLineStyles = {
    // backgroundColor: currentIndex > 1 ? "#D42978" : "#FFFFFF",
    border: "1px dashed #4B4B4B",
  };

  const thirdLineStyles = {
    // backgroundColor: currentIndex > 1 ? "#D42978" : "#FFFFFF",
    border: "1px dashed #4B4B4B",
  };
  return (
    <div className="flex sm:justify-center lg:justify-start items-center my-4 px-4">
      {/* First Div */}
      <div>
        <div className="flex justify-start items-center mb-2">
          <div
            className="bg-[#B7B7B7] w-[12px] h-[12px] lg:w-[40px] lg:h-[40px] rounded-full"
            style={firstDivStyles}
          ></div>
          <div
            className="w-[76px] lg:w-[200px] h-[2px]"
            style={firstLineStyles}
          ></div>
        </div>
        <span
          style={{
            color: currentIndex >= 0 ? "#D42978" : "#FFFFFF",
            marginLeft: "-8px",
          }}
          className="text-[8px] lg:text-lg"
        >
          Details
        </span>
      </div>
      {/* Second Div */}
      <div>
        <div className="flex justify-start items-center mb-2">
          <div
            className="w-[12px] lg:w-[40px] h-[12px] lg:h-[40px] rounded-full bg-[#4B4B4B]"
            style={secondDivStyles}
          ></div>
          <div
            className="w-[76px] lg:w-[200px] h-[2px]"
            style={secondLineStyles}
          ></div>
        </div>
        <span
          style={{
            color: currentIndex >= 1 ? "#D42978" : "#FFFFFF",
            marginLeft: "-10px",
          }}
          className="text-[8px] lg:text-lg"
        >
          Confirm
        </span>
      </div>
      {/* Third Div */}
      <div>
        <div className="flex justify-start items-center mb-2">
          <div
            className="w-[12px] lg:w-[40px] h-[12px] lg:h-[40px] rounded-full bg-[#4B4B4B]"
            style={secondDivStyles}
          ></div>
          <div
            className="w-[76px] lg:w-[200px] h-[2px]"
            style={thirdLineStyles}
          ></div>
        </div>
        <span
          style={{
            color: currentIndex >= 1 ? "#D42978" : "#FFFFFF",
            marginLeft: "-10px",
          }}
          className="text-[8px] lg:text-lg"
        >
          Confirm
        </span>
      </div>
      {/* Fourth Div */}
      <div>
        <div className="flex justify-start items-center mb-2">
          <div
            className="w-[12px] lg:w-[40px] h-[12px] lg:h-[40px] rounded-full bg-[#4B4B4B]"
            style={thirdDivStyles}
          ></div>
        </div>
        <span
          style={{
            color: currentIndex > 1 ? "#D42978" : "#FFFFFF",
            marginLeft: "-12px",
          }}
          className="text-[8px] lg:text-lg"
        >
          Payment
        </span>
      </div>
    </div>
  );
}

export default BookingStepProgress;
