import React from 'react'
import { Link } from 'react-router-dom'

function CelebrityPageCard({celebrity}) {
  return (
    <div className="w-full h-[450px] bg-cover bg-center bg-no-repeat relative rounded-lg shadow-lg cursor-pointer"
        style={{minWidth: '325px', overflow: 'hidden'}}
    >
    <Link to="/celebrity">
      <img
        src={celebrity.image}
        alt="celebrity"
        className="object-fit w-full h-full"
      />
      <div className="absolute bottom-0 left-0 right-0 p-4"
        style={{background: 'linear-gradient(183deg, rgba(169, 45, 169, 0.00) 37.18%, #A82DAA 110.27%)'}}
      >
        <h3 className="text-white text-2xl md:text-4xl font-bold mb-2">{celebrity.title}</h3>
        <div className="flex flex-wrap mb-2">
          {celebrity.tags.map((tag) => (
            <span
              key={tag}
              className="font-satisfy text-gray-700 py-1 px-1 rounded-full text-base md:text-xl mr-2 mb-1 text-white"
            >
              #{tag}
            </span>
          ))}
        </div>
        <button 
            className='rounded-3xl text-sm md:text-base px-4 py-2'
            style={{background: 'rgba(0, 0, 0, 0.60)', boxShadow: '0px 4px 7px 0px rgba(0, 0, 0, 0.15)'}}
        >
            {celebrity.price}
        </button>
      </div>
    </Link>
    </div>
  )
}

export default CelebrityPageCard