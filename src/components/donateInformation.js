import React from "react"
import DonateInformationCard from "./donateInformationCard"
import PropTypes from "prop-types"

const DonateInformation = info => {
  const infoArray = Object.values(info).filter(item => item.title)

  if (!infoArray.length) {
    return null
  }

  return (
    <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
      {infoArray.map(item => {
        return <DonateInformationCard {...item} />
      })}
    </div>
  )
}

export default DonateInformation

DonateInformation.propTypes = {
  info: PropTypes.object.isRequired,
}
