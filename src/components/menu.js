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
            id
            order
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
      <ul className="lg:hidden flex justify-end">
        <MobileMenu />
      </ul>

      {/* desktop view */}
      <ul className="hidden lg:flex flex-wrap h-full items-center justify-end list-none">
        {data.wpMenu.menuItems.nodes.map(
          ({ connectedNode, id, label, url }) => {
            const path = connectedNode.node.uri ?? url
            const key = id

            if (label === DONATIE_LABEL) {
              return (
                <li key={key} className="ml-12">
                  <DonateButton path={path} title={label} />
                </li>
              )
            }

            return (
              <li
                key={key}
                className="px-2 align-middle border-transparent border-b-2 hover:border-gray-400 transition duration-300 ease-in-out"
              >
                <Link
                  className="font-black text-black no-underline py-6 px-6"
                  to={path}
                >
                  {label}
                </Link>
              </li>
            )
          }
        )}
      </ul>
    </>
  )
}

export default Menu
