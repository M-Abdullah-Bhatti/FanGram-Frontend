import React from 'react'

function OrderDetails() {
  return (
    <div className="text-white">
        {/* Order Details */}
        <div className="bg-[#202020] rounded-xl overflow-hidden p-4 my-6">
            <h2 className="font-semibold text-3xl">Order details</h2>
            <p className="font-semibold text-xl">Who is this video for?</p>
            <div className='flex my-4 gap-4'>
                <span className="flex gap-2 bg-[#D42978] w-fit px-4 py-2 rounded-3xl">
                    <input type="radio" style={{accentColor: 'white', backgroundColor: 'inherit', width: 20, height: 20, borderWidth: 1}} />
                    Someone Else
                </span>
                <span className="flex gap-2 bg-[#D42978] w-fit px-4 py-2 rounded-3xl">
                    <input type="radio" style={{accentColor: 'white', backgroundColor: 'inherit', width: 20, height: 20, borderWidth: 1}} />
                    My Self
                </span>
            </div>
        </div>
    </div>
  )
}

export default OrderDetails