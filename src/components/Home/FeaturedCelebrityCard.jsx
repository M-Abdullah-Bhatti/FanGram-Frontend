import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAddFavorite } from "../../hooks/celebrity-hooks";
import { useIsFavoriteCelebrity } from "../../hooks/profile-hooks";

function FeaturedCelebrityCard({ celebrity }) {
  const navigate = useNavigate();
  const [userId, setUserId] = useState("");

  const addFavoriteMutation = useAddFavorite(celebrity?._id, userId);
  const { isFavorite } = useIsFavoriteCelebrity(userId, celebrity?._id);

  const handleFavoriteClick = async () => {
    try {
      await addFavoriteMutation.mutateAsync();
    } catch (error) {
      console.error("Error adding/removing favorite:", error);
    }
  };

  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem("userInfo"));
    setUserId(userInfo?.userId);

  }, []);

  return (
    <div className="w-full md:min-w-[325px] md:w-1/2 lg:w-1/3 h-96 md:h-[425px] bg-cover bg-center bg-no-repeat relative rounded-lg shadow-lg overflow-hidden">
      {/* <Link to={`/celebrity/${celebrity?._id}`}> */}
      <img
        src={celebrity?.celebrityImage?.url}
        alt="celebrity"
        className="object-fill w-full h-full"
      />
      <div
        className="absolute top-4 right-4 w-[40px] h-[40px] flex justify-center items-center rounded-full"
        style={{ backgroundColor: isFavorite ? "red" : "#FCAE4B" }}
        onClick={handleFavoriteClick}
      >
        <img src="/images/heart.png" alt="heart" />
      </div>
      <div
        className="absolute bottom-0 left-0 right-0 p-4"
        style={{
          background:
            "linear-gradient(182.63deg, rgba(169, 45, 169, 0) 37.18%, #A82DAA 110.27%)",
        }}
      >
        <h3 className="text-white text-2xl md:text-4xl font-bold mb-2 mr-8 md:leading-[52.5px]">
          {celebrity?.name}
        </h3>
        <div className="flex flex-wrap mb-2">
          {celebrity?.tags.slice(0, 2).map((tag) => (
            <span
              key={tag}
              className="font-satisfy text-gray-700 py-1 px-1 md:px-2 rounded-full text-sm md:text-lg mr-1 md:mr-2 mb-1 text-white"
            >
              #{tag}
            </span>
          ))}
        </div>
        <div className="flex justify-between items-center">
          <p className="text-white font-semibold text-sm md:text-base">
            Starting from &#8377;{celebrity?.videoPrice}
          </p>
          <button
            className="bg-white text-[#D42978] px-4 py-1 rounded-full text-base md:text-lg font-medium"
            onClick={() => navigate(`/celebrity/${celebrity?._id}`)}
          >
            Book Now
          </button>
        </div>
      </div>
      {/* </Link> */}
    </div>
  );
}

export default FeaturedCelebrityCard;
