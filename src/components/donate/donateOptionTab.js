import React from "react"
import PropTypes from "prop-types"

const DonateOptionTab = ({ title, onClickFn }) => {
  return (
    <div
      onClick={onClickFn}
      className="cursor-pointer group hover:shadow-lg hover:border-transparent p-4 shadow-sm"
    >
      <p className="group-hover:text-gray-900 ...">{title}</p>
    </div>
  )
}

DonateOptionTab.propTypes = {
  title: PropTypes.string.isRequired,
}

export default DonateOptionTab
