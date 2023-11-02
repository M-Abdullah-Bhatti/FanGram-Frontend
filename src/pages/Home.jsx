import React from "react";
import PopularCategories from "../components/Home/PopularCategories";
import FeaturedCelebrity from "../components/Home/FeaturedCelebrity";
import Hero from "../components/Home/Hero";
const Home = () => {
  return (
    <div>
      <Hero />
      <FeaturedCelebrity />
      <PopularCategories />
    </div>
  );
};

export default Home;
