import React from "react"
import PropTypes from "prop-types"
import Img from "gatsby-image"
import StatsInformation from "../components/statsInformation"

const PageHero = ({ title, subtitle, description, image }) => {
  return (
    <div className="relative">
      <div className="absolute left-0 top-0 h-3/4 w-full z-0">
        <Img
          fluid={image.localFile.childImageSharp.fluid}
          alt="header"
          className="h-full w-full"
        />
      </div>
      <div className="relative w-full h-full pt-20 z-10">
        <StatsInformation />
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
