import React from 'react'

function TicketDesign() {
  return (
    <div className="flex justify-between items-center w-full">
      <div className="w-[20px] h-[20px] bg-black rounded-3xl ml-[-10px]"></div>
        <img src="/images/line.png" alt="" className="ticket h-[3px]" />
      <div className="w-[20px] h-[20px] bg-black rounded-3xl mr-[-10px]"></div>
    </div>
  )
}

export default TicketDesign