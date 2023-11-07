import React from 'react'

function StepsProgress({currentIndex}) {

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
    <div className="flex justify-start items-center my-4">
        {/* First Div */}
        <div>
          <div className="flex justify-start items-center mb-2">
            <div className="bg-[#D42978] w-[40px] h-[40px] rounded-full" style={firstDivStyles}></div>
            <div className="w-[300px] h-[2px]" style={firstLineStyles}></div>
          </div>
          <span style={{color: currentIndex >= 0 ? '#D42978' : '#FFFFFF', marginLeft: '-8px' }}>Details</span>
        </div>
        {/* Second Div */}
        <div>
          <div className="flex justify-start items-center mb-2">
            <div className="w-[40px] h-[40px] rounded-full" style={secondDivStyles}></div>
            <div className="w-[300px] h-[2px]" style={secondLineStyles}></div>
          </div>
          <span style={{color: currentIndex >= 1 ? '#D42978' : '#FFFFFF', marginLeft: '-10px' }}>Confirm</span>
        </div>
        {/* Third Div */}
        <div>
          <div className="flex justify-start items-center mb-2">
            <div className="w-[40px] h-[40px] rounded-full" style={thirdDivStyles}></div>
          </div>
          <span style={{color: currentIndex > 1 ? '#D42978' : '#FFFFFF', marginLeft: '-12px' }}>Payment</span>
        </div>
    </div>
  )
}

export default StepsProgress