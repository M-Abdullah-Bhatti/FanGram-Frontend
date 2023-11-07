import React, { useState } from "react";
import MyProfileForm from "../components/MyProfilePage/MyProfileForm";
import BottomLinks from "../components/MyProfilePage/BottomLinks";
import TopLinks from "../components/MyProfilePage/TopLinks";
import Wallet from "../components/MyProfilePage/Wallet";
import Wishlist from "../components/MyProfilePage/Wishlist";
import BookingListing from "../components/MyProfilePage/BookingListing";

const MyProfile = () => {

  const [activeTab, setActiveTab] = useState(0)
  return (
    <div className="px-6 md:px-16 py-6 bg-black text-white">
      <TopLinks activeTab={activeTab} setActiveTab={setActiveTab} />
      {
        activeTab === 0 ? 
        <MyProfileForm />
        :
        activeTab === 1 ? 
        <BookingListing />
        :
        activeTab === 2 ?
        <Wallet />
        :
        <Wishlist />
      }
      <BottomLinks />
    </div>
  );
};

export default MyProfile;
