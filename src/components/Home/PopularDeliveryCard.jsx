import React from 'react'

function PopularDeliveryCard({celebrity}) {
  return (
    <div className="h-[350px] bg-[#292929] relative flex flex-col items-center justify-center rounded-lg shadow-lg px-8 space-y-2" style={{minWidth: '250px', overflow: 'hidden'}}>
      <div className="absolute top-3 right-3 bg-[#FCAE4B] w-[40px] h-[40px] flex justify-center items-center rounded-full">
        <img 
            src='/images/heart.png'
            alt="heart"
        />
      </div>
      <img
        src={celebrity.popImage}
        alt="celebrity"
        className="h-[120px] w-[120px] rounded-full mt-10"
      />
      <h3 className="text-white text-2xl font-bold text-center mx-2">{celebrity.name}</h3>
      <div className="flex flex-wrap mb-2">
        {celebrity.tags.map((tag) => (
          <span
            key={tag}
            className="text-gray-700 py-1 px-2 rounded-full text-sm mr-2 mb-1 text-white"
            style={{fontFamily: 'Satisfy'}}
          >
            #{tag}
          </span>
          ))}
      </div>
      <p className="text-white font-semibold">Starting from &#8377;{celebrity.price}</p>
      <button className="bg-white text-[#D42978] px-4 py-1 rounded-full text-lg font-medium">
        Book Now
      </button>
    </div>
  )
}

export default PopularDeliveryCard