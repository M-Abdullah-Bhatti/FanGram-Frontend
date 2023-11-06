import React, {useState} from 'react'

function Extras() {
  return (
    <div className="flex justify-between items-center m-24 px-4 py-2 bg-gradient-to-l from-gray-900 via-gray-800 to-gray-800 rounded-xl">
        <div className="flex items-center gap-4">
            <div>
                <img src="/images/order__gift.svg" alt="" />
            </div>
            <div className="text-white">
                <h2 className="text-xl font-semibold">Remove the FanGram logo</h2>
                <p className="text-[#737373] font-medium text-sm">Download your video without a tring watermark</p>
                <span className="text-[#737373] text-base">₹750</span>
            </div>
        </div>
        <div className="flex items-center justify-center w-[35px] h-[35px] bg-[#D42978] rounded-2xl cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                <g clip-path="url(#clip0_92_30493)">
                    <path d="M9 18C8.7669 18 8.54335 17.9074 8.37852 17.7426C8.21369 17.5777 8.12109 17.3542 8.12109 17.1211V0.878906C8.12109 0.645806 8.21369 0.422253 8.37852 0.257426C8.54335 0.0925988 8.7669 0 9 0C9.2331 0 9.45665 0.0925988 9.62148 0.257426C9.78631 0.422253 9.87891 0.645806 9.87891 0.878906V17.1211C9.87891 17.3542 9.78631 17.5777 9.62148 17.7426C9.45665 17.9074 9.2331 18 9 18Z" fill="white"/>
                    <path d="M17.1211 9.87891H0.878906C0.645806 9.87891 0.422253 9.78631 0.257426 9.62148C0.0925988 9.45665 0 9.2331 0 9C0 8.7669 0.0925988 8.54335 0.257426 8.37852C0.422253 8.21369 0.645806 8.12109 0.878906 8.12109H17.1211C17.3542 8.12109 17.5777 8.21369 17.7426 8.37852C17.9074 8.54335 18 8.7669 18 9C18 9.2331 17.9074 9.45665 17.7426 9.62148C17.5777 9.78631 17.3542 9.87891 17.1211 9.87891Z" fill="white"/>
                </g>
                <defs>
                    <clipPath id="clip0_92_30493">
                    <rect width="18" height="18" fill="white"/>
                    </clipPath>
                </defs>
            </svg>
        </div>
    </div>
  )
}

export default Extras