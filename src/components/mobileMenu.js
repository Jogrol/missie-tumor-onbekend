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
            ? "visible fixed top-0  right-0 w-screen h-screen opacity-100 bg-yellow-500 duration-200 delay-200"
            : "invisible fixed top-0 -mt-80 opacity-0 right-0 w-screen h-screen transition-all duration-200"
        }
      >
        <div className="flex justify-center items-center w-full h-full text-wh">
          <ul>
            {data.wpMenu.menuItems.nodes.map(item => {
              const path = item.connectedNode.node.uri ?? item.url
              const key = item.id

              return (
                <li key={key} className="mb-8">
                  <Link onClick={() => toggleMenuIsOpen(!menuIsOpen)} to={path}>
                    <button className="text-5xl">{item.label}</button>
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </>
  )
}

export default MobileMenu
