import React, {useState} from 'react'

function VideoCard() {

    const [openVideoModal, setOpenVideoModal] = useState(false);
    const handleOpen = () => setOpenVideoModal(true);

  return (
    <div className=" w-[250px] relative z-50 ">
        <img
            src="/images/sunny__vid.png"
            alt="logo"
            className="w-full h-full rounded-xl"
        />
        <div
            onClick={handleOpen}
            className="grid place-items-center absolute z-50 left-[37%] top-[43%] w-[70px] h-[70px] rounded-full cursor-pointer"
            style={{
                fill: "rgba(0, 0, 0, 0.90)",
                backdropFilter: "blur(1.923076868057251px)",
            }}
        >
            <img src="/images/feedbackplay.png" alt="logo" />
        </div>
        <div className="absolute bottom-0 left-0 right-0 p-2 space-y-1">
            <button className='bg-white text-[#D42978] text-sm px-4 py-2 rounded-3xl'>Motivation</button>
            <p>Absolutely Mermsimerised</p>
        </div>
    </div>
  )
}

export default VideoCard