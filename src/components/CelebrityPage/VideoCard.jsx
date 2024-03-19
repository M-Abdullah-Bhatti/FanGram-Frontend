import React, { useState } from "react";
import VideoPlayerModal from "../Shared/VideoPlayerModal";

function VideoCard({ celebrity }) {
  const [openVideoModal, setOpenVideoModal] = useState(false);
  const handleOpen = () => setOpenVideoModal(true);
  const handleClose = () => setOpenVideoModal(false);
  console.log("vidddd", celebrity);
  return (
    <div className="w-full md:min-w-[300px] max-h-[400px] relative">
      {openVideoModal && (
        <VideoPlayerModal
          url="https://www.youtube.com/watch?v=kvWKDDgiH-Y"
          handleClose={handleClose}
        />
      )}
      <img
        src={celebrity?.celebrityVideo}
        alt="logo"
        className="w-full h-full rounded-xl"
      />
      <div
        onClick={handleOpen}
        className="grid place-items-center absolute left-[37%] top-[43%] w-[70px] h-[70px] rounded-full cursor-pointer"
        style={{
          fill: "rgba(0, 0, 0, 0.90)",
          backdropFilter: "blur(1.923076868057251px)",
        }}
      >
        <img src="/images/feedbackplay.png" alt="logo" />
      </div>
      <div className="absolute bottom-0 left-0 right-0 p-2 space-y-2">
        <div className="flex mb-2 gap-1">
          {[...Array(celebrity?.ratings)].map((_, index) => (
            <div key={index} className="mb-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="17"
                viewBox="0 0 16 17"
                fill="none"
              >
                <g clip-path="url(#clip0_92_29639)">
                  <path
                    d="M15.5369 6.2461C15.4877 6.09365 15.3947 5.95904 15.2695 5.85907C15.1444 5.75909 14.9925 5.69817 14.833 5.68389L10.3925 5.28066L8.6367 1.17088C8.50719 0.869702 8.21235 0.674805 7.88476 0.674805C7.55717 0.674805 7.2623 0.869732 7.13285 1.17163L5.37697 5.28069L0.935844 5.68389C0.77647 5.69848 0.624885 5.75954 0.499883 5.85948C0.374881 5.95942 0.281961 6.09385 0.232641 6.2461C0.131347 6.55765 0.224889 6.89933 0.47174 7.11472L3.8282 10.0583L2.83845 14.4181C2.76603 14.7387 2.89043 15.07 3.15642 15.2623C3.29937 15.3656 3.46665 15.4182 3.63531 15.4182C3.78075 15.4182 3.92498 15.379 4.05449 15.3015L7.88476 13.0123L11.7136 15.3015C11.9938 15.4701 12.347 15.4547 12.6124 15.2623C12.7423 15.1682 12.8417 15.0381 12.8983 14.888C12.9548 14.7379 12.966 14.5745 12.9304 14.4181L11.9407 10.0583L15.2971 7.11532C15.4178 7.00987 15.5049 6.87127 15.5476 6.71673C15.5902 6.5622 15.5865 6.39854 15.5369 6.2461Z"
                    fill="#FFC107"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_92_29639">
                    <rect
                      width="15.3846"
                      height="15.3846"
                      fill="white"
                      transform="translate(0.192383 0.645508)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </div>
          ))}
        </div>
        <span className="bg-white text-[#D42978] text-sm px-4 py-2 rounded-3xl">
          {celebrity?.occasion}
        </span>
        <p className="text-sm">{celebrity?.message}</p>
      </div>
    </div>
  );
}

export default VideoCard;
