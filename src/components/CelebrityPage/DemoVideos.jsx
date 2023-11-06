import React, {useRef} from 'react'
import VideoCard from './VideoCard'
import RandomCard from './RandomCard'
import { celebrityDemoData } from '../../Data';

function DemoVideos() {

  const scrollContainerRef = useRef(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollLeft -= 300;
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollLeft += 300;
    }
  };

  return (
    <div className="flex w-full py-10 space-x-6">
      <div className="flex items-center">
        <button onClick={scrollLeft}
          className="w-[50px] h-[50px] border border-[#D42978] flex items-center justify-center rounded-full transition duration-300"
        >
          <img src="/images/back.svg" alt="back" />
        </button>
      </div>

      <div
        className="overflow-x-scroll no-scrollbar w-full"
        ref={scrollContainerRef}
        style={{ scrollBehavior: "smooth" }}
      >
        <div className="flex space-x-4 py-4">
          {celebrityDemoData.map((card, index) => (
            <React.Fragment key={index}>
              <VideoCard celebrity={card} />
              {(index + 1) % 2 === 0 && <RandomCard />}
            </React.Fragment>
          ))}
        </div>
      </div>

      <div className="flex items-center">
        <button onClick={scrollRight}
          className="w-[50px] h-[50px] bg-[#D42978] flex items-center justify-center rounded-full transition duration-300"
        >
          <img src="/images/forward.svg" alt="forward" />
        </button>
      </div>

    </div>
  )
}

export default DemoVideos