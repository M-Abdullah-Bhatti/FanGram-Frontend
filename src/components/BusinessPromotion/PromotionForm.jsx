import React, { useState } from 'react'
import { budgets } from '../../Data'

function PromotionForm() {
    
    const [selectedBudget, setSelectedBudget] = useState('');

  return (
    <div className="text-black py-8">
        <form className="bg-white rounded-xl px-4 md:px-16 py-8">
            <h2 className="font-semibold text-3xl my-4 text-center">Let's get to work</h2>

            <div className="flex flex-col lg:flex-row gap-4 mb-4">
                <div className="flex flex-col rounded w-full">
                    <label className='mb-1'>Name</label>
                    <input className="border border-[#6D6D6D] bg-[#F7F7F7] px-4 py-2 rounded" type="text" placeholder="Name Of the Receiver" />
                </div>
                <div className="flex flex-col rounded w-full">
                    <label className='mb-1'>Mobile Number</label>
                    <input className="border border-[#6D6D6D] bg-[#F7F7F7] px-4 py-2 rounded" type="text" placeholder="John Doe" />
                </div>
            </div>
            <div className="flex flex-col lg:flex-row gap-4 mb-4">
                <div className="flex flex-col rounded w-full">
                    <label className='mb-1'>Email</label>
                    <input className="border border-[#6D6D6D] bg-[#F7F7F7] px-4 py-2 rounded" type="text" placeholder="Name Of the Receiver" />
                </div>
                <div className="flex flex-col rounded w-full">
                    <label className='mb-1'>Job Title</label>
                    <input className="border border-[#6D6D6D] bg-[#F7F7F7] px-4 py-2 rounded" type="text" placeholder="John Doe" />
                </div>
            </div>
            <div className="flex flex-col lg:flex-row gap-4 mb-4">
                <div className="flex flex-col rounded w-full">
                    <label className='mb-1'>Company Name / Brand Website</label>
                    <input className="border border-[#6D6D6D] bg-[#F7F7F7] px-4 py-2 rounded" type="text" placeholder="Name Of the Receiver" />
                </div>
                <div className="flex flex-col rounded w-full">
                    <label className='mb-1'>Number of employee</label>
                    <input className="border border-[#6D6D6D] bg-[#F7F7F7] px-4 py-2 rounded" type="text" placeholder="John Doe" />
                </div>
            </div>
            <div className="flex flex-col lg:flex-row gap-4 mb-4">
                <div className="flex flex-col rounded w-full">
                    <label className='mb-1'>City</label>
                    <input className="border border-[#6D6D6D] bg-[#F7F7F7] px-4 py-2 rounded" type="text" placeholder="Name Of the Receiver" />
                </div>
                <div className="flex flex-col rounded w-full">
                    <label className='mb-1'>Select Product</label>
                    <select
                        id="selectedProduct"
                        name="selectedProduct"
                        className="bg-[#F7F7F7] border border-[#6D6D6D] w-full p-2 border rounded-md"
                        required
                    >
                        <option value="" disabled>
                        Choose a product
                        </option>
                        <option value="product1">Product 1</option>
                        <option value="product2">Product 2</option>
                        <option value="product3">Product 3</option>
                    </select>
                </div>
            </div>
            <div className="flex flex-col mb-4">
                <label className='mb-1'>How Did You Find Us?</label>
                <select
                    id="selectedProduct"
                    name="selectedProduct"
                    className="bg-[#F7F7F7] border border-[#6D6D6D] w-full p-2 border rounded-md"
                    required
                >
                    <option value="" disabled>
                        Choose a product
                        </option>
                        <option value="product1">Product 1</option>
                        <option value="product2">Product 2</option>
                        <option value="product3">Product 3</option>
                </select>
            </div>
            <div className="flex flex-col mb-4">
                <label className='mb-1'>What’s your budget?</label>
                <div className="flex flex-wrap">
                    {
                        budgets.map((budget, index)=> (
                            <span 
                                className='text-[#000] mr-2 my-2 rounded-3xl px-4 py-2 cursor-pointer'
                                style={{backgroundColor: budget === selectedBudget ? '#D42978' : '#F3F1F1', color: budget === selectedBudget ? '#FFFFFF' : '#000000'}}
                                onClick={()=> setSelectedBudget(budget)}
                            >
                                {budget}
                            </span>
                        ))
                    }
                </div>
            </div>
            <div className='flex items-center gap-2 my-2 mb-4'>
                <input type="checkbox" className="w-[14px] h-[14px] bg-[#202020] border border-[#999999]" style={{accentColor: '#D42978'}} />
                <p className="text-black text-xs md:text-base">By submitting, you agree to receive marketing communications about Tring for Business</p>
            </div>
            <div className='flex items-center justify-center'>
                <button className='bg-[#D84388] text-white rounded-3xl px-4 py-3 mb-1 w-full md:w-[300px]'>Submit</button>
            </div>
        </form>
    </div>
  )
}

export default PromotionForm