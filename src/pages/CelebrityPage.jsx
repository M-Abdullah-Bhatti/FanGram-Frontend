import React, { useEffect } from "react";
import CelebrityHeader from "../components/CelebrityPage/CelebrityHeader";
import Offers from "../components/CelebrityPage/Offers";
import RecentViewed from "../components/CelebrityPage/RecentViewed";
import MayAlsoLike from "../components/CelebrityPage/MayAlsoLike";
import FAQS from "../components/Shared/FAQs";
import DemoVideos from "../components/CelebrityPage/DemoVideos";
import DiscoverMore from "../components/Shared/DiscoverMore";
import Header from "../components/CelebrityPage/Header";
import {
  useGetCelebritiesByCategories,
  useGetCelebrityDetails,
  useGetCelebrityVideos,
} from "../hooks/celebrity-hooks";
import { useNavigate, useParams } from "react-router-dom";
import { useIsFavoriteCelebrity } from "../hooks/profile-hooks";

function CelebrityPage() {
  const params = useParams();
  const navigate = useNavigate();

  const { data: celebrityDetailsData, isLoading: celebrityDetailsLoading } =
    useGetCelebrityDetails(params?.id);

  const { data: celebrityVideos, isLoading: celebrityVideosLoading } =
    useGetCelebrityVideos(params?.id);

  const { data: celebritiesData } = useGetCelebritiesByCategories(
    celebrityDetailsData?.categories
  );

  const { isFavorite, isLoading, isError } = useIsFavoriteCelebrity(
    "6550de64d526b91721886925",
    celebrityDetailsData?._id
  );
  console.log(celebrityDetailsData?._id);

  useEffect(() => {
    if (celebrityDetailsData) {
      // Retrieve and parse the 'recentlyViewed' array from local storage
      let recent = localStorage.getItem("recentlyViewed");
      let recentlyViewed = recent ? JSON.parse(recent) : [];

      // Check if the current celebrity is already in the array
      if (
        !recentlyViewed.some((item) => item._id === celebrityDetailsData._id)
      ) {
        // Add the current celebrity's details at the beginning of the array
        recentlyViewed.unshift(celebrityDetailsData);

        // If the array length exceeds 5, remove the last item
        if (recentlyViewed.length > 5) {
          recentlyViewed.pop();
        }

        // Save the updated array back to local storage
        localStorage.setItem("recentlyViewed", JSON.stringify(recentlyViewed));
      }
    }
  }, [celebrityDetailsData]);

  return (
    <div className="py-6 bg-black text-white">
      <div className="px-6 md:px-16">
        <h1 className="flex items-center pb-6 font-semibold text-base md:text-2xl">
          <span className="cursor-pointer" onClick={() => navigate("/")}>
            {" "}
            Home
          </span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            className="mx-2"
            viewBox="0 0 14 14"
            fill="none"
          >
            <path
              d="M10.6212 6.61582L4.14577 0.158317C3.93361 -0.0531316 3.59012 -0.0527762 3.37831 0.15941C3.16667 0.37157 3.16722 0.715252 3.37941 0.926865L9.46938 7.00002L3.37919 13.0732C3.16703 13.2848 3.16648 13.6283 3.37809 13.8404C3.42847 13.8911 3.48837 13.9312 3.55434 13.9586C3.6203 13.986 3.69104 14.0001 3.76246 14C3.83363 14.0001 3.90412 13.9861 3.96989 13.9589C4.03565 13.9318 4.09541 13.8919 4.14574 13.8415L10.6212 7.3842C10.7234 7.28254 10.7807 7.14418 10.7807 7.00002C10.7807 6.85587 10.7232 6.71767 10.6212 6.61582Z"
              fill="white"
            />
          </svg>
          {celebrityDetailsLoading ? "Loading ..." : celebrityDetailsData?.name}
        </h1>
        <Header
          data={celebrityDetailsData}
          loading={celebrityDetailsLoading}
          isFavorite={isFavorite}
        />
        <CelebrityHeader
          data={celebrityDetailsData}
          loading={celebrityDetailsLoading}
          isFavorite={isFavorite}
        />
      </div>
      {celebrityVideosLoading ? (
        "Loading..."
      ) : (
        <div className="px-6 lg:px-1">
          <DemoVideos data={celebrityVideos} />
        </div>
      )}

      <div className="px-6 lg:px-16">
        <Offers data={celebrityDetailsData} loading={celebrityDetailsLoading} />
        <RecentViewed data={celebritiesData} />
        <MayAlsoLike data={celebritiesData} />
      </div>
      <FAQS />
      <div className="px-6 lg:px-16">
        <DiscoverMore />
      </div>
    </div>
  );
}

export default CelebrityPage;
