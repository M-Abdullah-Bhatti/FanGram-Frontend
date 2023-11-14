import React, { useState } from "react";
import { budgets } from "../../Data";
import { useSubmitPromotionForm } from "../../hooks/business-hook";
import { toast } from "react-toastify";
import RequestLoader from "../Shared/RequestLoader";

function PromotionForm() {
  const [selectedBudget, setSelectedBudget] = useState("");
  const [data, setData] = useState({});

  const { mutate: addMutate, isLoading } = useSubmitPromotionForm(
    JSON.stringify(data)
  );

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    addMutate(
      {},
      {
        onSuccess: (response) => {
          if (response?.data?.status === true) {
            toast.success(response?.data?.message);
            // Reset form data here
            setData({});
            // Reset selected budget if necessary
            setSelectedBudget("");
          }
          if (response?.data?.status === false) {
            toast.error(response?.data?.message);
          }
        },
      }
    );
  };

  return (
    <div className="text-black py-8">
      <form
        onSubmit={handleSubmit}
        className="bg-white rounded-xl px-4 md:px-16 py-8"
      >
        <h2 className="font-semibold text-3xl my-4 text-center">
          Let's get to work
        </h2>

        <div className="flex flex-col lg:flex-row gap-4 mb-4">
          <div className="flex flex-col rounded w-full">
            <label className="mb-1">Name</label>
            <input
              name="name"
              onChange={handleInputChange}
              value={data.name || ""}
              className="border border-[#6D6D6D] bg-[#F7F7F7] px-4 py-2 rounded"
              type="text"
              required
              placeholder="Enter Your Name"
            />
          </div>
          <div className="flex flex-col rounded w-full">
            <label className="mb-1">Mobile Number</label>
            <input
              name="mobileNumber"
              onChange={handleInputChange}
              value={data.mobileNumber || ""}
              className="border border-[#6D6D6D] bg-[#F7F7F7] px-4 py-2 rounded"
              type="tel"
              required
              placeholder="Enter Your Mobile Number"
            />
          </div>
        </div>
        <div className="flex flex-col lg:flex-row gap-4 mb-4">
          <div className="flex flex-col rounded w-full">
            <label className="mb-1">Email</label>
            <input
              name="email"
              onChange={handleInputChange}
              value={data.email || ""}
              className="border border-[#6D6D6D] bg-[#F7F7F7] px-4 py-2 rounded"
              type="email"
              required
              placeholder="Enter Your Email Address"
            />
          </div>
          <div className="flex flex-col rounded w-full">
            <label className="mb-1">Job Title</label>
            <input
              name="jobTitle"
              onChange={handleInputChange}
              value={data.jobTitle || ""}
              required
              className="border border-[#6D6D6D] bg-[#F7F7F7] px-4 py-2 rounded"
              type="text"
              placeholder="Enter Your Job Title"
            />
          </div>
        </div>
        <div className="flex flex-col lg:flex-row gap-4 mb-4">
          <div className="flex flex-col rounded w-full">
            <label className="mb-1">Company Name / Brand Website</label>
            <input
              name="companyName"
              onChange={handleInputChange}
              value={data.companyName || ""}
              className="border border-[#6D6D6D] bg-[#F7F7F7] px-4 py-2 rounded"
              required
              type="text"
              placeholder="Enter Your Company Name / Website"
            />
          </div>
          <div className="flex flex-col rounded w-full">
            <label className="mb-1">Number of employee</label>
            <input
              name="numberOfEmployees"
              onChange={handleInputChange}
              value={data.numberOfEmployees || ""}
              className="border border-[#6D6D6D] bg-[#F7F7F7] px-4 py-2 rounded"
              required
              type="number"
              placeholder="Enter Number Of Employee"
            />
          </div>
        </div>
        <div className="flex flex-col lg:flex-row gap-4 mb-4">
          <div className="flex flex-col rounded w-full">
            <label className="mb-1">City</label>
            <input
              name="city"
              onChange={handleInputChange}
              value={data.city || ""}
              className="border border-[#6D6D6D] bg-[#F7F7F7] px-4 py-2 rounded"
              required
              type="text"
              placeholder="Enter Your City"
            />
          </div>

          <div className="flex flex-col rounded w-full">
            <label className="mb-1">Product</label>
            <input
              name="product"
              onChange={handleInputChange}
              value={data.product || ""}
              className="border border-[#6D6D6D] bg-[#F7F7F7] px-4 py-2 rounded"
              required
              type="text"
              placeholder="Enter Product"
            />
          </div>
        </div>
        <div className="flex flex-col mb-4">
          <label className="mb-1">How Did You Find Us?</label>
          <select
            id="findUs"
            name="findUs"
            value={data.findUs || ""}
            onChange={handleInputChange}
            className="bg-[#F7F7F7] border-[#6D6D6D] w-full p-2 border rounded-md"
            required
          >
            <option value="" disabled>
              Choose
            </option>
            <option value="Youtube">Youtube</option>
            <option value="Google">Google</option>
            <option value="Facebook">Facebook</option>
          </select>
        </div>
        <div className="flex flex-col mb-4">
          <label className="mb-1">What’s your budget?</label>
          <div className="flex flex-wrap">
            {budgets.map((budget, index) => (
              <span
                key={index}
                className="text-[#000] mr-2 my-2 rounded-3xl px-4 py-2 cursor-pointer"
                style={{
                  backgroundColor:
                    budget === selectedBudget ? "#D42978" : "#F3F1F1",
                  color: budget === selectedBudget ? "#FFFFFF" : "#000000",
                }}
                onClick={() => {
                  setSelectedBudget(budget);
                  setData({ ...data, budget: budget });
                }}
              >
                {budget}
              </span>
            ))}
          </div>
        </div>
        <div className="flex items-center gap-2 my-2 mb-4">
          <input
            type="checkbox"
            className="w-[14px] h-[14px] bg-[#202020] border border-[#999999]"
            style={{ accentColor: "#D42978" }}
          />
          <p className="text-black text-xs md:text-base">
            By submitting, you agree to receive marketing communications about
            Tring for Business
          </p>
        </div>

        <div className="flex items-center justify-center w-full">
          <button className="bg-[#D84388] text-white rounded-3xl text-center px-4 py-3 mb-1 w-full md:w-[300px]">
            {isLoading ? <RequestLoader /> : "Submit"}
          </button>
        </div>
      </form>
    </div>
  );
}

export default PromotionForm;
