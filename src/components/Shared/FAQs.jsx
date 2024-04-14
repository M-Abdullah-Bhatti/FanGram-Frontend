import React, { useEffect, useState } from "react";
import clsx from "clsx";
import { useGetAllFAQs } from "../../hooks/faq-hooks";

const FAQS = () => {
  const { data: faqsData, isLoading: faqsLoading } = useGetAllFAQs();

  const [questions, setQuestions] = useState([
    {
      question: "How do I book a celebrity for promotion on your website?",
      answer:
        "To book a celebrity for promotion, simply browse our extensive roster, select the desired celebrity, and follow the booking instructions provided on their profile page.",
      isOpen: false,
    },
    {
      question: "What types of promotions can I book celebrities for?",
      answer:
        "Our website offers a diverse range of promotional opportunities, including brand endorsements, event appearances, social media campaigns, and more.",
      isOpen: false,
    },
    {
      question:
        "Are there different pricing options available for booking celebrities?",
      answer:
        "Yes, our website features a range of pricing options to accommodate different budgets and promotional needs. Celebrity booking fees may vary based on factors such as popularity, demand, and the nature of the promotion.",
      isOpen: false,
    },
    {
      question: "Can I contact celebrities directly through your website?",
      answer:
        "Absolutely! Our platform facilitates direct communication between users and celebrities, allowing you to discuss booking details, negotiate terms, and coordinate promotional campaigns seamlessly.",
      isOpen: false,
    },
    {
      question: "What measures do you take to ensure a smooth booking process?",
      answer:
        "We prioritize user satisfaction and strive to ensure a seamless booking experience from start to finish. Our website features robust security measures, verified celebrity profiles, and dedicated customer support to address any questions or concerns promptly.",
      isOpen: false,
    },
  ]);

  // useEffect(() => {
  //   if (faqsData) {
  //     setQuestions(faqsData.map((faq) => ({ ...faq, isOpen: false })));
  //   }
  // }, [faqsData]);

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
          {questions.map((item, index) => (
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
