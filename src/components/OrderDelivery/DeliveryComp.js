import React, { useState } from "react";
import { orderdeliveryicons } from "../../Data";
import ReviewModal from "../Modals/ReviewModal";
const svg = {
  icon: (
    <svg
      width="3S0"
      height="30"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_92_32423)">
        <path
          d="M9.16134 1.23895C5.67669 -0.759889 2.85156 0.877586 2.85156 4.89343V34.5286C2.85156 38.5485 5.67669 40.1838 9.16134 38.1869L35.064 23.3319C38.5498 21.3323 38.5498 18.0928 35.064 16.0937L9.16134 1.23895Z"
          fill="#FFF1F1"
        />
      </g>
      <defs>
        <clipPath id="clip0_92_32423">
          <rect
            width="38.6514"
            height="38.6514"
            fill="white"
            transform="translate(0.939453 0.386719)"
          />
        </clipPath>
      </defs>
    </svg>
  ),
};

const svgtwo = {
  icon: (
    <svg
      width="31"
      height="31"
      viewBox="0 0 31 31"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_d_92_32419)">
        <path
          d="M19.8944 0.441169L12.1629 6.62455H10.0587C9.63992 6.62336 9.22504 6.70497 8.83791 6.86468C8.45078 7.02438 8.09905 7.25905 7.80293 7.55517C7.50681 7.85129 7.27215 8.20302 7.11244 8.59015C6.95273 8.97728 6.87112 9.39216 6.87231 9.81093V12.9853C6.87231 14.6326 8.12282 15.9853 9.75809 16.1416L4.72902 21.1587C3.98052 21.9102 5.10477 23.0344 5.85628 22.2829L22.2391 5.9001L26.5076 1.63155C27.2561 0.889066 26.1319 -0.235186 25.3804 0.513313L21.19 4.70671V1.0574C21.1887 0.908133 21.1454 0.76224 21.0652 0.636356C20.985 0.510473 20.871 0.409665 20.7362 0.345425C20.6015 0.281186 20.4514 0.2561 20.3031 0.273029C20.1548 0.289957 20.0112 0.348218 19.8944 0.441169ZM22.0467 8.35001L13.3082 17.0885L19.8944 22.3611C20.0112 22.454 20.1518 22.5123 20.3001 22.5292C20.4484 22.5461 20.5985 22.521 20.7332 22.4568C20.868 22.3926 20.982 22.2918 21.0622 22.1659C21.1424 22.04 21.1857 21.8941 21.187 21.7448V14.5815C22.9635 14.5815 24.3704 13.1446 24.3704 11.3951C24.3704 9.9462 23.3784 8.72876 22.0467 8.35001Z"
          fill="white"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_92_32419"
          x="0.482422"
          y="0.266602"
          width="30.2715"
          height="30.2676"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_92_32419"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_92_32419"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  ),
};

const svgthree = {
  icon: (
    <svg
      width="25"
      height="25"
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M31.1605 27.9372H4.83555C4.44767 27.9372 4.07568 28.0913 3.8014 28.3656C3.52713 28.6398 3.37305 29.0118 3.37305 29.3997C3.37305 29.7876 3.52713 30.1596 3.8014 30.4339C4.07568 30.7081 4.44767 30.8622 4.83555 30.8622H31.1605C31.5484 30.8622 31.9204 30.7081 32.1947 30.4339C32.469 30.1596 32.623 29.7876 32.623 29.3997C32.623 29.0118 32.469 28.6398 32.1947 28.3656C31.9204 28.0913 31.5484 27.9372 31.1605 27.9372ZM17.998 3.07471C17.6102 3.07471 17.2382 3.22879 16.9639 3.50306C16.6896 3.77734 16.5355 4.14933 16.5355 4.53721V20.0251L11.7239 15.1988C11.4485 14.9234 11.075 14.7687 10.6855 14.7687C10.2961 14.7687 9.92257 14.9234 9.64717 15.1988C9.37178 15.4742 9.21706 15.8477 9.21706 16.2372C9.21706 16.6267 9.37178 17.0002 9.64717 17.2756L16.9597 24.5881C17.0956 24.7252 17.2574 24.834 17.4356 24.9082C17.6138 24.9825 17.805 25.0207 17.998 25.0207C18.1911 25.0207 18.3823 24.9825 18.5605 24.9082C18.7387 24.834 18.9005 24.7252 19.0364 24.5881L26.3489 17.2756C26.4853 17.1392 26.5935 16.9773 26.6673 16.7992C26.741 16.621 26.779 16.4301 26.779 16.2372C26.779 16.0444 26.741 15.8534 26.6673 15.6752C26.5935 15.4971 26.4853 15.3352 26.3489 15.1988C26.2126 15.0625 26.0507 14.9543 25.8725 14.8805C25.6943 14.8067 25.5034 14.7687 25.3105 14.7687C25.1177 14.7687 24.9267 14.8067 24.7486 14.8805C24.5704 14.9543 24.4085 15.0625 24.2722 15.1988L19.4605 20.0251V4.53721C19.4605 4.14933 19.3065 3.77734 19.0322 3.50306C18.7579 3.22879 18.3859 3.07471 17.998 3.07471Z"
        fill="white"
      />
    </svg>
  ),
};
const DeliveryComp = () => {
  const [review, setReview] = useState(false);

  const closeModal = () => {
    setReview(false);
  };

  const openModal = () => {
    setReview(true);
  };

  return (
    <div className="bg-black grid place-items-center w-screen ">
      <div className="w-[90%] sm:w-[70%] lg:w-[70vmax] lg:h-[40vmax] flex items-center justify-center flex-col lg:flex-row bg-white rounded-xl my-[50px] lg:my-0">
        <div className="w-full lg:w-[45%] bg-[#D42978] h-full rounded-r-full flex items-center justify-center ">
          <div className="bg-[#D9D9D9] h-[25vmax] w-[18vmax] rounded-lg flex items-center justify-center relative">
            <div className="bg-[#989898] rounded-full w-fit p-4 ">
              {svg.icon}
            </div>
            <div className="absolute top-2 right-2">{svgtwo.icon}</div>
          </div>
        </div>
        <div className="w-full px-3 pt-3  lg:w-[55%] text-black h-full text-start lg:text-center lg:pt-[12vmax] lg:px-[3vmax]  box-border bg-white rounded-xl relative">
          <button
            className="w-fit bg-[#D42978] py-[10px] px-[50px] rounded-full cursor-pointer text-white font-bold  top-3 right-3 absolute"
            onClick={openModal}
          >
            Give Review
          </button>
          {review && <ReviewModal closeModal={closeModal} />}
          <h1 className="font-bold text-2xl">Sunny Leone</h1>
          <p className="text-sm my-2">Script</p>
          <p className="mb-4 text-sm font-semibold">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s
          </p>
          <div className="flex items-center justify-center">
            <button className="w-fit bg-[#D42978] py-[10px] px-[50px] rounded-full cursor-pointer text-white font-bold mb-4 flex items-center justify-center">
              Download <span className="w-[1vmax]">{svgthree.icon}</span>
            </button>
          </div>

          <div className="flex items-center justify-center">
            {orderdeliveryicons.map((item) => (
              <div className="border border-[#D42978] w-fit p-2 rounded-lg m-4">
                {item.icon}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeliveryComp;
