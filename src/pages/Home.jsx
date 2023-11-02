import React from 'react'
import PopularCategories from '../components/Home/PopularCategories'
import FeaturedCelebrity from '../components/Home/FeaturedCelebrity'
const Home = () => {
  return (
    <div>
      <FeaturedCelebrity />
      <PopularCategories />
    </div>
  );
};

export default Home;
