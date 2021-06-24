import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import React from "react"
import PropTypes from "prop-types"

const StoryCardLink = ({ title, label, image, pagelink }) => {
  const storyLinkImage = getImage(image?.localFile)
  // TODO: fix alt for images
  return (
    <div className="bg-brown-100 rounded-md shadow-lg">
      <div className="flex h-40">
        <GatsbyImage
          object="cover"
          image={storyLinkImage}
          className="w-1/3 h-full"
        />
        <div className="w-2/3 flex flex-col p-4">
          <h3>{title}</h3>
          <Link to={pagelink.uri}>{label}</Link>
        </div>
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
