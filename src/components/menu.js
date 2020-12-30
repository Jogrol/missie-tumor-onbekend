import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import DonateIcon from "../assets/donateIcon.svg"

const Menu = () => {
  const data = useStaticQuery(graphql`
    {
      wpMenu {
        menuItems {
          nodes {
            label
            url
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

  const DONATIE_LABEL = "Steun ons"

  return (
    <div>
      {/* mobile view */}
      <ul className="md:hidden flex justify-end">
        <button className="px-2 py-4 border-1 border-gray-100">MENU</button>
      </ul>
      {/* desktop view */}
      <ul className="hidden md:flex flex-wrap h-full items-center justify-end">
        {data.wpMenu.menuItems.nodes.map(item => {
          const path = item.connectedNode.node.uri ?? item.url

          console.log(item)
          if (item.label === DONATIE_LABEL) {
            return (
              <li className="ml-12">
                <Link to={path}>
                  <button className="flex flex-row items-center uppercase px-4 py-3 font-black rounded border">
                    {item.label}
                    <DonateIcon className="ml-3 h-4" />
                  </button>
                </Link>
              </li>
            )
          }

          return (
            <li className="px-2 align-middle border-transparent border-b-2 hover:border-gray-400 transition duration-300 ease-in-out">
              <Link to={path}>
                <button className="font-black py-2 px-4">{item.label}</button>
              </Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Menu
