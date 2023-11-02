import React, {useRef} from 'react'
import FeaturedCelebrityCard from './FeaturedCelebrityCard';
import { featuredCelebrityData } from '../Data';

function PopularDelivery() {

    const scrollContainerRef = useRef(null);

    const scrollLeft = () => {
        if (scrollContainerRef.current) {
        scrollContainerRef.current.scrollLeft -= 350;
        }
    };

    const scrollRight = () => {
        if (scrollContainerRef.current) {
        scrollContainerRef.current.scrollLeft += 340;
        }
    };


  return (
    <div className="w-full bg-black text-white">
        <div className="flex items-center justify-between py-4 px-16">
            <h2 className="text-4xl font-semibold">Next Day Delivery</h2>
            <div className="flex items-center space-x-4">
                <button
                    onClick={scrollLeft}
                    className="w-[50px] h-[50px] text-lg border border-[#D42978] text-[#D42978] rounded-full transition duration-300"
                    style={{fontSize: '18px'}}
                >
                    &#8249;
                </button>
                <button
                    onClick={scrollRight}
                    className="w-[50px] h-[50px] bg-[#D42978] rounded-full transition duration-300"
                >
                     &#8250;
                </button>
            </div>
        </div>
      <div className="overflow-x-scroll" ref={scrollContainerRef} style={{scrollBehavior: 'smooth'}}>
        <div className="flex space-x-4 p-4">
          {featuredCelebrityData.map((card) => (
            <FeaturedCelebrityCard celebrity={card} />
          ))}
        </div>
      </div>

      {/* <div className="overflow-x-scroll mt-16" ref={scrollContainerRef}
        style={{
          scrollBehavior: 'smooth'
        }}
      >
        <div className="flex space-x-4 p-4">
          {cards.map((card) => (
            <FeaturedCelebrityCard />
          ))}
        </div>
      </div> */}
    </div>
  )
}

export default PopularDelivery