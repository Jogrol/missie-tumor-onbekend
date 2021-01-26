import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"

const ProjectInfoCard = ({ title, description, buttontitle, pagelink }) => {
  return (
    <div className="flex border-gray-200 shadow-lg border rounded-xl h-full w-full">
      <div className="p-6 w-2/3 flex flex-col">
        <h4>{title ?? "Titel mist"}</h4>
        <span>{description ?? "uitleg mist"}</span>
        <Link
          className="mt-2 text-center border-b-2 border-transparent hover:border-black inline-block w1/2"
          to={pagelink?.uri ?? "/"}
        >
          {buttontitle ?? "button title mist"}
        </Link>
      </div>
      <img
        className="objec-cover w-1/2 border rounded-xl"
        src="https://placem.at/places?h=150"
      />
    </div>
  )
}

ProjectInfoCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  buttontitle: PropTypes.string.isRequired,
  pagelink: PropTypes.object,
}

export default ProjectInfoCard
