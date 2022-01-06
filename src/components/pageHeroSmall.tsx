import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const PageHeroSmall = ({ pageHeroSmallProps }): JSX.Element => {
  const pageHeroImage = getImage(pageHeroSmallProps.heroImage.gatsbyImageData)

  return (
    <div className="relative w-full h-64">
      <div className="absolute top-0 left-0 z-0 w-full h-64">
        <GatsbyImage
          image={pageHeroImage}
          alt="header"
          className="w-full h-full"
        />
      </div>
      <div className="absolute flex items-center justify-center w-full h-64 px-4 pt-28">
        <h1 className="text-3xl italic text-white sm:text-4xl md:text-5xl">
          {pageHeroSmallProps.title}
        </h1>
      </div>
    </div>
  )
}

export default PageHeroSmall
