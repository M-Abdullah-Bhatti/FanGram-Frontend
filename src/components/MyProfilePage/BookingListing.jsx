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
        {!isLoading && myBookingData?.data?.data?.length > 0 ? (
          myBookingData.data.data.map((booking, index) => (
            <BookingListingCard booking={booking} key={index} />
          ))
        ) : (
          <div>No bookings found</div> // Displayed when there's no data
        )}
      </div>
    </div>
  );
}

export default BookingListing;
