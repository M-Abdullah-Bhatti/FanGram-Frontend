import React from "react";
import { Link } from "react-router-dom";

const TopLinks = ({activeTab, setActiveTab}) => {
  return (
    <>
      <h1 className="pb-6 font-medium md:font-semibold text-2xl text-center">My Account</h1>
      <div className="w-full grid place-items-center">
        <div className="bg-[#292929] gap-3 px-2 md:px-4 py-1 md:py-2 rounded-full flex items-center">
          <Link className="px-3 md:px-6 py-2 rounded-3xl" style={{backgroundColor: activeTab === 0 && '#D42978'}} onClick={()=> setActiveTab(0)}>Profile</Link>
          <Link className="px-3 md:px-6 py-2 rounded-3xl" style={{backgroundColor: activeTab === 1 && '#D42978'}} onClick={()=> setActiveTab(1)}>Booking</Link>
          <Link className="px-3 md:px-6 py-2 rounded-3xl" style={{backgroundColor: activeTab === 2 && '#D42978'}} onClick={()=> setActiveTab(2)}>Wallet</Link>
          <Link className="px-3 md:px-6 py-2 rounded-3xl" style={{backgroundColor: activeTab === 3 && '#D42978'}} onClick={()=> setActiveTab(3)}>Wishlist</Link>
        </div>
      </div>
    </>
  );
};

export default TopLinks;
