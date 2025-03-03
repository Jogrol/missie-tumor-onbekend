import React from "react"

interface YouTubeCarouselProps {
  videos: string[]
  names?: string[]
}

const YouTubeCarousel: React.FC<YouTubeCarouselProps> = ({ videos, names = [] }) => {
  // Generate unique IDs for carousel controls
  const carouselId = "youtube-carousel"

  return (
    <div className="mb-8">
      <div className="carousel w-full" id={carouselId}>
        {videos.map((videoId, index) => (
          <div 
            id={`${carouselId}-item-${index}`} 
            className="carousel-item relative w-full" 
            key={`video-${index}`}
          >
            <div className="w-full flex justify-center">
              <div className="w-full max-w-3xl aspect-w-16 aspect-h-9">
                <iframe
                  src={`https://www.youtube.com/embed/${videoId}`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="flex justify-center w-full py-2 gap-4 mt-6">
        {videos.map((_, index) => (
          <a 
            href={`#${carouselId}-item-${index}`} 
            className="btn btn-md" 
            key={`dot-${index}`}
          >
            {names[index] || `Video ${index + 1}`}
          </a>
        ))}
      </div>
    </div>
  )
}

export default YouTubeCarousel
