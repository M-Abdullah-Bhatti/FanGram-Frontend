import React, { useEffect, useState } from "react";
import { transactionsData } from "../../Data";
import { useAllMyOrders } from "../../hooks/order-hook";
import { useGetUserInfo } from "../../hooks/auth-hooks";

function Wallet() {
  const [userId, setUserId] = useState();

  const { data: myBookingData, isLoading: bookingLoading } =
    useAllMyOrders(userId);
  console.log("myBookingData: ", myBookingData?.data?.data);

  const { data: profileData, isLoading: profileLoading } =
    useGetUserInfo(userId);
  console.log("profileData: ", profileData);

  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem("userInfo"));
    setUserId(userInfo?.userId);
    console.log("uuuuuu: ", userInfo?.userId);
  }, []);

  function formatDate(dateString) {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0"); // January is 0
    const year = date.getFullYear();

    return `${day}-${month}-${year}`;
  }

  return (
    <div className="md:mx-28 my-8 space-y-4">
      <div className="flex flex-col md:flex-row justify-between bg-[#202020] rounded-lg px-6 py-3 font-bold">
        <div
          className="flex justify-center flex-col w-full md:w-1/2 border-b-2 md:border-b-0 border-r-0 md:border-r-2 space-y-2 py-3"
          style={{ borderColor: "rgb(255, 255, 255, 0.2)" }}
        >
          <p className="text-xl">
            <span className="text-[#D42978]">tcash</span> Earned
          </p>
          <p className="text-2xl text-[#D42978]">
            {profileData?.tcashEarned || 0}
          </p>
        </div>
        <div className="flex justify-center flex-col w-full md:w-1/2 md:ml-6 space-y-2 py-3">
          <p className="text-xl">Coupons</p>
          <p className="text-2xl text-[#D42978]">0</p>
        </div>
      </div>
      <div className="bg-[#202020] rounded-lg p-4 md:p-6">
        <h2
          className="text-base md:text-xl font-semibold pb-3 border-b"
          style={{ borderColor: "rgb(255, 255, 255, 0.2)" }}
        >
          Recent transactions
        </h2>
        <div className="overflow-x-auto">
          <table className="min-w-full table-auto mt-3">
            <thead>
              <tr className="font-semibold text-xs md:text-base text-[#7E7E7E]">
                <th className="text-left px-2 py-2 w-1/4">Activity</th>
                <th className="text-left px-2 py-2 w-1/4">Date & Time</th>
                <th className="text-left px-2 py-2 w-1/4">Amount</th>
                <th className="text-left px-2 py-2 w-1/4">Payment Status</th>
              </tr>
            </thead>
            <tbody>
              {!bookingLoading && myBookingData?.data?.data?.length > 0 ? (
                myBookingData.data.data.map((item, index) => (
                  <tr key={index} className="text-xs md:text-base">
                    <td className="flex pr-2 items-center gap-2 py-2">
                      <img
                        src="/images/wallet__icon.svg"
                        alt="icon"
                        className="w-[16px] md:w-[30px]"
                      />
                      {item?.celebrityID?.name}
                    </td>
                    <td className="px-2 py-2">{formatDate(item?.createdAt)}</td>
                    <td className="px-2 py-2">{item.price}</td>
                    <td
                      className="px-2 py-2"
                      style={{
                        color: "#08C949",
                      }}
                    >
                      {"success"}
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="4" className="text-center py-4">
                    No bookings found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Wallet;
