import React, { useState } from "react"
import scrollTo from "gatsby-plugin-smoothscroll"
import BackgroundVideo from "../assets/videos/tumorfonds.webm"

const PageHeroWithVideo = () => {
  const [isMuted, setIsmuted] = useState<boolean>(true)

  const handleDonateNowClick = (): void => {
    scrollTo("#scroll-to-donate")
    setIsmuted(true)
  }

  return (
    <div className="hero h-screen bg-base-200">
      <video
        playsInline
        autoPlay
        muted={isMuted}
        className="hero-overlay object-cover h-screen w-full"
      >
        <source src={BackgroundVideo} type="video/mp4" />
      </video>
      <div className="relative px-4 pt-6 sm:pb- h-5/6 w-full z-20">
        <div className="h-full container flex flex-col justify-between py-2 sm:py-10">
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
        <div className="flex w-full flex-col sm:flex-row flex-wrap sm:justify-center md:flex-row gap-4 sm:gap-6">
          <button
            className="btn sm:btn-lg btn-primary w-full sm:w-96"
            onClick={handleDonateNowClick}
          >
            Doneer nu
          </button>
          <a className="btn sm:btn-lg btn-secondary w-full sm:w-96" href="#">
            Deel nu jouw verhaal met PTO
          </a>
        </div>
      </div>
    </div>
  )
}

export default PageHeroWithVideo
