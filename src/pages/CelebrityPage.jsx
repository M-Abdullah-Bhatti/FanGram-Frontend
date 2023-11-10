import React from 'react'
import CelebrityHeader from '../components/CelebrityPage/CelebrityHeader';
import Offers from '../components/CelebrityPage/Offers';
import RecentViewed from '../components/CelebrityPage/RecentViewed';
import MayAlsoLike from '../components/CelebrityPage/MayAlsoLike';
import FAQS from '../components/Shared/FAQs';
import DemoVideos from '../components/CelebrityPage/DemoVideos';
import DiscoverMore from '../components/Shared/DiscoverMore';
import Header from '../components/CelebrityPage/Header';

function CelebrityPage() {
  return (
    <div className="py-6 bg-black text-white">
      <div className="px-6 md:px-16">
        <h1 className="flex items-center pb-6 font-semibold text-2xl">Home 
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" className='mx-2' viewBox="0 0 14 14" fill="none">
              <path d="M10.6212 6.61582L4.14577 0.158317C3.93361 -0.0531316 3.59012 -0.0527762 3.37831 0.15941C3.16667 0.37157 3.16722 0.715252 3.37941 0.926865L9.46938 7.00002L3.37919 13.0732C3.16703 13.2848 3.16648 13.6283 3.37809 13.8404C3.42847 13.8911 3.48837 13.9312 3.55434 13.9586C3.6203 13.986 3.69104 14.0001 3.76246 14C3.83363 14.0001 3.90412 13.9861 3.96989 13.9589C4.03565 13.9318 4.09541 13.8919 4.14574 13.8415L10.6212 7.3842C10.7234 7.28254 10.7807 7.14418 10.7807 7.00002C10.7807 6.85587 10.7232 6.71767 10.6212 6.61582Z" fill="white"/>
            </svg>
          Sunny Leone
        </h1>
        <Header />
        <CelebrityHeader />
      </div>
      <div className="px-6 lg:px-1">
        <DemoVideos />
      </div>
      <div className="px-6 lg:px-16">
        <Offers />
        <RecentViewed />
        <MayAlsoLike />
        <FAQS />
        <DiscoverMore />
      </div>
    </div>
  )
}

export default CelebrityPage