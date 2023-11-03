import { useState, useEffect } from "react";
import ReactPlayer from "react-player";

const VideoPlayerModal = ({ handleClose, url }) => {
  const [trailer, setTrailer] = useState("");

  const [genre, setGenre] = useState([]);
  const [muted, setMuted] = useState(true);

  return (
    // md:inset-x-auto
    <div className="fixed top-0 left-0 right-0 z-[1000]  w-full px-4 overflow-x-hidden overflow-y-auto  h-full bg-[rgb(0,0,0,0.75)]">
      <div className="relative w-full ">
        <div className="flex items-start justify-between mt-4">
          <button
            onClick={handleClose}
            type="button"
            className="text-gray-400 bg-transparent hover:outline-none  rounded-lg text-sm p-1.5 ml-auto inline-flex items-center "
          >
            <svg
              aria-hidden="true"
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <span className="sr-only">Close modal</span>
          </button>
        </div>
      </div>
      <div className="flex justify-center py-1 h-[90vh] w-full">
        <ReactPlayer
          url={url}
          width="90%"
          height="95%"
          playing
          // muted={muted}
        />
      </div>
    </div>
  );
};

export default VideoPlayerModal;
