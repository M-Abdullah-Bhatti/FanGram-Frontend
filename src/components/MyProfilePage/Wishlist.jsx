import React from 'react'
import WishlistCard from './WishlistCard'
import { useGetFavoriteCelebrities } from '../../hooks/profile-hooks';

function Wishlist() {

  const { data: favoriteCelebrities, isLoading, isError } = useGetFavoriteCelebrities('6550de64d526b91721886925');

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error fetching favorite celebrities</div>;
  }
  return (
    <div className="w-full flex items-center flex-wrap gap-6 my-8 md:my-16">
      {favoriteCelebrities.map((celebrity) => (
        <WishlistCard celebrity={celebrity} />
      ))}
    </div>
  )
}

export default Wishlist