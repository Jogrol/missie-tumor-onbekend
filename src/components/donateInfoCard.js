import React from "react"
import InfoCardButton from "../ui-kit/infoCardButton"
import PropTypes from "prop-types"

const DonateInfoCard = ({ title, description, ctaTitle, ctalink }) => {
  return (
    <div className="border-transparant shadow-lg border-gray-100 w-full rounded-xl flex flex-col">
      <div className="bg-yellow-500 w-full pt-2 px-4 rounded-t-xl flex-none">
        <h4 className="py-2 ">{title}</h4>
      </div>
      <div className="px-4 py-2 flex-grow">
        <p>{description}</p>
      </div>
      <div className="pb-2 px-4 flex-none">
        <InfoCardButton title={ctaTitle} path={ctalink.uri ?? null} />
      </div>
    </div>
  )
}

DonateInfoCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  ctaTitle: PropTypes.string.isRequired,
  ctalink: PropTypes.object,
}

export default DonateInfoCard
