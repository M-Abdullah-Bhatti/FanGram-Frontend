import React from "react";
import { Link } from "react-router-dom";

const TopLinks = () => {
  return (
    <>
      <h1 className="pb-6 font-semibold text-2xl text-center">My Account</h1>
      <div className="w-full grid place-items-center">
        <div className="bg-[#292929] w-1/3 px-4 py-3 rounded-full flex items-center justify-between">
          <Link>Profile</Link>
          <Link>Booking</Link>
          <Link>Wallet</Link>
          <Link>Wishlist</Link>
        </div>
      </div>
    </>
  );
};

export default TopLinks;
