import React, { useState } from "react"

interface YouTubeCarouselProps {
  videos: string[]
  names?: string[]
}

const YouTubeCarousel: React.FC<YouTubeCarouselProps> = ({
  videos,
  names = [],
}) => {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <div className="mb-8">
      <div className="w-full flex justify-center">
        <div className="w-full max-w-3xl aspect-w-16 aspect-h-9">
          <iframe
            key={videos[activeIndex]}
            src={`https://www.youtube.com/embed/${videos[activeIndex]}`}
            title={names[activeIndex] || `Video ${activeIndex + 1}`}
            referrerPolicy="strict-origin-when-cross-origin"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>

      <div className="flex justify-center w-full py-2 gap-4 mt-6">
        {videos.map((videoId, index) => (
          <button
            className={`btn btn-md ${activeIndex === index ? "btn-primary" : ""}`}
            key={videoId}
            onClick={() => setActiveIndex(index)}
          >
            {names[index] || `Video ${index + 1}`}
          </button>
        ))}
      </div>
    </div>
  )
}

export default YouTubeCarousel
