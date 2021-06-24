import React from "react"
import PropTypes from "prop-types"

const DonateInformationCard = ({ title, onClickFn }) => {
  return (
    <div
      onClick={onClickFn}
      className="cursor-pointer group hover:shadow-lg hover:border-transparent p-4 shadow-sm"
    >
      <p className="text-yellow-600 group-hover:text-gray-900 ...">{title}</p>
    </div>
  )
}

DonateInformationCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  ctaTitle: PropTypes.string.isRequired,
  ctalink: PropTypes.object.isRequired,
}

export default DonateInformationCard
