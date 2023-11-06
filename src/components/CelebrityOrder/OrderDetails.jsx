import React from 'react'
import Extras from './Extras'
import { extras } from '../../Data'

const Options = ['He/Him', 'She/Her', 'Other']

function OrderDetails() {

  return (
    <div className="text-white pb-12">
        {/* Order Details */}
        <div className="bg-[#202020] rounded-xl overflow-hidden p-4 my-6">
            <h2 className="font-semibold text-3xl mb-2">Order details</h2>
            <p className="font-semibold text-xl">Who is this video for?</p>
            <div className='flex my-4 gap-4 mb-6'>
                <span className="flex gap-2 bg-[#D42978] w-fit px-4 py-2 rounded-3xl">
                    <input type="radio" style={{accentColor: 'white', width: 20, height: 20}} />
                    Someone Else
                </span>
                <span className="flex gap-2 bg-[#D42978] w-fit px-4 py-2 rounded-3xl">
                    <input type="radio" style={{accentColor: 'white', width: 20, height: 20}} />
                    My Self
                </span>
            </div>

            <div className="flex gap-4">
                <div className="flex flex-col rounded w-full">
                    <label className='mb-2'>To <span>(First Name)</span></label>
                    <input className="border border-[#6D6D6D] bg-[#292929] px-4 py-2 rounded" type="text" placeholder="Name Of the Receiver" />
                    <div className="flex flex-wrap">
                        {Options.map((tag, index) => (
                            <span key={index} className="text-base font-normal px-4 py-2 bg-[#292929] rounded-3xl my-2 lg:my-4 mr-3 cursor-pointer">
                            {tag}
                            </span>
                        ))}
                    </div>
                </div>
                <div className="flex flex-col rounded w-full">
                    <label className='mb-2'>From <span>(First Name)</span></label>
                    <input className="border border-[#6D6D6D] bg-[#292929] px-4 py-2 rounded" type="text" placeholder="John Doe" />
                    <div className="flex flex-wrap">
                        {Options.map((tag, index) => (
                            <span key={index} className="text-base font-normal px-4 py-2 bg-[#D42978] rounded-3xl my-2 lg:my-4 mr-3 cursor-pointer">
                            {tag}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </div>

        {/* Ocassion */}
        <div></div>

        {/* Delivery */}
        <div className="bg-[#202020] rounded-xl overflow-hidden p-4 my-6">
            <h2 className="font-semibold text-3xl mb-4">Delivery</h2>
            
            <div className="flex flex-col my-4">
                <label className="mb-2 text-xl">How quickly do you want the video?</label>
                <span className="flex gap-2 bg-[#D42978] w-fit px-4 py-2 rounded-3xl">
                    <input type="radio" style={{accentColor: 'white', width: 20, height: 20}} />
                    Within 4 days Free
                </span>
            </div>
            <div className='flex flex-col my-4'>
                <label className="mb-2 text-xl">Do you want to deliver this surprise to the recipient?</label>
                <div className="flex gap-4">
                    <span className="flex gap-2 bg-[#D42978] w-fit px-4 py-2 rounded-3xl">
                        <input type="radio" style={{accentColor: 'white', width: 20, height: 20}} />
                        Yes, go head ₹1500
                    </span>
                    <span className="flex gap-2 bg-[#D42978] w-fit px-4 py-2 rounded-3xl">
                        <input type="radio" style={{accentColor: 'white', width: 20, height: 20}} />
                        No, Skip for now
                    </span>
                </div>
            </div>
        </div>

        {/* Extras */}
        <div>
            <h1 className="text-3xl font-semibold mb-4">Extras</h1>
            <div className="space-y-4">
                {
                    extras.map((extra, index)=> (
                        <Extras extra={extra} key={index} />
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default OrderDetails