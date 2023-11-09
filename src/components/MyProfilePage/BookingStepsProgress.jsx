import React from 'react'

function BookingStepsProgress({currentIndex}) {

    const firstDivStyles = {
        backgroundColor: currentIndex >= 0 ? "#D42978" : ''
    }
    
    const secondDivStyles = {
        backgroundColor: currentIndex >= 1 ? "#D42978" : '',
        borderWidth: currentIndex < 1 ? 1 : '0',
        borderColor: currentIndex < 1 ? '#FFFFFF' : '',
    }
    
    const thirdDivStyles = {
        backgroundColor: currentIndex > 1 ? "#D42978" : '',
        borderWidth: currentIndex < 2 ? 1 : '0',
        borderColor: currentIndex < 2 ? '#FFFFFF' : '',
    }
    
    const firstLineStyles = {
        backgroundColor: currentIndex > 0 ? "#D42978" : '#FFFFFF',
    }
    
    const secondLineStyles = {
        backgroundColor: currentIndex > 1 ? "#D42978" : '#FFFFFF',
    }

  return (
    <div className="flex justify-start items-center my-3">
        {/* First Div */}
        <div>
          <div className="flex justify-start items-center mb-2">
            <div className="bg-[#D42978] w-[30px] md:w-[40px] h-[30px] md:h-[40px] rounded-full" style={firstDivStyles}></div>
            <div className="w-[60px] lg:w-[250px] h-[2px]" style={firstLineStyles}></div>
          </div>
          <span className="text-xs lg:text-base ml-[-14px]" style={{color: currentIndex >= 0 ? '#D42978' : '#FFFFFF'}}>Note Placed</span>
        </div>
        {/* Second Div */}
        <div>
          <div className="flex justify-start items-center mb-2">
            <div className="w-[30px] md:w-[40px] h-[30px] md:h-[40px] rounded-full" style={secondDivStyles}></div>
            <div className="w-[60px] lg:w-[250px] h-[2px]" style={secondLineStyles}></div>
          </div>
          <span className="text-xs lg:text-base ml-[-14px] md:ml-[-24px]" style={{color: currentIndex >= 1 ? '#D42978' : '#FFFFFF'}}>Sent to celeb</span>
        </div>
        {/* Third Div */}
        <div>
          <div className="flex justify-start items-center mb-2">
            <div className="w-[30px] md:w-[40px] h-[30px] md:h-[40px] rounded-full" style={thirdDivStyles}></div>
            <div className="w-[60px] lg:w-[250px] h-[2px]" style={secondLineStyles}></div>
          </div>
          <span className="text-xs lg:text-base ml-[-12px]" style={{color: currentIndex > 1 ? '#D42978' : '#FFFFFF'}}>Payment</span>
        </div>
        {/* Fourth Div */}
        <div>
          <div className="flex justify-start items-center mb-2">
            <div className="w-[30px] md:w-[40px] h-[30px] md:h-[40px] rounded-full" style={thirdDivStyles}></div>
          </div>
          <span className="text-xs lg:text-base ml-[-12px]" style={{color: currentIndex > 1 ? '#D42978' : '#FFFFFF'}}>Payment</span>
        </div>
    </div>
  )
}

export default BookingStepsProgress