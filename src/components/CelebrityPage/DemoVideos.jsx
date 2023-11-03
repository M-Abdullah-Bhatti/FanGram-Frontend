import React from 'react'
import VideoCard from './VideoCard'

function DemoVideos() {
  return (
    <div className="flex py-12 space-x-6">
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
    </div>
  )
}

export default DemoVideos