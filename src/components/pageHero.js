import React from "react"
import PropTypes from "prop-types"
import Img from "gatsby-image"

const PageHero = ({ title, subtitle, description, image }) => {
  return (
    <div className="w-full">
      <div className="h-1/4 w-full bg-transparent absolute left-0 bottom-0 z-10 bg-gradient-to-b from-transparent to-white"></div>
      <Img
        fluid={image.localFile.childImageSharp.fluid}
        alt="header"
        fadeIn
        className="h-screen bg-fixed bg-gradient-to-b from-current to-current"
      />
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
