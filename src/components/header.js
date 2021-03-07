import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

import Menu from "./menu"
import ListOfLinks from "./listOfLinks"
import LogoIcon from "../assets/logoIcon.svg"

const Header = ({ pageHeroInview }) => {
  return (
    <>
      <div
        className={`fixed top-0 left-0 border-opacity-100 opacity-100 w-full h-18 shadow-lg z-50 ${
          pageHeroInview ? "bg-transparant" : "bg-white"
        }`}
      >
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
      </div>
      <div className="absolute sm:top-0 mt-20 left-0 z-40 w-full">
        {/* TODO: fix mobile styling */}
        <div className="bg-transparant">
          <ListOfLinks />
        </div>
      </div>
    </>
  )
}

Header.propTypes = {
  pageHeroInview: PropTypes.bool,
}

export default Header
