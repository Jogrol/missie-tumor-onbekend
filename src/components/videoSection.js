import React from "react"

const VideoSection = () => {
  return (
    <div className="w-full flex justify-center ">
      <iframe
        title="video"
        width="100%"
        height="100%"
        src="https://www.youtube.com/embed/KowXBc6nDnI"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  )
}

export default VideoSection
