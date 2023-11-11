import React from 'react'

function PromotionCTA() {
  return (
    <div className="flex flex-col items-center justify-center rounded-3xl px-4 py-6 gap-3 w-[90%] sm:w-[80%] md:w-[70%] my-10" style={{background: 'linear-gradient(100deg, #FDC15D -15.15%, #D1297A 25%, #AB2DA7 57.57%)'}}>
        <h2 className="text-center text-xl md:text-3xl font-extrabold">Ready to take your brand to greater heights?</h2>
        <button className='text-sm md:text-base bg-white rounded-3xl text-[#D84388] px-8 py-2'>Get In Touch With Us</button>
    </div>
  )
}

export default PromotionCTA