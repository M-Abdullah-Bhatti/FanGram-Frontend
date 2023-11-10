import React from 'react'
import { Link } from 'react-router-dom'

function FeaturedCelebrityCard({celebrity}) {
  return (
    <div className="w-full md:min-w-[325px] md:w-1/2 lg:w-1/3 h-96 md:h-[425px] bg-cover bg-center bg-no-repeat relative rounded-lg shadow-lg overflow-hidden">
      <Link to="/celebrity">
        <img
          src={celebrity.featuredImage}
          alt="celebrity"
          className="object-fit w-full h-full"
        />
        <div className="absolute top-4 right-4 bg-[#FCAE4B] w-[40px] h-[40px] flex justify-center items-center rounded-full">
          <img 
              src='/images/heart.png'
              alt="heart"
          />
        </div>
        <div className="absolute bottom-0 left-0 right-0 p-4"
          style={{background: 'linear-gradient(182.63deg, rgba(169, 45, 169, 0) 37.18%, #A82DAA 110.27%)'}}
        >
          <h3 className="text-white text-2xl md:text-4xl font-bold mb-2 mr-8 md:leading-[52.5px]">{celebrity.name}</h3>
          <div className="flex flex-wrap mb-2">
            {celebrity.tags.map((tag) => (
              <span
                key={tag}
                className="text-gray-700 py-1 px-1 md:px-2 rounded-full text-sm md:text-xl mr-1 md:mr-2 mb-1 text-white"
                style={{fontFamily: 'Satisfy'}}
              >
                #{tag}
              </span>
            ))}
          </div>
          <div className="flex justify-between items-center">
            <p className="text-white font-semibold text-sm md:text-base">Starting from &#8377;{celebrity.price}</p>
            <button className="bg-white text-[#D42978] px-4 py-1 rounded-full text-base md:text-lg font-medium">
              Book Now
            </button>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default FeaturedCelebrityCard