import React, { useEffect, useState } from "react";
import MyProfileForm from "../components/MyProfilePage/MyProfileForm";
import TopLinks from "../components/MyProfilePage/TopLinks";
import Wallet from "../components/MyProfilePage/Wallet";
import Wishlist from "../components/MyProfilePage/Wishlist";
import BookingListing from "../components/MyProfilePage/BookingListing";
import DiscoverMore from "../components/Shared/DiscoverMore";
import { useStateContext } from "../StateContext";
import { useNavigate } from "react-router-dom";

const MyProfile = () => {
  const [activeTab, setActiveTab] = useState(0);
  const { setOpenLoginModal, isLoggedIn } = useStateContext();
  const navigate = useNavigate();
  console.log("lgin", isLoggedIn);

  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/");
      setOpenLoginModal(true);
    }
  }, []);
  return (
    <div className="w-screen px-4 lg:px-16 py-6 bg-black text-white overflow-hidden">
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
