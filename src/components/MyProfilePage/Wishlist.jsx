import React, { useEffect, useState } from "react";
import WishlistCard from "./WishlistCard";
import { useGetFavoriteCelebrities } from "../../hooks/profile-hooks";

function Wishlist() {
  const [userId, setUserId] = useState();
  const userDetailsFromLocalStorage = JSON.parse(
    localStorage.getItem("userInfo")
  );

  const {
    data: favoriteCelebrities,
    isLoading,
    isError,
    refetch,
  } = useGetFavoriteCelebrities(userDetailsFromLocalStorage.userId);
  console.log("fvfr", favoriteCelebrities);

  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem("userInfo"));

    setUserId(userInfo?.userId);
  }, []);

  // if (isLoading) {
  //   return <div>Loading...</div>;
  // }

  if (isError) {
    return <div>Error fetching favorite celebrities</div>;
  }

  return (
    <div className="w-full flex items-center flex-wrap gap-6 my-8 md:my-16">
      {isLoading && (
        <div className="animate-spin h-20 w-20 rounded-full mx-auto border-r-2 border-l-2 border-yellow-500"></div>
      )}
      {favoriteCelebrities && favoriteCelebrities.length == 0 && (
        <h1 className="text-center text-white">No Wishlist</h1>
      )}
      {favoriteCelebrities &&
        favoriteCelebrities.map((celebrity) => (
          <WishlistCard celebrity={celebrity} refetchFavorites={refetch} />
        ))}
    </div>
  );
}

export default Wishlist;
