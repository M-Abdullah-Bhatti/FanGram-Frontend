import React from 'react'
import StepsProgress from '../CelebrityOrder/StepsProgress'

function BookingListingCard() {
  return (
    <div className="flex gap-6 bg-[#202020] rounded-lg px-6 py-3">
        <div className="max-h-[250px] rounded-2xl overflow-hidden border border-[#ccc]"
        style={{
          background: "lightgray 50%",
          minWidth: "200px",
          maxWidth: "200px",
        }}
        >
            <img
            src="/images/sunny.png"
            alt="celebrity"
            className="w-full h-[275px] object-fill"
            />
        </div>
        <div>
            <h1 className="font-extrabold text-4xl">Sunny Leone</h1>
            <div>
                <div></div>
            </div>
            <div>
                <StepsProgress currentIndex={2} />
            </div>
        </div>
    </div>
  )
}

export default BookingListingCard