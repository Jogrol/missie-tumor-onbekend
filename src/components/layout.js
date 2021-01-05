import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

import Menu from "./menu"
import LogoIcon from "../assets/logoIcon.svg"

import "./layout.css"

const Layout = ({ children }) => {
  return (
    <>
      <header className="shadow border-light-blue-500 border-opacity-100">
        <div className="container w-full sm:max-w-screen-xl px-4">
          <div className="flex py-2 w-full">
            <Link to="/">
              <LogoIcon className="h-12" />
            </Link>
            <nav className="flex-1">
              <Menu />
            </nav>
          </div>
        </div>
      </header>
      <div>
        <main className="container w-full sm:max-w-screen-xl p-4">
          {children}
        </main>
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
