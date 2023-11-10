import React from 'react'

function RandomCard() {
  return (
    <div className="w-full md:min-w-[275px] min-h-[400px] lg:min-h-[300px] relative bg-[#D42978] rounded-xl">
      <div className="flex flex-col items-center mt-12">
        <p className=" text-[28px] font-extrabold">Want to</p>
        <p className="text-[#FCAE4B] text-[28px] font-extrabold">Stand out</p>
        <p className=" text-[28px] font-extrabold">From Your</p>
        <p className="text-[#FCAE4B] text-[28px] font-extrabold">Competitors</p>
      </div>
      <div className="absolute bottom-0 left-0 right-0 p-2 space-y-2">
        <span className="bg-white text-[#D42978] text-sm px-4 py-2 rounded-3xl">
          Trip For Business
        </span>
        <p className='ml-2 underline'>Play Now</p>
      </div>
    </div>
  )
}

export default RandomCard