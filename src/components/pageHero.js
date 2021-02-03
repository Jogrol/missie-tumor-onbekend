import React from "react"
import PropTypes from "prop-types"
import Img from "gatsby-image"

const PageHero = ({ title, subtitle, description, image }) => {
  return (
    <div className="w-full">
      <Img
        fluid={image.localFile.childImageSharp.fluid}
        alt="header"
        fadeIn
        className="h-screen bg-fixed"
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
