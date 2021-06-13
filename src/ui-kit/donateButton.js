import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"

const DonateButton = ({ path, title }) => {
  return (
    <Link
      to={path}
      className="flex justify-center px-12 py-4 items-center rounded-full text-white font-semibold bg-brown-200 hover:bg-brown-100 hover:text-brown-200"
    >
      {title}
    </Link>
  )
}

DonateButton.propTypes = {
  path: PropTypes.string,
  title: PropTypes.string.isRequired,
}

export default DonateButton
