import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";
import RequestLoader from "../Shared/RequestLoader";
import { useStateContext } from "../../StateContext";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import apiUrl from "../../utils/url";
import { useUserLogin } from "../../hooks/auth-hooks";
import orderServices from "../../services/order-services";
import { usePlaceOrder } from "../../hooks/order-hook";

const PaymentModal = () => {
  const { paymentModal, setPaymentModal, orderData, setOrderData } =
    useStateContext();

  const navigate = useNavigate();

  const [userData, setUserData] = useState({});

  const [message, setMessage] = useState();
  const { mutate: addMutate, isLoading } = usePlaceOrder(
    JSON.stringify(orderData)
  );

  // const handleSubmit = async (event) => {
  //   event.preventDefault();

  // addMutate(
  //   {},
  //   {
  //     onSuccess: (response) => {
  //       if (response?.data?.status === true) {
  //         toast.success(response?.data?.message);
  //         console.log(response?.data);
  //         localStorage.setItem(
  //           "userInfo",
  //           JSON.stringify({
  //             userId: response?.data?.userId,
  //             token: response?.data?.token,
  //           })
  //         );
  //         setPaymentModal(false);
  //       }
  //       if (response?.data?.status === false) {
  //         toast.error(response?.data?.message);
  //       }
  //     },
  //   }
  // );
  // };

  const handleSubmit = async () => {
    // event.preventDefault();
    // coupon applied api
    console.log("orderData---------- ", orderData);

    if (orderData.image == undefined) {
      setMessage("Please upload the transaction picture");
      setTimeout(() => {
        setMessage("");
      }, 3000);
      return;
    }

    if (orderData?.coupenNames && orderData?.coupenNames.length > 0) {
      console.log("---", orderData.coupenNames);
      try {
        const response = await orderServices.CouponAvailed(
          orderData.userID,
          orderData.coupenNames
        );
        console.log("response: ", response?.data?.status);
        // order place api
      } catch (error) {
        console.error(
          "Error fetching coupon data:",
          error.response?.data?.message
        );
        toast.error(error.response?.data?.message);
      }
    }

    addMutate(
      {},
      {
        onSuccess: (response) => {
          if (response?.data?.status === true) {
            toast.success(response?.data?.message);
            console.log(response?.data);

            setPaymentModal(false);
            navigate("/");
          }
          if (response?.data?.status === false) {
            toast.error(response?.data?.message);
          }
        },
      }
    );
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0]; // Get the first file

    if (file) {
      const reader = new FileReader();

      reader.onload = () => {
        if (reader.readyState === 2) {
          setOrderData({ ...orderData, image: reader.result });
        }
      };

      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="w-full flex items-center justify-center fixed left-0 right-0 top-0 bottom-0 z-10 bg-black bg-opacity-50">
      <div className="w-[85%] md:w-[70%] lg:w-fit bg-white rounded-xl flex flex-col">
        <div className="lg:w-[584px] lg:h-[511px] border-2 rounded-xl flex flex-col">
          <div className="text-end ">
            <button
              className="bg-[#CA2981] text-white p-1 rounded-full mt-2 mr-2"
              onClick={() => {
                setPaymentModal(false);
              }}
            >
              <FaTimes />
            </button>
          </div>

          <div className="px-4 lg:px-10">
            <h4 className="font-extrabold text-[20px] lg:text-3xl lg:my-6">
              Payment for Order
            </h4>
          </div>

          <div className="flex justify-between px-10">
            <div className="flex-1 ">
              <h2 className="text-[15px] lg:text-[18px] lg:my-6 mt-2 text-[#D84388]">
                Bank Account Details
              </h2>
              <div>
                <p className="py-2">Account Number: 9982-149823479834</p>
                <p className="py-2">IBAN Number: PK18-149823479834</p>
                <div className="py-2">
                  <label
                    htmlFor="file-upload"
                    className="w-[50%] bg-[black] text-white text-[12px] lg:text-[12px] rounded-3xl px-4 py-3 cursor-pointer block text-center"
                  >
                    Upload Image
                    <input
                      type="file"
                      accept="image/*"
                      id="file-upload"
                      required
                      name="propertyImages"
                      onChange={handleImageChange}
                      className="absolute inset-0 w-0 h-0 opacity-0 cursor-pointer"
                      aria-hidden="true"
                    />
                  </label>
                </div>

                <span className="text-[12px] text-red-500">
                  {message && message}
                </span>
              </div>
              <div></div>
            </div>

            {orderData?.image && (
              <div className="flex-1 ">
                <img
                  src={orderData.image}
                  alt="Description of Image"
                  className="w-full h-full object-cover"
                />
              </div>
            )}
          </div>
          <div className="px-10 mt-auto">
            <button
              className=" w-full bg-[#D84388] text-white text-sm lg:text-xl rounded-3xl px-4 py-3 mb-3 md:mb-5 mt-2 md:mt-0"
              onClick={() => {
                handleSubmit();
              }}
            >
              {isLoading ? <RequestLoader /> : "Place Order"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentModal;
