import React, { useEffect, useState } from "react";
import { useAddFavorite } from "../../hooks/celebrity-hooks";

function WishlistCard({ celebrity, refetchFavorites }) {
  const [userId, setUserId] = useState("");

  const addFavoriteMutation = useAddFavorite(celebrity?._id, userId);
  const handleFavoriteClick = async () => {
    try {
      await addFavoriteMutation.mutateAsync(
        {},
        {
          onSuccess: () => {
            // Refetch the favorite celebrities after successful mutation
            refetchFavorites();
          },
        }
      );
    } catch (error) {
      console.error("Error adding/removing favorite:", error);
    }
  };

  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem("userInfo"));

    setUserId(userInfo?.userId);
  }, []);

  return (
    <div
      className="w-full md:w-[325px] h-[450px] bg-cover bg-center bg-no-repeat relative rounded-lg shadow-lg mb-4"
      style={{ minWidth: "325px", overflow: "hidden" }}
    >
      <img
        src={celebrity.celebrityImage.url}
        alt="celebrity"
        className="object-fill w-full h-full"
      />
      <div
        className="absolute bottom-0 left-0 right-0 p-4"
        style={{
          background:
            "linear-gradient(182.63deg, rgba(169, 45, 169, 0) 37.18%, #A82DAA 110.27%)",
        }}
      >
        <h3
          className="text-white text-4xl font-bold text-4xl mb-2 mr-8"
          style={{ lineHeight: "52.5px" }}
        >
          {celebrity.name}
        </h3>
        <div className="flex justify-between items-center">
          <p className="font-satisfy text-xl text-white font-normal">
            #{celebrity.tags[0]}
          </p>
          <button
            className="bg-white text-[#D42978] px-4 py-1 rounded-full text-lg font-medium"
            onClick={handleFavoriteClick}
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
}

export default WishlistCard;
