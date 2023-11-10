import React from 'react'
import WorkCard from './WorkCard'

const work = [1, 2, 3, 4, 5, 6];

function LatestWork() {
  return (
    <div className="mt-6">
        <h2 className="font-semibold text-[45px]">0ur Latest Work</h2>
        <div className="flex flex-wrap gap-4">
            {
                work.map((index)=> (
                    <WorkCard key={index} />
                ))
            }
        </div>
    </div>
  )
}

export default LatestWork