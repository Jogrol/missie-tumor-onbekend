import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const NewsPageItem = ({ title, date, uri, content, featuredImage }) => {
  const image = getImage(featuredImage?.node?.localFile)

  return (
    <div className="h-54 py-8 w-full">
      {image && <GatsbyImage image={image} alt="header" className="w-full" />}

      <div>
        <span>{date}</span>
        <h5 className="">{title}</h5>
        <div
          className="h-36 overflow-hidden"
          dangerouslySetInnerHTML={{ __html: content }}
        />
        <Link className="w-full" to={uri}>
          Lees meer
        </Link>
      </div>
    </div>
  )
}

NewsPageItem.prototype = {
  title: PropTypes.string.isRequired,
  date: PropTypes.bool.isRequired,
  uri: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  featuredImage: PropTypes.object,
}

export default NewsPageItem
