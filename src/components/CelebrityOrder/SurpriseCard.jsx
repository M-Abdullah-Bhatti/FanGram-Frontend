import React from 'react'

function SurpriseCard({surprise}) {
  return (
    <div className="flex justify-between bg-[#F9F9F9] md:p-3 px-2 py-1 my-4 rounded-lg">
        <div className="flex gap-3">
            <div className="flex items-center">
                <img src="/images/confirmation__fullhd.svg" alt="" className="w-[25px] md:w-[50px]" />
            </div>
            <div>
                <h2 className="font-semibold text-xs md:text-base">{surprise.title}</h2>
                <span className="text-[#7E7E7E] font-medium text-[10px] md:text-base">{surprise.subtitle}</span>
            </div>
        </div>
        <div className="flex flex-col items-center justify-center font-semibold">
            <span className="text-xs md:text-base">₹{surprise.price}</span>
            <span className="text-xs md:text-base" style={{color: surprise.underPriceColor}}>{surprise.underPrice}</span>
        </div>
    </div>
  )
}

export default SurpriseCard