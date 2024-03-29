import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { HeroSmallDataModel } from "../models/heroSmallData.model"

const PageHeroSmall = ({ title, image }: HeroSmallDataModel): JSX.Element => {
  const pageHeroImage = getImage(image?.localFile)

  return (
    <div className="relative h-64 w-full">
      <div className="absolute left-0 top-0 h-64 w-full z-0">
        <GatsbyImage
          image={pageHeroImage}
          alt="header"
          className="h-full w-full"
        />
      </div>
      <div className="absolute pt-28 w-full h-64 flex justify-center items-center px-4">
        <h1 className="text-white italic text-3xl sm:text-4xl md:text-5xl">
          {title}
        </h1>
      </div>
    </div>
  )
}

export default PageHeroSmall
