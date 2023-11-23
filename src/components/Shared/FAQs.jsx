import React, { useState } from "react";
import clsx from "clsx";

const FAQS = () => {
  const [Questions, setQuestions] = useState([
    {
      question: "Lorem ipsum is placeholder text commonly",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor inLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor inLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in",
      isOpen: false,
    },
    {
      question: "Lorem ipsum is placeholder text commonly",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor inLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor inLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in",
      isOpen: false,
    },
    {
      question: "Lorem ipsum is placeholder text commonly",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor inLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor inLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in",
      isOpen: false,
    },
    {
      question: "Lorem ipsum is placeholder text commonly",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor inLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor inLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in",
      isOpen: false,
    },
    {
      question: "Lorem ipsum is placeholder text commonly",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor inLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor inLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in",
      isOpen: false,
    },
    {
      question: "Lorem ipsum is placeholder text commonly",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor inLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor inLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in",
      isOpen: false,
    },
  ]);

  const handleClick = (index) => {
    setQuestions((prevQuestions) =>
      prevQuestions.map((item, i) => {
        if (i === index) {
          return { ...item, isOpen: !item.isOpen };
        }
        return { ...item, isOpen: false };
      })
    );
  };

  return (
    <div className=" relative    w-full text-[#fff]   bg-black pb-10 ">
      <div className="flex flex-col space-y-2 lg:space-y-4 font-BalsamiqSans items-center w-[90%] sm:w-[80%] md:w-[70%] mx-auto h-auto">
        <h3 className="text-center text-lg sm:text-4xl md:text-[45px] font-[600] mb-2 md:mb-5">
          Frequently Asked Questions
        </h3>

        <div className="flex flex-col space-y-4 w-full items-center  ">
          {Questions.map((item, index) => (
            <div key={index} className="relative  w-full ">
              <div
                className={clsx(
                  "rounded-xl pt-2 sm:pt-7 md:pt-16  p-6",
                  `${item.isOpen ? "block bg-[#FFF] " : "hidden"}`
                )}
              >
                <p className="text-[#171717] text-[10px] md:text-base pl-2 sm:pl-5 md:pl-7 lg:pl-10">
                  {item.answer}
                </p>
              </div>
              <div
                onClick={() => handleClick(index)}
                className={clsx(
                  "top-0 left-0  w-full cursor-pointer ",
                  `${item.isOpen ? "absolute" : "relative"}`
                )}
              >
                <div
                  className={clsx(
                    "px-2 md:px-6 py-2.5 flex   w-full rounded-xl  items-center justify-between border-[1px] border-[#fff]",
                    `${
                      item.isOpen
                        ? "bg-[#fff] text-black"
                        : "bg-black text-[#ffff]"
                    }`
                  )}
                >
                  <div className="flex justify-center items-start gap-2 sm:gap-5">
                    <p
                      className={
                        (clsx(" "),
                        `${
                          item.isOpen
                            ? "bg-[#D42978] text-[#fff] sm:w-[25px] sm:h-[25px] w-[17px] h-[17px] rounded-full sm:text-base text-[10px]  grid place-items-center"
                            : "bg-[#fff] text-[#000] sm:w-[25px] sm:h-[25px] w-[17px] h-[17px] rounded-full sm:text-base text-[10px]  grid place-items-center"
                        }`)
                      }
                    >
                      {index + 1}
                    </p>
                    <p className="font-semibold text-[12px] md:text-[20px]">
                      {item.question}
                    </p>
                  </div>

                  <button
                  // onClick={() => handleClick(index)}
                  // className={clsx(
                  //   " py-3 px-2 rounded-full ",
                  //   `${item.isOpen ? "bg-[#F1F6FF]" : "bg-black "}`
                  // )}
                  >
                    {item.isOpen ? (
                      <img
                        src="/images/faqs_uparrow.png"
                        className="sm:w-fit sm:h-fit  w-[10px] h-[10px]"
                        alt="logo"
                      />
                    ) : (
                      <img
                        src="/images/faqs_downarrow.png"
                        className="sm:w-fit sm:h-fit  w-[10px] h-[10px] "
                        alt="logo"
                      />
                    )}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQS;
