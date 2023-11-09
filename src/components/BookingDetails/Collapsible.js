import React, { useState } from "react";
import { collapsibledata } from "../../Data";

const Collapsible = () => {
  const [isExpandedArray, setIsExpandedArray] = useState(
    collapsibledata.map(() => false)
  );

  const toggleCollapsible = (index) => {
    const newIsExpandedArray = [...isExpandedArray];
    newIsExpandedArray[index] = !newIsExpandedArray[index];
    setIsExpandedArray(newIsExpandedArray);
  };

  return (
    <div className="w-full">
      {collapsibledata.map((item, index) => (
        <div className="w-full bg-black p-4 border border-solid border-white rounded-lg my-[20px]">
          <div className="flex items-center">
            <button
              className="bg-black text-black py-2 px-4 rounded-r focus:outline-none "
              onClick={() => toggleCollapsible(index)}
            >
              <svg
                width="26"
                height="26"
                viewBox="0 0 26 26"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_92_31941)">
                  <path
                    d="M23.7148 10.7148H15.2852V2.28516C15.2852 1.02309 14.2621 0 13 0C11.7379 0 10.7148 1.02309 10.7148 2.28516V10.7148H2.28516C1.02309 10.7148 0 11.7379 0 13C0 14.2621 1.02309 15.2852 2.28516 15.2852H10.7148V23.7148C10.7148 24.9769 11.7379 26 13 26C14.2621 26 15.2852 24.9769 15.2852 23.7148V15.2852H23.7148C24.9769 15.2852 26 14.2621 26 13C26 11.7379 24.9769 10.7148 23.7148 10.7148Z"
                    fill="#D42978"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_92_31941">
                    <rect width="26" height="26" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </button>
            <p className="px-[20px]">{item.heading}</p>
          </div>

          {isExpandedArray[index] && (
            <div className="mt-4 text-gray-400">
              <p className="pl-[76px]">{item.content}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Collapsible;
