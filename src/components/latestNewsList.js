import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Link } from "gatsby"

const LatestNewsList = () => {
  const data = useStaticQuery(graphql`
    {
      allWpPost(sort: { fields: date, order: DESC }) {
        edges {
          node {
            uri
            id
            title
            date(fromNow: false, formatString: "DD MMMM, YYYY", locale: "NL")
            slug
          }
        }
      }
    }
  `)

  return (
    <div className="p-4 sm:p-8 space-y-6 bg-brown-100 block rounded-md">
      <h3>Actueel</h3>
      <ul className="divide-y-2 divide-black">
        {data.allWpPost.edges.map(({ node }) => {
          return (
            <li key={node.id} className="w-full list-none sm:pr-2 py-2">
              <Link className="pr-2" to={node.uri}>
                {node.title}
              </Link>
              <span>{node.date}</span>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default LatestNewsList
