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
    <ul className="flex h-full">
      {data.wpMenu.menuItems.nodes.map(item => {
        const path = item.connectedNode.node.uri ?? item.url

        return (
          <li className="flex-1 text-center items-center">
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
