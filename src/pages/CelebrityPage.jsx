import React from 'react'
import CelebrityHeader from '../components/CelebrityPage/CelebrityHeader';
import Offers from '../components/CelebrityPage/Offers';
import RecentViewed from '../components/CelebrityPage/RecentViewed';
import MayAlsoLike from '../components/CelebrityPage/MayAlsoLike';
import FAQS from '../components/Shared/FAQs';
import DemoVideos from '../components/CelebrityPage/DemoVideos';

function CelebrityPage() {
  return (
    <div className="px-16 py-6 bg-black text-white">
        <h1 className="pb-6 font-semibold text-2xl">Home <span className="w-[14px] h-[14px] opacity-70">{'>'}</span> Sunny Leone</h1>
        <CelebrityHeader />
        <DemoVideos />
        <Offers />
        <RecentViewed />
        <MayAlsoLike />
        <FAQS />
    </div>
  )
}

export default CelebrityPage