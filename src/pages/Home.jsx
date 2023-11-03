import React from "react";
import PopularCategories from "../components/Home/PopularCategories";
import FeaturedCelebrity from "../components/Home/FeaturedCelebrity";
import Hero from "../components/Home/Hero";
import Feedback from "../components/Home/Feedback";
const Home = () => {
  return (
    <div>
      <Hero />
      <FeaturedCelebrity />
      <PopularCategories />
      <Feedback />
    </div>
  );
};

export default Home;
