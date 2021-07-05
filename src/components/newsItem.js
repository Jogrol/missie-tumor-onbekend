import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import "./newsItem.css"

const NewsItem = ({ title, date, uri, content }) => {
  return (
    <div className="h-full flex flex-col">
      <h5 className="text-green-100">{title}</h5>
      <span>{date}</span>
      <div
        className="flex-grow overflow-hidden news-item mt-2"
        dangerouslySetInnerHTML={{ __html: content }}
      />
      <Link className="text-right m-4" to={uri}>
        Lees meer
      </Link>
    </div>
  )
}

NewsItem.prototype = {
  title: PropTypes.string.isRequired,
  date: PropTypes.bool.isRequired,
  slug: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
}

export default NewsItem
