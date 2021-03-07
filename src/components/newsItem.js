import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

const NewsItem = ({ title, date, slug, content }) => {
  return (
    <div className="h-full flex flex-col">
      <span>{date}</span>
      <h5>{title}</h5>
      <div
        className="flex-grow overflow-hidden"
        dangerouslySetInnerHTML={{ __html: content }}
      />
      <Link className="text-right m-4" to={slug}>
        Lees meer
      </Link>
    </div>
  )
}

NewsItem.prototype = {
  title: PropTypes.node.isRequired,
  date: PropTypes.bool.isRequired,
  slug: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
}

export default NewsItem
