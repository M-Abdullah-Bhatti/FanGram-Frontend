import React from 'react'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import PaymentExtrasSection from './PaymentExtrasSection'
import TicketDesign from './TicketDesign'

function Payment() {
  return (
    <div className="mt-24 lg:mx-32">
        <div className="bg-white rounded-t-3xl">
            <div className="px-6 py-2 pt-6">
                <h3 className='mb-3 text-[#7E7E7E] font-semibold'>Your Cart</h3>
                <div className="flex gap-2">
                    <img src="/images/order__sunny.png" className="rounded-xl" alt="sunny" />
                    <div>
                        <h1 className='text-2xl font-extrabold mb-1'>Sunny Leone</h1>
                        <span className="flex gap-2 text-[#D42978]">
                            <span className="cursor-pointer">Show/Edit</span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" className="cursor-pointer" viewBox="0 0 22 22" fill="none">
                                <path d="M11 15.125C10.9097 15.1251 10.8203 15.1074 10.7369 15.0728C10.6535 15.0382 10.5777 14.9875 10.514 14.9236L3.63898 8.04861C3.37034 7.77996 3.37034 7.34495 3.63898 7.07648C3.90762 6.80801 4.34264 6.80784 4.61111 7.07648L11 13.4654L17.389 7.07648C17.6576 6.80784 18.0926 6.80784 18.3611 7.07648C18.6296 7.34512 18.6297 7.78014 18.3611 8.04861L11.4861 14.9236C11.4223 14.9875 11.3466 15.0382 11.2632 15.0728C11.1798 15.1074 11.0903 15.1251 11 15.125Z" fill="#D42978"/>
                            </svg>
                        </span>
                    </div>
                </div>

                {/* Charges */}
                <div className="" style={{borderBottomWidth: 5, borderBottomColor: '#E9E9E9'}}>
                    <div className="flex my-4 justify-between">
                        <span>Video Message</span>
                        <span className="text-[#4E4E4E]">₹150</span>
                    </div>
                    <div className="flex my-4 justify-between">
                        <span>Service Fees</span>
                        <span className="text-[#4E4E4E]">₹7.50</span>
                    </div>
                </div>

                {/* Search */}
                <div className="flex justify-between items-center gap-3 p-1 mt-5 border-[1px] rounded-xl border-[#D2D1D1]">
                <input
                    type="text"
                    placeholder="Coupon Code"
                    className="outline-none w-full h-full px-2 bg-transparent focus:bg-transparent text-black"
                />

                <button className="bg-[#D42978] text-[#fff] rounded-3xl py-2 px-6">
                    Add
                </button>
                </div>

                {/* Total */}
                <div className="flex items-center justify-between my-4">
                    <span className="font-semibold text-2xl">Total</span>
                    <span className="font-bold text-2xl">₹11149</span>
                </div>

            </div>

            {/* Design */}
            <TicketDesign />

            <div className="px-6 py-3">
                {/* Your Detail */}
                <div className="gap-1">
                    <h1 className="my-4 text-[#7E7E7E] font-semibold">YOUR DETAILS</h1>
                    <h3 className="my-2">Billing Email</h3>
                    <p>Email is required ro continue to payment</p>
                    <p className="text-[#D84388]">Iamduteraboys@gmail.com</p>

                    <div className="mt-6 w-full">
                        <label>Billing Phone</label>
                        <PhoneInput
                            inputProps={{
                                name: 'phone',
                                required: true,
                                autoFocus: true
                            }}
                            country={'pk'}
                        />
                    </div>
                    <div className='flex items-center gap-2 my-2'>
                        <input type="checkbox" className="w-[14px] h-[14px] bg-[#202020] border border-[#999999]" style={{accentColor: '#D42978'}} />
                        <p className="text-[#999999]">I’m purchasing as a company</p>
                    </div>

                    <div className='flex flex-col lg:flex-row items-center justify-between my-4 space-y-2'>
                        <p className='font-semibold lg:w-1/2'>Secure and fast payments via Card, UPI, Netbanking and more By continuing, you agree to our terms</p>
                        <button className='w-full lg:w-[25%] bg-[#D84388] text-white text-xl rounded-3xl px-4 py-3 mb-1'>Continue</button>
                    </div>
                </div>
            </div>
            
            <div className='flex overflow-hidden'>
                {
                    [1, 2, 3, 4, 5].map((index)=> (
                        <img src="/images/Vector.svg" alt="" class="bg-black" key={index} />
                    ))
                }
            </div>
        </div>

        <PaymentExtrasSection />
    </div>
  )
}

export default Payment