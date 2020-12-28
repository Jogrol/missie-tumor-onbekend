import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"

const Menu = () => {
  const data = useStaticQuery(graphql`
    {
      wpMenu {
        menuItems {
          nodes {
            label
            url
            parentId
            connectedNode {
              node {
                ... on WpContentNode {
                  uri
                }
              }
            }
          }
        }
      }
    }
  `)
  return (
    <ul>
      {data.wpMenu.menuItems.nodes.map(item => {
        const path = item.connectedNode.node.uri ?? item.url

        return (
          <li>
            <Link to={path}>
              <button> {item.label}</button>
            </Link>
          </li>
        )
      })}
    </ul>
  )
}

export default Menu
