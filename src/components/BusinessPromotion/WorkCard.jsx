import React from "react";

function WorkCard({ details }) {
  console.log("detailss", details);
  return (
    <div className="workCardWidth relative py-6">
      <img
        src={details.img}
        alt=""
        className="w-full h-[200px] lg:h-[300px] rounded-2xl bg-[#D9D9D9]"
      />
      <div
        className="grid place-items-center absolute left-[37%] top-[30%] lg:top-[33%] w-[70px] h-[70px] rounded-full cursor-pointer"
        style={{
          fill: "rgba(0, 0, 0, 0.90)",
          backdropFilter: "blur(1.923076868057251px)",
        }}
      >
        <img src="/images/feedbackplay.png" alt="logo" />
      </div>
      <p className="px-2 md:px-0 text-white text-xs lg:text-base mt-2">
        {details && details.contentText}
      </p>
    </div>
  );
}

export default WorkCard;
