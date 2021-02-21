import React from "react"

const VideoSection = () => {
  return (
    <div className="sm:flex gap-4 justify-center items-center">
      <blockquote className="w-full text-2xl sm:w-1/3 sm:text-6xl italic">
        "Lorem ipsums upsus baram bo"
      </blockquote>
      <div className="w-full sm:w-2/3 mt-4 sm:mt-0">
        <div className="relative overflow-hidden pb-2/3 h-full">
          <iframe
            className="absolute h-full w-full object-cover"
            title="video"
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
