import React from "react";

function StepsProgress({ currentIndex }) {
  const firstDivStyles = {
    backgroundColor: currentIndex >= 0 ? "#D42978" : "",
  };

  const secondDivStyles = {
    backgroundColor: currentIndex >= 1 ? "#D42978" : "",
    borderWidth: currentIndex < 1 ? 1 : "0",
    borderColor: currentIndex < 1 ? "#FFFFFF" : "",
  };

  const thirdDivStyles = {
    backgroundColor: currentIndex > 1 ? "#D42978" : "",
    borderWidth: currentIndex < 2 ? 1 : "0",
    borderColor: currentIndex < 2 ? "#FFFFFF" : "",
  };

  const firstLineStyles = {
    backgroundColor: currentIndex > 0 ? "#D42978" : "#FFFFFF",
  };

  const secondLineStyles = {
    backgroundColor: currentIndex > 1 ? "#D42978" : "#FFFFFF",
  };

  return (
    <div className="flex justify-start items-center my-2 md:my-4 pb-4 md:pb-0">
      {/* First Div */}
      <div>
        <div className="flex justify-start items-center mb-2">
          <div
            className="bg-[#D42978] w-[40px] h-[40px] rounded-full"
            style={firstDivStyles}
          ></div>
          <div
            className="w-[100px] md:w-[250px] lg:w-[300] h-[2px]"
            style={firstLineStyles}
          ></div>
        </div>
        <span
          className="text-sm md:text-base md:ml-[-8px]"
          style={{ color: currentIndex >= 0 ? "#D42978" : "#FFFFFF" }}
        >
          Details
        </span>
      </div>
      {/* Second Div */}
      <div>
        <div className="flex justify-start items-center mb-2">
          <div
            className="w-[40px] h-[40px] rounded-full"
            style={secondDivStyles}
          ></div>
          <div
            className="w-[100px] md:w-[250px] lg:w-[300px] h-[2px]"
            style={secondLineStyles}
          ></div>
        </div>
        <span
          className="text-sm md:text-base ml-[-10px]"
          style={{ color: currentIndex >= 1 ? "#D42978" : "#FFFFFF" }}
        >
          Confirm
        </span>
      </div>
      {/* Third Div */}
      <div>
        <div className="flex justify-start items-center mb-2">
          <div
            className="w-[40px] h-[40px] rounded-full"
            style={thirdDivStyles}
          ></div>
        </div>
        <span
          className="text-sm md:text-base ml-[-12px]"
          style={{ color: currentIndex > 1 ? "#D42978" : "#FFFFFF" }}
        >
          Payment
        </span>
      </div>
    </div>
  );
}

export default StepsProgress;
