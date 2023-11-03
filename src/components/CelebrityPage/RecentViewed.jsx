import React, {useRef} from 'react'
import { cartoonData } from '../../Data';
import CelebrityPageCard from './CelebrityPageCard';

function RecentViewed() {
    
    const scrollContainerRef = useRef(null);

    const scrollLeft = () => {
        if (scrollContainerRef.current) {
        scrollContainerRef.current.scrollLeft -= 360;
        }
    };

    const scrollRight = () => {
        if (scrollContainerRef.current) {
        scrollContainerRef.current.scrollLeft += 360;
        }
    };

  return (
    <div className="w-full bg-black text-white py-12">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-4xl font-semibold">Recent Viewed</h2>
          <div className="flex items-center space-x-4">
            <button onClick={scrollLeft}
              className="w-[50px] h-[50px] text-lg border border-[#D42978] flex items-center justify-center rounded-full transition duration-300"
            >
              <img src="/images/back.svg" alt="back" />
            </button>
            <button onClick={scrollRight}
              className="w-[50px] h-[50px] bg-[#D42978] flex items-center justify-center rounded-full transition duration-300"
            >
              <img src="/images/forward.svg" alt="forward" />
            </button>
          </div>
        </div>
        <div
            className="overflow-x-scroll no-scrollbar"
            ref={scrollContainerRef}
            style={{ scrollBehavior: "smooth" }}
        >
            <div className="flex space-x-4 py-4">
            {cartoonData.map((card, index) => (
                <CelebrityPageCard celebrity={card} key={index} />
            ))}
            </div>
        </div>
    </div>
  )
}

export default RecentViewed