import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"

import DonateIcon from "../assets/donateIcon.svg"

const DonateButton = ({ path, title }) => {
  return (
    <Link to={path}>
      <button className="flex flex-row items-center uppercase px-4 py-3 font-black rounded-lg border bg-yellow-500">
        {title}
        <DonateIcon className="ml-3 h-4" />
      </button>
    </Link>
  )
}

DonateButton.propTypes = {
  path: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
}

export default DonateButton
