import React from 'react'

function PaymentExtra({extra}) {
  return (
    <div className="flex justify-between items-center px-4 py-2 bg-[#1D1D1D] rounded-xl">
        <div className="flex items-center gap-4">
            <div className="h-full rounded-xl p-4" style={{height: '100%', padding: 'auto'}}>
                <img className="w-[50px]" src={extra.icon} alt="" />
            </div>
            <div className="text-white space-y-2">
                <h2 className="text-xl font-semibold">{extra.title}</h2>
                <p className="text-[#737373] font-medium text-sm">{extra.subtitle}</p>
            </div>
        </div>
    </div>
  )
}

export default PaymentExtra