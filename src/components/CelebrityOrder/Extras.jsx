import React from 'react'

function Extras({extra}) {
  return (
    <div className="flex justify-between items-center px-4 py-2 bg-[#202020] rounded-xl">
        <div className="flex items-center gap-4">
            <div className="bg-[#D42978] h-full rounded-xl p-4" style={{height: '100%', padding: 'auto'}}>
                <img className="w-[50px]" src={extra.icon} alt="" />
            </div>
            <div className="text-white">
                <h2 className="text-xl font-semibold">{extra.title}</h2>
                {extra.subtitle && <p className="text-[#737373] font-medium text-sm">{extra.subtitle}</p>}
                <span className="text-[#737373] text-base">₹{extra.price}</span>
            </div>
        </div>
        <div className="flex items-center justify-center w-[35px] h-[35px] bg-[#D42978] rounded-2xl cursor-pointer">
            <img src="/images/plus.svg" alt="" />
        </div>
    </div>
  )
}

export default Extras