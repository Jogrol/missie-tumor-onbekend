import React from "react"
import scrollTo from "gatsby-plugin-smoothscroll"
import MtoLogoWhiteIcon from "../assets/MtoLogoWhiteIcon.svg"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { HeroDataModel } from "../models/heroData.model"

const PageHero = ({ title, description, image }: HeroDataModel) => {
  const pageHeroImage = getImage(image?.localFile)

  return (
    <div className="hero h-screen bg-base-200">
      <GatsbyImage
        image={pageHeroImage}
        alt="header"
        className="hero-overlay object-cover h-full w-full"
      />
      <div className="relative px-4 pt-6 sm:pb-4 h-5/6 w-full z-20">
        <div className="h-full pb-4 flex flex-col justify-center">
          <div className="h-2/3 flex flex-grow justify-center items-center">
            <MtoLogoWhiteIcon className="w-full md:w-2/3 object-fill" />
          </div>
          <div className="flex w-full flex-col sm:flex-row flex-wrap sm:justify-center md:flex-row gap-4 sm:gap-8">
            <button
              className="btn sm:btn-lg btn-primary w-full sm:w-96"
              onClick={() => scrollTo("#scroll-to-donate")}
            >
              Doneer nu
            </button>
            <a className="btn sm:btn-lg btn-secondary w-full sm:w-96" href="#">
              Deel nu jouw verhaal met PTO
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PageHero
