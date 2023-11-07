import React from 'react'

function SurpriseCard({surprise}) {
  return (
    <div className="flex justify-between bg-[#F9F9F9] p-3 my-4 rounded-lg">
        <div className="flex space-x-3">
            <div className="flex items-center">
                <img src="/images/confirmation__fullhd.svg" alt="" />
            </div>
            <div>
                <h2 className="font-semibold">{surprise.title}</h2>
                <span className="text-[#7E7E7E] font-medium">{surprise.subtitle}</span>
            </div>
        </div>
        <div className="flex flex-col items-center font-semibold">
            <span>₹{surprise.price}</span>
            <span style={{color: surprise.underPriceColor}}>{surprise.underPrice}</span>
        </div>
    </div>
  )
}

export default SurpriseCard