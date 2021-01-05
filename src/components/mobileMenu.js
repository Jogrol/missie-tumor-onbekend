import React, { useState } from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import MenuIcon from "../assets/menuIcon.svg"
import CloseIcon from "../assets/CloseIcon.svg"

const MobileMenu = () => {
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

  const [menuIsOpen, toggleMenuIsOpen] = useState(false)

  return (
    <>
      <button
        onClick={() => toggleMenuIsOpen(!menuIsOpen)}
        className="px-2 py-4 border-1 border-gray-100 z-10"
      >
        {menuIsOpen ? (
          <CloseIcon className="w-6 h-6" />
        ) : (
          <MenuIcon className="w-6 h-6" />
        )}
      </button>
      {menuIsOpen && (
        <div
          className={"fixed bottom-0 left-0 w-screen h-screen bg-yellow-300"}
        >
          <div className="flex justify-center items-center w-full h-full">
            <ul className="">
              {data.wpMenu.menuItems.nodes.map(item => {
                const path = item.connectedNode.node.uri ?? item.url
                return (
                  <li className="mb-4">
                    <Link
                      onClick={() => toggleMenuIsOpen(!menuIsOpen)}
                      to={path}
                    >
                      <button className="text-5xl">{item.label}</button>
                    </Link>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      )}
    </>
  )
}

export default MobileMenu
