import React from "react"
import PropTypes from "prop-types"
import Img from "gatsby-image"
import scrollTo from "gatsby-plugin-smoothscroll"

const PageHero = ({ center, title, description, image, donationcta }) => {
  return (
    <div className="relative sm:h-screen w-screen">
      <div className="absolute left-0 top-0 h-screen w-screen z-0">
        {console.log(center, title, description, image, donationcta)}
        <Img
          fluid={image.localFile.childImageSharp.fluid}
          alt="header"
          className="h-full w-full"
        />
      </div>
      <div
        className={`relative h-screen container px-4 sm:max-w-screen-xl flex items-center ${
          center && "justify-center"
        }`}
      >
        <div className={`w-full sm:w-1/2 animate-fade-up delay-700`}>
          <h1 className="text-white font-black  text-5xl sm:text-6xl md:text-8xl">
            {title}
          </h1>
          {description && (
            <p className="text-white font-black text-xl">{description}</p>
          )}
          {donationcta && (
            <div className="pt-4 inline-block">
              <button
                onClick={() => scrollTo("#scroll-to-donate")}
                className="flex justify-center px-12 py-4 items-center rounded-full text-white font-semibold bg-yellow-500 hover:bg-yellow-300"
              >
                Doneer nu
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

PageHero.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.object.isRequired,
  donationcta: PropTypes.bool,
}

export default PageHero
