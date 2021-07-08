import React from "react"
import PropTypes from "prop-types"
import scrollTo from "gatsby-plugin-smoothscroll"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const PageHero = ({ center, title, description, image, donationcta }) => {
  const pageHeroImage = getImage(image?.localFile)

  return (
    <div className="relative h-screen sm:h-lg w-screen">
      <div className="absolute h-lg w-screen z-0">
        <GatsbyImage
          image={pageHeroImage}
          alt="header"
          className="h-screen sm:h-lg w-full"
        />
      </div>
      <div
        className="relative h-screen sm:h-lg container px-4 sm:max-w-screen-xl flex items-center"
      >
        <div className={`w-full sm:w-2/3 smanimate-fade-up delay-700`}>
          <h1 className="text-white italic font-black text-4xl sm:text-5xl md:text-7xl text-left">
            {title}
          </h1>
          {description && (
            <p className="text-white font-black font-bold text-xl">{description}</p>
          )}
          {donationcta && (
            <div className="pt-4 inline-block">
              <button
                onClick={() => scrollTo("#scroll-to-donate")}
                className="flex justify-center px-12 py-4 items-center rounded-full text-white font-semibold bg-yellow-500 hover:bg-brown-100 hover:text-brown-200 hover:no-underline"
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
