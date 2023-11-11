import React from 'react'

function AdditionalBenefits({benefit}) {
  return (
    <div className="w-full md:w-[48%] lg:w-[24%] border border-[rgba(255, 255, 255, 0.3)] px-6 py-4 gap-2 rounded-2xl">
        <h2 className="mb-2">{benefit.title}</h2>
        <p className="text-xs text-[#8E8E8E]">{benefit.content}</p>
    </div>
  )
}

export default AdditionalBenefits