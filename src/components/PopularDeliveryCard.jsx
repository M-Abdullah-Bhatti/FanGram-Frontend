import React from 'react'

function PopularDeliveryCard({celebrity}) {
  return (
    <div className="h-[450px] bg-[#292929] relative rounded-lg shadow-lg"
        style={{minWidth: '325px', overflow: 'hidden'}}
    >
      <img
        src={celebrity.popImage}
        alt="celebrity"
        className=""
      />
      <div className="absolute top-4 right-4 bg-[#FCAE4B] w-[40px] h-[40px] flex justify-center items-center rounded-full">
        <img 
            src='/images/heart.png'
            alt="heart"
        />
      </div>
      <div className="p-4">
        <h3 className="text-white text-4xl font-bold text-4xl mb-2 mr-8" style={{lineHeight: '52.5px'}}>{celebrity.name}</h3>
        <div className="flex flex-wrap mb-2">
          {celebrity.tags.map((tag) => (
            <span
              key={tag}
              className="text-gray-700 py-1 px-2 rounded-full text-xl mr-2 mb-1 text-white"
              style={{fontFamily: 'Satisfy'}}
            >
              #{tag}
            </span>
          ))}
        </div>
        <div className="flex justify-between items-center">
          <p className="text-white font-semibold">Starting from &#8377;{celebrity.price}</p>
          <button className="bg-white text-[#D42978] px-4 py-1 rounded-full text-lg font-medium">
            Book Now
          </button>
        </div>
      </div>
    </div>
  )
}

export default PopularDeliveryCard