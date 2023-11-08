import React, { useState } from "react";
import MyProfileForm from "../components/MyProfilePage/MyProfileForm";
import TopLinks from "../components/MyProfilePage/TopLinks";
import Wallet from "../components/MyProfilePage/Wallet";
import Wishlist from "../components/MyProfilePage/Wishlist";
import BookingListing from "../components/MyProfilePage/BookingListing";
import DiscoverMore from "../components/Shared/DiscoverMore";

const MyProfile = () => {
  const [activeTab, setActiveTab] = useState(1);
  return (
    <div className="px-4 md:px-16 py-6 bg-black text-white">
      <TopLinks activeTab={activeTab} setActiveTab={setActiveTab} />
      {activeTab === 0 ? (
        <MyProfileForm />
      ) : activeTab === 1 ? (
        <BookingListing />
      ) : activeTab === 2 ? (
        <Wallet />
      ) : (
        <Wishlist />
      )}
      <DiscoverMore />
    </div>
  );
};

export default MyProfile;
