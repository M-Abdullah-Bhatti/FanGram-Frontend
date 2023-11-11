import React from "react";
import CTA from "../components/BusinessPromotion/CTA";
import PromotionForm from "../components/BusinessPromotion/PromotionForm";
import LatestWork from "../components/BusinessPromotion/LatestWork";
import CelebrityShoutouts from "../components/BusinessPromotion/CelebrityShoutouts.jsx";

function BusinessPromotion() {
  return (
    <div className="text-white">
      <CTA />
      <div className="w-full px-6 md:px-12 lg:px-24 bg-[#000]">
        <PromotionForm />
        <LatestWork />
        <CelebrityShoutouts />
      </div>
    </div>
  );
}

export default BusinessPromotion;
