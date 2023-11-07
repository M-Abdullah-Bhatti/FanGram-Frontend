import React from 'react'

function HorizontalCurl() {

    const pageWidth = window.innerWidth;
    const svgWidth = 41;
    const repeatCount = Math.ceil(pageWidth / svgWidth);

    const svgArray = new Array(repeatCount).fill(null);

  return (
    <div className="flex">
        {svgArray.map((_, index) => (
            <svg
            key={index}
            xmlns="http://www.w3.org/2000/svg"
            width={svgWidth}
            height="11" viewBox="0 0 41 11" fill="none"
            >
                <path
                    d="M30.0039 10.3226C27.0991 10.3226 25.6716 7.73801 24.4101 5.45285C23.1486 3.1677 22.1029 1.26078 20.0114 1.26078C17.92 1.26078 16.7912 3.29378 15.5961 5.45285C14.401 7.61193 12.9071 10.3226 10.0023 10.3226C7.0975 10.3226 5.66999 7.73801 4.42508 5.45285C3.18016 3.1677 2.10123 1.26078 0.00976562 1.26078V0C2.91457 0 4.34207 2.58458 5.60358 4.86973C6.8651 7.15488 7.91084 9.06181 10.0023 9.06181C12.0938 9.06181 13.2225 7.02880 14.4176 4.86973C15.6127 2.71066 17.1066 0 20.0114 0C22.9162 0 24.3271 2.58458 25.5887 4.86973C26.8502 7.15488 27.9125 9.06181 30.0039 9.06181C32.0954 9.06181 33.2241 7.02880 34.4193 4.86973C35.6144 2.71066 37.1083 0 40.0131 0V1.26078C37.9050 1.26078 36.7929 3.29378 35.5978 5.45285C34.4027 7.61193 32.9087 10.3226 30.0039 10.3226Z"
                    fill="#424242"
                />
            </svg>
        ))}
    </div>
  )
}

export default HorizontalCurl