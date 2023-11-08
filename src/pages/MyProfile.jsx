import React, { useState } from "react";
import MyProfileForm from "../components/MyProfilePage/MyProfileForm";
import BottomLinks from "../components/MyProfilePage/BottomLinks";
import TopLinks from "../components/MyProfilePage/TopLinks";
import Wallet from "../components/MyProfilePage/Wallet";
import Wishlist from "../components/MyProfilePage/Wishlist";
import BookingListing from "../components/MyProfilePage/BookingListing";
import DiscoverMore from "../components/Shared/DiscoverMore";
// import DiscoverMore from "../components/CelebrityPage/DiscoverMore";

const MyProfile = () => {
  const [activeTab, setActiveTab] = useState(0);
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
