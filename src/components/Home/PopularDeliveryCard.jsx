import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAddFavorite } from "../../hooks/celebrity-hooks";
import { useIsFavoriteCelebrity } from "../../hooks/profile-hooks";
import { useStateContext } from "../../StateContext";

function PopularDeliveryCard({ celebrity }) {
  const navigate = useNavigate();
  const { setOpenLoginModal, isLoggedIn } = useStateContext();

  const [userId, setUserId] = useState("");

  const addFavoriteMutation = useAddFavorite(celebrity?._id, userId);
  const { isFavorite } = useIsFavoriteCelebrity(userId, celebrity?._id);

  const handleFavoriteClick = async () => {
    try {
      if (!isLoggedIn) {
        setOpenLoginModal(true);
        return;
      } else {
        console.log("handleFa click");
        await addFavoriteMutation.mutateAsync();
      }
    } catch (error) {
      console.error("Error adding/removing favorite:", error);
    }
  };

  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem("userInfo"));
    setUserId(userInfo?.userId);
  }, []);

  return (
    // <Link to="/celebrity">
    <div className="w-full md:w-[50%] gap-0.5 lg:w-[30%] min-h-[300px] md:min-w-[310px] md:min-h-[400px] bg-[#292929] relative flex flex-col items-center justify-center rounded-lg shadow-lg px-2 md:px-4 py-3 md:px-8 space-y-2 mb-4 md:mb-0">
      <div
        className="absolute top-2 md:top-3 right-3 bg-[#FCAE4B] w-[25px] md:w-[40px] h-[25px] md:h-[40px] flex justify-center items-center rounded-full"
        style={{ backgroundColor: isFavorite ? "red" : "#FCAE4B" }}
        onClick={handleFavoriteClick}
      >
        <img src="/images/heart.png" alt="heart" className="w-[60%]" />
      </div>
      <img
        src={celebrity?.celebrityImage}
        alt="celebrity"
        className="h-[100px] md:h-[120px] w-[100px] md:w-[120px] rounded-full mt-4 md:mt-10"
      />
      <h3 className="text-white text-base md:text-2xl font-bold text-center mx-2">
        {celebrity.name}
      </h3>
      <div className="flex flex-wrap mb-2 ite justify-center items-center">
        {celebrity.tags.slice(0, 2).map((tag) => (
          <span
            key={tag}
            className="font-satisfy text-gray-700 py-1 rounded-full text-xs md:text-sm mr-1 md:mr-2 mb-1 text-white text-center"
          >
            #{tag}
          </span>
        ))}
      </div>
      <p className="text-xs md:text-base text-white font-semibold text-center">
        Starting from PKR {celebrity.videoPrice}
      </p>
      <button
        className="bg-white text-[#D42978] px-4 py-1 rounded-full text-sm md:text-lg font-medium"
        onClick={() => navigate(`/celebrity/${celebrity?._id}`)}
      >
        Book Now
      </button>
    </div>
    // </Link>
  );
}

export default PopularDeliveryCard;
