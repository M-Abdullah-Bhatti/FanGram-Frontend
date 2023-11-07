import React from "react";
import MyProfileForm from "../components/MyProfilePage/MyProfileForm";
import BottomLinks from "../components/MyProfilePage/BottomLinks";
import TopLinks from "../components/MyProfilePage/TopLinks";

const MyProfile = () => {
  return (
    <div className="px-16 py-6 bg-black text-white">
      <TopLinks />
      <MyProfileForm />
      <BottomLinks />
    </div>
  );
};

export default MyProfile;
