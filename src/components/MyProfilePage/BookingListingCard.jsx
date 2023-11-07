import React from 'react'
import BookingStepsProgress from './BookingStepsProgress'

function BookingListingCard({booking}) {
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
            src={booking.img}
            alt="celebrity"
            className="w-full h-[275px] object-fill"
            />
        </div>
        <div className='w-full'>
            <h1 className="font-extrabold text-4xl">{booking.name}</h1>
            <div className="flex w-full py-4">
                <div className="flex w-2/3 items-center font-semibold">
                  <div className="w-1/2 border-r-2">
                    <div className="flex justify-between mb-4 font-semibold">
                      <span className="w-full text-[#7E7E7E]">Request For</span>
                      <span className="w-full text-left">Recorder Video</span>
                    </div>
                    <div className="flex justify-between">
                      <p className="w-full text-[#7E7E7E]">Booking Date</p>
                      <p className='w-full text-left'>19 Oct, 2023</p>
                    </div>
                  </div>
                  <div className="w-1/2">
                    <div className="flex justify-between mb-4">
                      <span className="w-full ml-12 text-[#7E7E7E]">Order Id</span>
                      <span className="w-full">630114</span>
                    </div>
                    <div className="flex justify-between">
                      <p className="w-full ml-12 text-[#7E7E7E]">Amount</p>
                      <p className='w-full'>₹1,999 <sub className="text-[#7E7E7E] text-xs">(INC. OF GST)</sub></p>
                    </div>
                  </div>
                </div>
                <div className="w-1/3 flex items-end flex-col gap-1 font-semibold">
                  <p className="text-[#7E7E7E]">Booking For</p>
                  <p>Saurav gannguly</p>
                  <p className="text-[#D42978] underline">Need help?</p>
                </div>
            </div>
            <div>
                <BookingStepsProgress currentIndex={2} />
            </div>
        </div>
    </div>
  )
}

export default BookingListingCard