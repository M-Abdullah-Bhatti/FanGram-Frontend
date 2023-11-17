import React, { useEffect, useState } from "react";
import WishlistCard from "./WishlistCard";
import { useGetFavoriteCelebrities } from "../../hooks/profile-hooks";

function Wishlist() {
  const [userId, setUserId] = useState();

  const {
    data: favoriteCelebrities,
    isLoading,
    isError,
    refetch,
  } = useGetFavoriteCelebrities(userId);

  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem("userInfo"));

    setUserId(userInfo?.userId);
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error fetching favorite celebrities</div>;
  }

  return (
    <div className="w-full flex items-center flex-wrap gap-6 my-8 md:my-16">
      {favoriteCelebrities.map((celebrity) => (
        <WishlistCard celebrity={celebrity} refetchFavorites={refetch} />
      ))}
    </div>
  );
}

export default Wishlist;
