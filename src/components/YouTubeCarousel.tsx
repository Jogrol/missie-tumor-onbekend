import React, { useEffect, useRef, useState } from "react"

interface YouTubeCarouselProps {
  videos: string[]
  names?: string[]
}

declare global {
  interface Window {
    YT: any;
    onYouTubeIframeAPIReady: () => void;
  }
}

const YouTubeCarousel: React.FC<YouTubeCarouselProps> = ({ videos, names = [] }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const playerRefs = useRef<{[key: string]: any}>({})

  useEffect(() => {
    // Load YouTube API
    if (!window.YT) {
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      const firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag);

      window.onYouTubeIframeAPIReady = initializePlayers;
    } else {
      initializePlayers();
    }

    return () => {
      // Clean up players on unmount
      Object.values(playerRefs.current).forEach((player: any) => {
        try {
          player.destroy();
        } catch (e) {
          console.error('Error destroying YouTube player:', e);
        }
      });
    };
  }, [videos]);

  const initializePlayers = () => {
    videos.forEach((videoId, index) => {
      const iframeId = `youtube-iframe-${index}`;
      setTimeout(() => {
        try {
          const iframe = document.getElementById(iframeId);
          if (iframe && window.YT && window.YT.Player) {
            playerRefs.current[videoId] = new window.YT.Player(iframeId, {
              events: {
                onReady: () => console.log(`Player ${index} ready`),
              }
            });
          }
        } catch (e) {
          console.error('Error initializing YouTube player:', e);
        }
      }, 500);
    });
  };

  const handleNavigation = (e: React.MouseEvent<HTMLButtonElement>, targetIndex: number) => {
    e.preventDefault();
    
    // Pause all videos
    Object.values(playerRefs.current).forEach((player: any) => {
      try {
        if (player && typeof player.pauseVideo === 'function') {
          player.pauseVideo();
        }
      } catch (e) {
        console.error('Error pausing video:', e);
      }
    });
    
    // Update active index
    setActiveIndex(targetIndex);
  };

  return (
    <div className="mb-8">
      {/* Video display area */}
      <div className="w-full flex justify-center">
        <div className="w-full max-w-3xl aspect-w-16 aspect-h-9">
          <iframe
            id={`youtube-iframe-${activeIndex}`}
            src={`https://www.youtube.com/embed/${videos[activeIndex]}?enablejsapi=1`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
      
      {/* Navigation buttons */}
      <div className="flex justify-center w-full py-2 gap-4 mt-6">
        {videos.map((_, index) => (
          <button 
            className={`btn btn-md ${activeIndex === index ? 'btn-primary' : ''}`} 
            key={`dot-${index}`}
            onClick={(e) => handleNavigation(e, index)}
          >
            {names[index] || `Video ${index + 1}`}
          </button>
        ))}
      </div>
    </div>
  )
}

export default YouTubeCarousel
