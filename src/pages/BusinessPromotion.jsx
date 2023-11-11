import React from "react";
import CTA from "../components/BusinessPromotion/CTA";
import PromotionForm from "../components/BusinessPromotion/PromotionForm";
import LatestWork from "../components/BusinessPromotion/LatestWork";
import CelebrityShoutouts from "../components/BusinessPromotion/CelebrityShoutouts.jsx";
import FAQs from "../components/Shared/FAQs.jsx"
import PromotionCTA from "../components/BusinessPromotion/PromotionCTA.jsx";
import Contact from "../components/BusinessPromotion/Contact.jsx";
import FanrangBusiness from "../components/BusinessPromotion/FanrangBusiness.jsx";
import BusinessOffers from "../components/BusinessPromotion/BusinessOffers.jsx";

function BusinessPromotion() {
  return (
    <div className="text-white">
      <CTA />
      <div className="flex flex-col items-center w-full px-4 md:px-12 lg:px-24 bg-[#000]">
        <PromotionForm />
        <LatestWork />
        <CelebrityShoutouts />
        <BusinessOffers />
        <FanrangBusiness />
        <Contact />
        <FAQs />
        <button className="bg-[#D42978] px-8 py-2 rounded-3xl">See All FAQ’s</button>
        <PromotionCTA />
      </div>
    </div>
  );
}

export default BusinessPromotion;
