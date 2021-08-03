import React from "react"
import PropTypes from "prop-types"
import Footer from "./footer"
import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <header>
        <Header />
      </header>
      <main className="flex-grow">{children}</main>
      <footer className="text-center w-full bg-brown-200 p-4 rounded">
        <Footer />
      </footer>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  pageHeroInview: PropTypes.bool,
}

export default Layout
