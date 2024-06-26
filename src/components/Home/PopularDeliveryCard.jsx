import React from 'react'
import { Link } from 'react-router-dom'

function PopularDeliveryCard({celebrity}) {
  return (
    <Link to="/celebrity">
    <div className="w-full md:w-[50%] gap-0.5 lg:w-[30%] min-h-[300px] md:min-w-[310px] md:min-h-[400px] bg-[#292929] relative flex flex-col items-center justify-center rounded-lg shadow-lg px-2 md:px-4 py-3 md:px-8 space-y-2 mb-4 md:mb-0">
      <div className="absolute top-2 md:top-3 right-3 bg-[#FCAE4B] w-[25px] md:w-[40px] h-[25px] md:h-[40px] flex justify-center items-center rounded-full">
        <img 
          src='/images/heart.png'
          alt="heart"
          className='w-[60%]'
        />
      </div>
      <img
        src={celebrity.popImage}
        alt="celebrity"
        className="h-[100px] md:h-[120px] w-[100px] md:w-[120px] rounded-full mt-4 md:mt-10"
      />
      <h3 className="text-white text-base md:text-2xl font-bold text-center mx-2">{celebrity.name}</h3>
      <div className="flex flex-wrap mb-2">
        {celebrity.tags.map((tag) => (
          <span
            key={tag}
            className="font-satisfy text-gray-700 py-1 rounded-full text-xs md:text-sm mr-1 md:mr-2 mb-1 text-white"
          >
            #{tag}
          </span>
          ))}
      </div>
      <p className="text-xs md:text-base text-white font-semibold text-center">Starting from &#8377;{celebrity.price}</p>
      <button className="bg-white text-[#D42978] px-4 py-1 rounded-full text-sm md:text-lg font-medium">
        Book Now
      </button>
    </div>
    </Link>
  )
}

export default PopularDeliveryCard