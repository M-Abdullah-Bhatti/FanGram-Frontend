import React, { useEffect, useState } from "react";
import BookingListingCard from "./BookingListingCard";
import { bookingData } from "../../Data";
import { useAllMyOrders } from "../../hooks/order-hook";

function BookingListing() {
  const [userId, setUserId] = useState();

  const { data: myBookingData, isLoading } = useAllMyOrders(userId);
  console.log("myBookingData: ", myBookingData);
  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem("userInfo"));

    setUserId(userInfo?.userId);
    console.log("uuuuuu: ", userInfo?.userId);
  }, []);

  return (
    // <div className="my-8 md:my-16">
    //   <div className="space-y-6">
    //     {bookingData.map((booking, index) => (
    // <BookingListingCard booking={booking} key={index} />
    //     ))}
    //   </div>
    // </div>

    <div className="my-8 md:my-16">
      <div className="space-y-6">
        {isLoading ? (
          <div className="animate-spin h-20 w-20 rounded-full mx-auto border-r-2 border-l-2 border-yellow-500"></div>
        ) : myBookingData?.data?.data?.length > 0 ? (
          myBookingData.data.data.map((booking, index) => (
            <BookingListingCard booking={booking} key={index} />
          ))
        ) : (
          <div>No Data available</div> // Displayed when there's no data
        )}
      </div>
    </div>
  );
}

export default BookingListing;
