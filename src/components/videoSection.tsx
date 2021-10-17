import React from "react"
import { VideoSectionDataModel } from "../models/videoSectionData.model"

const VideoSection = ({
  introductiontext,
}: VideoSectionDataModel): JSX.Element => {
  return (
    <div className="sm:flex gap-4 justify-center items-center">
      <blockquote className="w-full text-2xl md:w-1/3 italic p-4">
        "{introductiontext}"
      </blockquote>
      <div className="w-full md:w-2/3 mt-4 md:mt-0">
        <div className="relative overflow-hidden pb-2/3 h-full">
          <iframe
            className="absolute h-full w-full object-cover"
            title="video"
            src="https://www.youtube.com/embed/KowXBc6nDnI"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; "
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  )
}

export default VideoSection
