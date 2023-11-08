import React from 'react'
import BookingListingCard from './BookingListingCard'
import { bookingData } from '../../Data'

function BookingListing() {
  return (
    <div className="my-8 md:my-16">
      <div className="space-y-6">
        {
          bookingData.map((booking, index)=> (
            <BookingListingCard booking={booking} key={index} />
          ))
        }
      </div>
    </div>
  )
}

export default BookingListing