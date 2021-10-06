import React, { useState } from "react"
import scrollTo from "gatsby-plugin-smoothscroll"
import BackgroundVideo from "../assets/videos/tumorfonds.mp4"
import VolumeIcon from "../assets/volumeIcon.svg"
import MuteIcon from "../assets/muteIcon.svg"

const PageHeroWithVideo = () => {
  const [isMuted, setIsmuted] = useState<boolean>(true)

  return (
    <div className="hero h-screen bg-base-200">
      <video
        playsInline
        autoPlay
        muted={isMuted}
        className="hero-overlay object-cover h-full w-full"
      >
        <source src={BackgroundVideo} type="video/mp4" />
      </video>
      <div className="relative hero-content h-5/6 w-full z-20">
        <div className="absolute top-12 right-12">
          <button onClick={() => setIsmuted(!isMuted)}>
            {isMuted ? (
              <VolumeIcon className="h-8 w-8 animate-pulse" />
            ) : (
              <MuteIcon className="h-8 w-8 animate-pulse" />
            )}
          </button>
        </div>

        <div className="flex flex-col items-center">
          <div className="relative">
            <p className="absolute text-white text-2xl sm:text-5xl text-center leading-normal text-center p-4 animate-in">
              Elk jaar worden 1500 Nederlanders slachtoffer van een tumor die
              nooit wordt gevonden.
            </p>
            <p className="text-white text-2xl sm:text-5xl text-center leading-normal opacity-0 p-4 animate-out">
              Steun ons in de strijd tegen PTO, <br /> Primaire Tumor Onbekend
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 flex flex-col sm:flex-row sm:justify-center w-full px-4 pb-4 sm:pb-24 gap-4 sm:gap-16">
          <button
            className="btn btn-primary w-full sm:w-96"
            onClick={() => scrollTo("#scroll-to-donate")}
          >
            Doneer nu
          </button>
          <a className="btn btn-secondary w-full sm:w-96" href="#">
            Deel nu jouw verhaal met PTO
          </a>
        </div>
      </div>
    </div>
  )
}

export default PageHeroWithVideo
