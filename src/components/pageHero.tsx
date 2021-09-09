import React from "react"
import scrollTo from "gatsby-plugin-smoothscroll"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { HeroDataModel } from "../models/heroData.model"

const PageHero = ({ title, description, image }: HeroDataModel) => {
  const pageHeroImage = getImage(image?.localFile)

  return (
    <div className="hero h-screen sm:h-lg bg-base-200">
      <GatsbyImage
        image={pageHeroImage}
        alt="header"
        className="hero-overlay h-full w-full"
      />
      <div className="flex-col hero-content z-20 sm:w-1/2">
        <div>
          <h1 className="mb-5 text-3xl sm:text-5xl font-bold text-white">
            {title}
          </h1>
          <p className="mb-5 text-white">{description}</p>
          <div className="flex">
            <button
              className="btn btn-primary"
              onClick={() => scrollTo("#scroll-to-donate")}
            >
              Doneer nu
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PageHero
