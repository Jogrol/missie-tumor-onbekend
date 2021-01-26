import React from "react"
import PropTypes from "prop-types"
import Img from "gatsby-image"

const PageHero = ({ title, subtitle, description, image }) => {
  console.log(image)
  return (
    <div>
      <h1>{title}</h1>
      <p>{subtitle}</p>
      <div>{description}</div>
      <img src={image.uri} />
    </div>
  )
}

PageHero.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.object,
}

export default PageHero
