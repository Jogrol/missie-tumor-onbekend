import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"

import DonateIcon from "../assets/donateIcon.svg"

const InfoCardButton = ({ path, title }) => {
  return (
    <Link
      className="flex p-4 flex-row items-center justify-center rounded-xl shadow-sm border w-full hover:scale-150"
      to={path}
    >
      {title}
      <DonateIcon className="ml-3 h-4" />
    </Link>
  )
}

InfoCardButton.propTypes = {
  path: PropTypes.string,
  title: PropTypes.string.isRequired,
}

export default InfoCardButton
