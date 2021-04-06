import React from "react"
import Img from "gatsby-image"
import { Link } from "gatsby"
import PropTypes from "prop-types"

const ProjectInfoCard = ({
  title,
  description,
  image,
  buttontitle,
  pagelink,
}) => {
  return (
    <div className="bg-white border-transparent rounded-lg shadow-lg">
      <Img
        fluid={image.localFile.childImageSharp.fluid}
        className="w-full h-52 rounded-t-lg"
      />
      <div className="overflow-hidden h-8 mb-4 text-xs flex bg-green-200">
        <div
          style={{ width: "70%" }}
          className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-green-500"
        >
          <div className="text-xl font-bold">70%</div>
        </div>
      </div>
      <div className="flex p-4 flex-col">
        <h3>{title}</h3>
        <p>{description}</p>
        <div className="flex justify-between">
          <Link
            to={pagelink.uri}
            className="flex justify-center px-12 py-4 items-center rounded-full text-white font-semibold bg-yellow-500 hover:bg-yellow-300"
          >
            {buttontitle}
          </Link>
          <div className="flex flex-col">
            <span className="font-extrabold text-md">Doel:</span>
            <span className="text-2xl"> €20.000</span>
          </div>
        </div>
      </div>
    </div>
  )
}

ProjectInfoCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  buttontitle: PropTypes.string.isRequired,
  pagelink: PropTypes.string.isRequired,
}

export default ProjectInfoCard
