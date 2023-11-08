import React from 'react'
import BookingStepsProgress from './BookingStepsProgress'

function BookingListingCard({booking}) {
  return (
    <div className="flex flex-col md:flex-row gap-6 bg-[#202020] rounded-xl md:rounded-lg px-6 py-3">
        <div className="w-[150px] md:w-[275px] rounded-2xl overflow-hidden border border-[#ccc]"
          style={{
            background: "lightgray 50%",
            margin: '0 auto'
          }}
        >
            <img
              src={booking.img}
              alt="celebrity"
              className="w-full max-h-[175px] md:max-h-[275px] object-fill"
            />
        </div>
        <div className='w-full'>
            <h1 className="font-extrabold text-2xl md:text-4xl text-center md:text-left mb-2 md:mb-0">{booking.name}</h1>
            <div className="flex flex-col md:flex-row w-full py-4">
                <div className="flex w-full md:w-2/3 flex-col md:flex-row items-center font-semibold">
                  <div className="w-full md:w-1/2 md:border-r-2">
                    <div className="flex justify-between mb-2 md:mb-4 font-semibold">
                      <span className="w-full text-[#7E7E7E]">Request For</span>
                      <span className="w-full text-right md:text-left">Recorder Video</span>
                    </div>
                    <div className="flex justify-between mb-2 md:mb-0">
                      <p className="w-full text-[#7E7E7E]">Booking Date</p>
                      <p className='w-full text-right md:text-left'>19 Oct, 2023</p>
                    </div>
                  </div>
                  <div className="w-full md:w-1/2">
                    <div className="flex justify-between mb-2 md:mb-4">
                      <span className="w-full md:ml-12 text-[#7E7E7E]">Order Id</span>
                      <span className="w-full text-right md:text-left">630114</span>
                    </div>
                    <div className="flex justify-between mb-2 md:mb-0">
                      <p className="w-full md:ml-12 text-[#7E7E7E]">Amount</p>
                      <p className='w-full text-right md:text-left'>₹1,999 <sub className="text-[#7E7E7E] text-xs">(INC. OF GST)</sub></p>
                    </div>
                  </div>
                </div>
                <div className="w-full md:w-1/3 flex justify-between items-end md:flex-col gap-1 font-semibold">
                  <p className="text-[#7E7E7E]">Booking For</p>
                  <p>Saurav gannguly</p>
                  <p className="hidden md:flex text-[#D42978] underline">Need help?</p>
                </div>
                <p className="md:hidden text-[#D42978] underline mt-6 text-center">Need help?</p>
            </div>
            <div className='w-full flex items-center justify-center'>
              <BookingStepsProgress currentIndex={2} />
            </div>
        </div>
    </div>
  )
}

export default BookingListingCard