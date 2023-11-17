import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";
import ReactStars from "react-rating-stars-component";
import { useStateContext } from "../../StateContext";

const options = {
  edit: false,
  activeColor: "tomato",
  value: 1,
  isHalf: true,
  //   if you wnat to use media query in a single line
  // agr window ka size 600 px se kam ha
  size: window.innerWidth < 800 ? 20 : 30,
  color: "gray",
};

const ReviewModal = ({ closeModal }) => {
  return (
    <div className="w-full  flex items-center justify-center fixed left-0 right-0 top-0 bottom-0 z-20 bg-black bg-opacity-50 ">
      <div className="w-[85%] md:w-[70%] lg:w-fit  bg-white rounded-xl  ">
        <div className="lg:w-[584px] lg:h-[511px] border-2 rounded-xl">
          <div className="text-end ">
            <button
              className="bg-[#CA2981] text-white p-1 rounded-full mt-2 mr-2"
              onClick={closeModal}
            >
              <FaTimes />
            </button>
          </div>
          <div className="px-4 lg:px-10">
            <h2 className="font-extrabold text-[20px] lg:text-3xl lg:my-6">
              Provide Rating
            </h2>
            <div className="mt-3 sm:mt-1 ">
              <p>Ratings</p>
              <ReactStars {...options} />
            </div>
            <div className="flex mt-3 sm:mt-2 gap-2 sm:gap-5 justify-start items-center"></div>
            <form>
              <div className="mt-2">
                <p className="my-4">Comment</p>
                <textarea
                  id="myTextarea"
                  name="email"
                  required
                  placeholder="Enter your Comment here..."
                  className="text-[10px] lg:text-base px-2 md:px-4 w-full h-[10vmax] py-3 rounded-lg outline-none bg-[#EAEAEA]"
                ></textarea>
              </div>
              <div className="grid place-items-center mt-6">
                <button
                  type="submit"
                  className="bg-[#CA2981] text-[10px] lg:text-lg text-white rounded-full py-3 lg:py-2 px-24"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewModal;
