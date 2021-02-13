import React from "react"

const VideoSection = () => {
  return (
    <div className="container max-w-screen-lg flex justify-center">
      <div className="w-full sm:w-2/3">
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
