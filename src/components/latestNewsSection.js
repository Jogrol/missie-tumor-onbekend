import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import NewsItem from "./newsItem"

const LatestNewsSection = () => {
  const data = useStaticQuery(graphql`
    {
      allWpPost(sort: { fields: date, order: DESC }, limit: 3) {
        edges {
          node {
            id
            title
            date(fromNow: false, formatString: "DD MMMM, YYYY", locale: "NL")
            slug
            content
          }
        }
      }
    }
  `)

  return (
    <>
      <h2>Laatste nieuws</h2>
      <div className="grid sm:grid-cols-3 gap-8">
        {data.allWpPost.edges.map(({ node }) => (
          <div key={node.id} className="h-56">
            <NewsItem {...node} />
          </div>
        ))}
      </div>
    </>
  )
}

export default LatestNewsSection