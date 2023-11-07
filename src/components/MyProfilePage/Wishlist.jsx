import React from 'react'
import WishlistCard from './WishlistCard'

function Wishlist() {
  return (
    <div className="w-full flex items-center flex-wrap gap-6 my-16">
        <WishlistCard />
        <WishlistCard />
        <WishlistCard />
    </div>
  )
}

export default Wishlist