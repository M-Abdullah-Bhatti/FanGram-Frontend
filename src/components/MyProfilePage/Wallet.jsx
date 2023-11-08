import React from 'react'
import { transactionsData } from '../../Data'

function Wallet() {
  return (
    <div className="md:mx-28 my-12 space-y-4">
        <div className="flex flex-col md:flex-row justify-between bg-[#202020] rounded-lg px-6 py-3 font-bold">
            <div className="flex justify-center flex-col w-full md:w-1/2 border-b-2 md:border-b-0 border-r-0 md:border-r-2 space-y-2 py-3" style={{borderColor: 'rgb(255, 255, 255, 0.2)'}}>
                <p className="text-xl"><span className="text-[#D42978]">tcash</span> Earned</p>
                <p className="text-2xl text-[#D42978]">0</p>
            </div>
            <div className="flex justify-center flex-col w-full md:w-1/2 md:ml-6 space-y-2 py-3">
                <p className="text-xl">Coupons</p>
                <p className="text-2xl text-[#D42978]">0</p>
            </div>
        </div>
        <div className="bg-[#202020] rounded-lg p-4 md:p-6">
            <h2 className="text-base md:text-xl font-semibold pb-3 border-b" style={{borderColor: 'rgb(255, 255, 255, 0.2)'}}>Recent transactions</h2>
            <div className="overflow-x-auto">
                <table className="min-w-full table-auto mt-3">
                    <thead>
                    <tr className="font-semibold text-xs md:text-base text-[#7E7E7E]">
                        <th className="text-left px-2 py-2 w-1/4">Activity</th>
                        <th className="text-left px-2 py-2 w-1/4">Date & Time</th>
                        <th className="text-left px-2 py-2 w-1/4">Earned & Redeem</th>
                        <th className="text-left px-2 py-2 w-1/4">Payment Status</th>
                    </tr>
                    </thead>
                    <tbody>
                    {transactionsData.map((item, index) => (
                        <tr key={index} className="text-xs md:text-base">
                            <td className="flex pr-2 items-center gap-2 py-2"><img src="/images/wallet__icon.svg" alt="icon" className="w-[16px] md:w-[30px]" />{item.activity}</td>
                            <td className="px-2 py-2">{item.dateTime}</td>
                            <td className="px-2 py-2">{item.earned}</td>
                            <td className="px-2 py-2" style={{color: item.paymentStatus === 'Success' ? '#08C949' : '#FF5353'}}>{item.paymentStatus}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    </div>
  )
}

export default Wallet