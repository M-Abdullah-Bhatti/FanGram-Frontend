import React from 'react'
import { discoverOptions } from '../../Data'

function DiscoverMore() {
  return (
    <div className="py-10">
        <h1 className="text-2xl font-semibold mb-4">Discover More:</h1>
        <div className="flex flex-wrap">
          {discoverOptions.map((tag, index) => (
            <span key={index} className="text-base font-normal px-4 py-2 bg-[#D42978] rounded-3xl my-2 mr-3 cursor-pointer">
              {tag}
            </span>
          ))}
        </div>
    </div>
  )
}

export default DiscoverMore