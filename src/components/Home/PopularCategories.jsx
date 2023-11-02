import React, { useState } from 'react'
import PopularDelivery from './PopularDelivery'
import TringDhamaka from './TringDhamaka'
import { categories } from '../../Data'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

function PopularCategories() {

  const [selected, setSelected] = useState(0);
  const divStyle = {
    backgroundImage: `url('/images/background.png')`,
    backgroundSize: 'cover',
    backgroundPosition: 'top',
  };

  return (
    <div className='bg-black text-white px-16 py-12'>
      <h2 className='font-semibold text-2xl mb-2'>Popular Categories to explore</h2>
      <div className='py-4'>
        {
          categories.map((category, index) => (
            <span key={index} className="mr-4 cursor-pointer px-4 py-2 rounded-3xl" 
              style={{backgroundColor: index === selected ? '#D42978' : '#292929'}}
              onClick={()=> setSelected(index)}
            >
              {category}
            </span>
          ))
        }
      </div>
      <PopularDelivery />
      <TringDhamaka />

      <div className="flex bg-[#FCAE4B] bg-[`/images/background.png`] min-h-[275px] rounded-xl mt-6" style={divStyle}>
        <div className='w-1/2 p-6 space-y-4'>
          <h1 className='font-bold text-5xl'>Promote your business through <b className='text-black'>celebrity</b></h1>
          <p className='font-normal text-xl'>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries</p>
          <button className='bg-white text-[#D42978] text-medium px-4 py-2 rounded-3xl'>Fill The Form</button>
        </div>
        <div className='w-1/2'>
        </div>
      </div>
    </div>
  )
}

export default PopularCategories