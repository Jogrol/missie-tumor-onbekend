import React from "react"

const VideoSection = ({ videoSectionProps }): JSX.Element => {
  return (
    <div className="items-center justify-center gap-4 sm:flex">
      <blockquote className="w-full p-4 text-2xl italic md:w-1/3">
        "{videoSectionProps.description.description}"
      </blockquote>
      <div className="w-full px-4 sm-px-0 md:w-2/3">
        <div className="aspect-w-16 aspect-h-9">
          <iframe
            src={videoSectionProps.videoUrl}
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
