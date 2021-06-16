import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import React from "react"
import PropTypes from "prop-types"

const StoryCardLink = ({ title, label, image, pagelink }) => {
  const storyLinkImage = getImage(image?.localFile)
  // TODO: fix alt for images
  return (
    <div className="bg-brown-100 rounded-md shadow-md flex h-40">
      <div className="w-1/3 h-full">
        <GatsbyImage
          objectPosition
          image={storyLinkImage}
          alt=""
          className="h-full w-full"
        />
      </div>
      <div className="flex flex-col justify-center p-4">
        <h3>{title}</h3>
        <Link to={pagelink.uri}>{label}</Link>
      </div>
    </div>
  )
}

StoryCardLink.propTypes = {
  title: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  image: PropTypes.object.isRequired,
  pagelink: PropTypes.object.isRequired,
}

export default StoryCardLink
