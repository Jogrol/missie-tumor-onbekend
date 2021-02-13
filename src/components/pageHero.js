import React from "react"
import PropTypes from "prop-types"
import Img from "gatsby-image"
import scrollTo from "gatsby-plugin-smoothscroll"
import ScrollIcon from "../assets/ScrollIcon.svg"

const PageHero = ({ title, subtitle, description, image }) => {
  return (
    <div className="relative h-full sm:h-screen w-screen">
      <div className="absolute left-0 top-0 h-full sm:h-screen min-h-screen w-screen z-0">
        <Img
          fluid={image.localFile.childImageSharp.fluid}
          alt="header"
          className="h-full w-full"
        />
      </div>
      <div className="relative w-full min-h-screen sm:h-screen  pt-20 z-10 flex flex-wrap">
        <div className="w-full md:w-1/2 p-8 flex justify-center items-center">
          <div className="bg-gray-50 shadow-md p-8 rounded-xl w-full lg:w-2/3">
            <h1>{title}</h1>
            <p>{subtitle}</p>
            <p>{description}</p>
            <button
              onClick={() => scrollTo("#scroll-to-donate")}
              className="flex flex-row items-center uppercase px-4 py-3 rounded-lg border bg-yellow-500 hover:bg-yellow-300 hover:scale-150 focus:ring-2"
            >
              Doneer nu
              <ScrollIcon className="animate-bounce ml-4 w-4 h-4" />
            </button>
          </div>
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
}

export default PageHero
