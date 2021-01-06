import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import MobileMenu from "./mobileMenu"
import DonateButton from "../ui-kit/donateButton"

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
    <>
      {/* mobile view */}
      <ul className="md:hidden flex justify-end">
        <MobileMenu />
      </ul>

      {/* desktop view */}
      <ul className="hidden md:flex flex-wrap h-full items-center justify-end">
        {data.wpMenu.menuItems.nodes.map(item => {
          const path = item.connectedNode.node.uri ?? item.url

          if (item.label === DONATIE_LABEL) {
            return (
              <li key={item.id} className="ml-12">
                <DonateButton path={path} title={item.label} />
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
    </>
  )
}

export default Menu
