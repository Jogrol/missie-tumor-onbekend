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
      <div className="w-full px-4 sm-px-0 md:w-2/3">
      <div className="aspect-w-16 aspect-h-9">
        <iframe
          src="https://www.youtube.com/embed/KowXBc6nDnI"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      </div>
    </div>
  )
}

export default VideoSection
