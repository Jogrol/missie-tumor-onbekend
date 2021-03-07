import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import NewsItem from "./newsItem"

const LatestNewsSection = () => {
  const data = useStaticQuery(graphql`
    {
      allWpPost(sort: { fields: date, order: DESC }) {
        edges {
          node {
            id
            title
            date(fromNow: false)
            slug
            content
          }
        }
      }
    }
  `)

  //   TODO: Check if this can be done with graphql, limit ?

  const latestArtciles = data.allWpPost.edges.slice(0, 3)

  return (
    <div className="">
      <h2>Laatste nieuws</h2>
      <div className="grid sm:grid-cols-3 gap-8">
        {latestArtciles.map(article => (
          <div key={article.node.id} className="h-56">
            <NewsItem {...article.node} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default LatestNewsSection
