import React from "react"
import PropTypes from "prop-types"
import scrollTo from "gatsby-plugin-smoothscroll"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const PageHero = ({ title, description, image, donationcta }) => {
  const pageHeroImage = getImage(image?.localFile)

  return (
    <div class="hero h-lg bg-base-200"> 
      <GatsbyImage
        image={pageHeroImage}
        alt="header"
        className="hero-overlay bg-opacity-60 h-full w-full"
      />
       <div class="hero-overlay bg-opacity-30 z-10"></div> 
      <div class="flex-col hero-content sm:w-1/2 z-20">
        <div>
          <h1 class="mb-5 text-5xl font-bold text-white">{title}</h1>
          <p class="mb-5 text-white">{description}</p>
          <button
            class="btn btn-primary"
            onClick={() => scrollTo("#scroll-to-donate")}
          >
            Doneer nu
          </button>
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
