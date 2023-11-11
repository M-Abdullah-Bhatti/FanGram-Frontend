import React from 'react'
import { offers, services } from '../../Data'

function BusinessOffers() {
  return (
    <div className="w-full flex flex-col md:justify-center md:items-center mt-10 mb-6 md:mb-10">
        <h2 className="font-semibold text-xl md:text-3xl lg:text-[45px] text-left md:text-center mb-4 md:mb-12">What we offers</h2>
        <div className="w-full flex flex-wrap gap-4">
            {
                offers.map((offer)=> (
                    <div className="flex items-center justify-center w-full md:w-[48%] lg:w-[23%] bg-[#C93874] text-center py-3 rounded-3xl cursor-pointer">
                        <h2 className="text-sm md:text-lg text-center">{offer}</h2>
                    </div>
                ))
            }
        </div>

        <div className="w-full md:w-[90%] lg:w-[80%] bg-[#202020] mt-10 rounded-2xl p-4 space-y-1 md:space-y-2">
           <h2 className="text-base md:text-xl font-semibold">Brand Ambassador</h2>
           <p className="text-[#8E8E8E] text-[10px] md:text-sm">We help you onboard a celebrity face as a brand ambassador, which would level up your marketing and improve your positioning</p>
           <div>
                <h2 className="text-base md:text-xl font-semibold">Services</h2>
                {
                    services.map((service)=> (
                        <div className="flex my-2 gap-2">
                            <img src="/images/greentick.svg" alt="" />
                            <span className="text-xs md:text-base">{service}</span>
                        </div>
                    ))
                }
           </div>
        </div>
    </div>
  )
}

export default BusinessOffers