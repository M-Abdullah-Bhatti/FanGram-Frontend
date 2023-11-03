import React from "react";
import PopularCategories from "../components/Home/PopularCategories";
import FeaturedCelebrity from "../components/Home/FeaturedCelebrity";
import Hero from "../components/Home/Hero";
import Feedback from "../components/Home/Feedback";
import FAQS from "../components/Shared/FAQs";

const Home = () => {
  return (
    <div>
      <div>
        <Hero />
      </div>
      <FeaturedCelebrity />
      <PopularCategories />
      <Feedback />
      <FAQS />
    </div>
  );
};

export default Home;
