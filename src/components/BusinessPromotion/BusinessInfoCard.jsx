import React from 'react'

function BusinessInfoCard({work}) {
  return (
    <div className="w-full flex flex-col items-center justify-center gap-3 md:w-[48%] lg:w-[32%] rounded-2xl bg-[#292929] mt-14 md:my-10">
        <div className="flex items-center justify-center rounded-full px-6 md:px-8 py-6 md:py-8 mt-[-50px]" style={{background: 'linear-gradient(100deg, #FDC15D -15.15%, #D1297A 25%, #AB2DA7 57.57%)'}}>
            <img src={work.icon} alt="" />
        </div>
        <h2 className="text-xl font-semibold">{work.title}</h2>
        <p className="text-[#8E8E8E] text-sm px-6 pb-4 text-center">{work.content}</p>
    </div>
  )
}

export default BusinessInfoCard