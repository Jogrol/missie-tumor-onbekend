import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"
import Menu from "./menu"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const Header = ({ pageHeroInview }) => {
  const data = useStaticQuery(graphql`
    {
      image: allImageSharp(
        filter: { id: { eq: "71c655a5-e4cb-5358-bb8a-324a468c9d6c" } }
      ) {
        edges {
          node {
            id
            gatsbyImageData(width: 300, placeholder: NONE)
          }
        }
      }
    }
  `)

  const logoImage = getImage(data.image.edges[0]?.node)

  return (
    <>
      <div
        className={`fixed top-0 left-0 border-opacity-100 opacity-100 w-full h-18 shadow-lg z-50 ${
          pageHeroInview ? "bg-transparant" : "bg-white"
        }`}
      >
        <div className="container w-full sm:max-w-screen-xl px-4">
          <div className="flex py-2 w-full">
            <Link
              className="h-16 w-1/2 sm:w-1/4 flex justify-center items-center"
              to="/"
            >
              <GatsbyImage image={logoImage} alt="logo" className="w-full" />
            </Link>
            <nav className="flex-1">
              <Menu />
            </nav>
          </div>
        </div>
      </div>
      <div className="absolute sm:top-0 mt-20 left-0 z-40 w-full">
        {/* TODO: fix mobile styling */}
        {/* <div className="bg-transparant">
          <ListOfLinks />
        </div> */}
      </div>
    </>
  )
}

Header.propTypes = {
  pageHeroInview: PropTypes.bool,
}

export default Header
