import React from "react"
import PropTypes from "prop-types"
import Img from "gatsby-image"

const PageHeroSmall = ({ title, image }) => {
  return (
    <div className="relative h-64 w-full">
      <div className="absolute left-0 top-0 h-64 w-full z-0">
        <Img
          fluid={image.localFile.childImageSharp.fluid}
          alt="header"
          className="h-full w-full"
        />
      </div>
      <div className="absolute pt-16 w-full h-full flex justify-center items-center">
        <h1 className="text-white font-black text-5xl sm:text-6xl md:text-8xl">
          {title}
        </h1>
      </div>
    </div>
  )
}

PageHeroSmall.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.object.isRequired,
}

export default PageHeroSmall
