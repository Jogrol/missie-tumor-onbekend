/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

import Menu from "./menu"
import "./layout.css"

const Layout = ({ children }) => {
  return (
    <>
      <header className="border-4 border-light-blue-500 border-opacity-100">
        <div className="container mx-auto px-4">
          <div className="flex p-4 w-full">
            <span className="text-yellow-600 p-0 w-1/3">
              <Link to="/">{"STO"}</Link>
            </span>
            <nav className="flex-1">
              <Menu />
            </nav>
          </div>
        </div>
      </header>
      <div>
        <main className="container mx-auto px-4">{children}</main>
        <footer></footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  siteTitle: PropTypes.string,
  children: PropTypes.node.isRequired,
}

export default Layout
