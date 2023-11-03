import React from 'react'

function CelebrityPageCard({celebrity}) {
  return (
    <div className="h-[450px] bg-cover bg-center bg-no-repeat relative rounded-lg shadow-lg"
        style={{minWidth: '325px', overflow: 'hidden'}}
    >
      <img
        src={celebrity.image}
        alt="celebrity"
        className="object-cover w-full h-full"
      />
      <div className="absolute bottom-0 left-0 right-0 p-4"
        style={{background: 'linear-gradient(183deg, rgba(169, 45, 169, 0.00) 37.18%, #A82DAA 110.27%)'}}
      >
        <h3 className="text-white text-4xl font-bold text-4xl mb-2">{celebrity.title}</h3>
        <div className="flex flex-wrap mb-2">
          {celebrity.tags.map((tag) => (
            <span
              key={tag}
              className="text-gray-700 py-1 px-1 rounded-full text-xl mr-2 mb-1 text-white"
              style={{fontFamily: 'Satisfy'}}
            >
              #{tag}
            </span>
          ))}
        </div>
        <button 
            className='rounded-3xl px-4 py-2'
            style={{background: 'rgba(0, 0, 0, 0.60)', boxShadow: '0px 4px 7px 0px rgba(0, 0, 0, 0.15)'}}
        >
            {celebrity.price}
        </button>
      </div>
    </div>
  )
}

export default CelebrityPageCard