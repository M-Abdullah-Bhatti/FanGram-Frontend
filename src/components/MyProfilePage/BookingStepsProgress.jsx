import React from 'react'

function BookingStepsProgress({currentIndex}) {

    const firstDivStyles = {
        backgroundColor: currentIndex >= 0 ? "#008115" : ''
    }
    
    const secondDivStyles = {
        backgroundColor: currentIndex >= 1 ? "#008115" : '#4B4B4B',
    }
    
    const thirdDivStyles = {
        backgroundColor: currentIndex > 1 ? "#008115" : '#4B4B4B',
    }

    const fourthDivStyles = {
      backgroundColor: currentIndex > 2 ? "#008115" : '#4B4B4B',
    }
    
    const lineStyles = {
      border: "1px dashed #4B4B4B",
    }

  return (
    <div className="flex justify-start items-center my-3">
        {/* First Div */}
        <div>
          <div className="flex justify-start items-center mb-2">
            <div className="bg-[#D42978] w-[30px] md:w-[40px] h-[30px] md:h-[40px] rounded-full" style={firstDivStyles}></div>
            <div className="w-[60px] lg:w-[250px] h-[2px]" style={lineStyles}></div>
          </div>
          <span className="text-xs lg:text-base ml-[-24px]" style={{color: currentIndex >= 0 ? '#008115' : '#FFFFFF'}}>Order Placed</span>
        </div>
        {/* Second Div */}
        <div>
          <div className="flex justify-start items-center mb-2">
            <div className="w-[30px] md:w-[40px] h-[30px] md:h-[40px] rounded-full" style={secondDivStyles}></div>
            <div className="w-[60px] lg:w-[250px] h-[2px]" style={lineStyles}></div>
          </div>
          <span className="text-xs lg:text-base ml-[-14px] md:ml-[-30px]" style={{color: currentIndex >= 1 ? '#008115' : '#FFFFFF'}}>Sent to celeb</span>
        </div>
        {/* Third Div */}
        <div>
          <div className="flex justify-start items-center mb-2">
            <div className="w-[30px] md:w-[40px] h-[30px] md:h-[40px] rounded-full" style={thirdDivStyles}></div>
            <div className="w-[60px] lg:w-[250px] h-[2px]" style={lineStyles}></div>
          </div>
          <span className="text-xs lg:text-base ml-[-36px]" style={{color: currentIndex > 1 ? '#008115' : '#FFFFFF'}}>Celeb Accepted</span>
        </div>
        {/* Fourth Div */}
        <div>
          <div className="flex justify-start items-center mb-2">
            <div className="w-[30px] md:w-[40px] h-[30px] md:h-[40px] rounded-full" style={fourthDivStyles}></div>
          </div>
          <span className="text-xs lg:text-base ml-[-12px]" style={{color: currentIndex > 1 ? '#008115' : '#FFFFFF'}}>Delivered</span>
        </div>
    </div>
  )
}

export default BookingStepsProgress