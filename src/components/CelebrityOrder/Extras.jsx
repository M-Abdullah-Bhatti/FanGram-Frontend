import React from 'react'

function Extras({extra}) {
  return (
    <div className="flex justify-between items-center px-4 py-2 bg-[#202020] rounded-xl">
        <div className="flex items-center gap-4">
            <div className="bg-[#D42978] h-full rounded-xl p-4" style={{height: '100%', padding: 'auto'}}>
                <img className="min-w-[25px] md:min-w-[50px] max-w-[25px] md:max-w-[50px]" src={extra.icon} alt="" />
            </div>
            <div className="text-white">
                <h2 className="text-sm md:text-xl font-semibold">{extra.title}</h2>
                {extra.subtitle && <p className="text-[#737373] font-medium text-[10px] md:text-sm">{extra.subtitle}</p>}
                <span className="text-[#737373] text-xs md:text-base">₹{extra.price}</span>
            </div>
        </div>
        <div className='flex items-center justify-end w-[40px]'>
            <div className="flex items-center justify-center w-[20px] md:w-[35px] h-[20px] md:h-[35px] bg-[#D42978] rounded-2xl cursor-pointer">
                <img src="/images/plus.svg" alt="" className='max-w-[60%]' />
            </div>
        </div>
    </div>
  )
}

export default Extras