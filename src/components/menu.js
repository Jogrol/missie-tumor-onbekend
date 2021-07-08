import React, { useState } from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import MenuIcon from "../assets/menuIcon.svg"
import CloseIcon from "../assets/closeIcon.svg"

const Menu = () => {
  const data = useStaticQuery(graphql`
    {
      wpMenu {
        menuItems {
          nodes {
            label
            url
            id
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
      <div
        className={
          menuIsOpen
            ? "visible fixed top-0 right-0 w-screen h-screen opacity-100 bg-white duration-300 delay-100"
            : "invisible fixed top-0 opacity-0 -mt-80 right-0 w-screen h-1/4 transition-all duration-300"
        }
      >
        <div className="flex justify-center items-center w-full h-full">
          <ul className="list-none p-8 space-y-4">
            <li className="">
              <Link  className="text-2xl sm:text-4xl" onClick={() => toggleMenuIsOpen(!menuIsOpen)} to="/">
                Home
              </Link>
            </li>
            {data.wpMenu.menuItems.nodes.map(
              ({ connectedNode, id, label, url }) => {
                const path = connectedNode.node.uri ?? url
                const key = id

                return (
                  <li key={key} className="text-sm">
                    <Link
                      className="text-2xl sm:text-4xl"
                      onClick={() => toggleMenuIsOpen(!menuIsOpen)}
                      to={path.replace("/steun-missie-tumor-onbekend/", "/")}
                    >
                      {label}
                    </Link>
                  </li>
                )
              }
            )}
          </ul>
        </div>
      </div>
    </>
  )
}

export default Menu
