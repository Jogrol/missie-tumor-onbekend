import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

import Menu from "./menu"
import LogoIcon from "../assets/logoIcon.svg"

import "./layout.css"

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="fixed top-0 left-0 border-opacity-100 opacity-100 bg-white w-full h-18 shadow-lg z-50">
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
      <main className="flex-grow container w-full sm:max-w-screen-xl px-4 py-6 mt-20 space-y-12">
        {children}
      </main>
      <footer className="text-center w-full border-t-2 bg-yellow-500 p-4 rounded">
        {/* Should come from WP */}
        <div className="p-2">© 2021 Missie Tumor Onbekend</div>
        <ul className="flex p-2 justify-center text-xs">
          <li className="p-1 text-xs">
            NFK Patiëntenplatform Zeldzame Kankers
          </li>
          <li className="p-1 text-xs">Stichting Sterren</li>
          <li className="p-1 text-xs">Stichting Vrienden van Hederik</li>
        </ul>
      </footer>
    </div>
  )
}

Layout.propTypes = {
  siteTitle: PropTypes.string,
  children: PropTypes.node.isRequired,
}

export default Layout
