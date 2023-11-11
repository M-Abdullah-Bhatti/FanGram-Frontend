import React from 'react'

function Contact() {
  return (
    <div className='w-full flex flex-col lg:flex-row items-center justify-between my-4 gap-2 px-3 md:px-6 py-4 md:py-8 bg-[#D84388] rounded-2xl my-6 mb-12'>
        <p className='font-semibold w-full lg:w-2/3 text-sm md:text-2xl text-center lg:text-left'>Want to grow your business? Book a free consultation session with our Dedicated Brand Representative</p>
        <button className='bg-white text-[#D84388] text-sm lg:text-xl rounded-full px-8 py-3 md:mb-1 mt-2 md:mt-0'>Contact us</button>
    </div>
  )
}

export default Contact