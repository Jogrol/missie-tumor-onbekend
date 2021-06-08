import React from "react"
import NewsPageItem from "./newsPageItem"
import LatestNewsList from "./latestNewsList"

const NewsPageSection = ({ posts }) => {
  return (
    <div className="w-full sm:grid sm:grid-cols-3">
      <div className="sm:col-span-2 divide-y-2 sm:pr-12">
        {posts.map(n => (
          <NewsPageItem key={n.id} {...n} />
        ))}
      </div>
      <div className="sm:col-span-">
        <LatestNewsList />
      </div>
    </div>
  )
}

export default NewsPageSection
