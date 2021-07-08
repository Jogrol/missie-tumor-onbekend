import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { numberWithCommas } from './../helpers/numberWithCommas'

const ProjectInfoCard = ({
  title,
  description,
  image,
  buttontitle,
  pagelink,
  target,
  progress
}) => {
  const projectImage = getImage(image?.localFile)
  const totalAmount = numberWithCommas(target)

  const progressPercentage = `${Math.round((progress / target) * 100)}%`

  return (
    <div className="bg-white border-transparent rounded-lg shadow-lg">
      <GatsbyImage
        image={projectImage}
        alt="image"
        className="w-full h-52 rounded-t-lg"
      />

      <div className="overflow-hidden h-8 mb-4 text-xs flex bg-green-200">
        <div
          style={{ width: progressPercentage }}
          className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-green-500"
        >
          <div className="text-xl font-bold">{progressPercentage}</div>
        </div>
      </div>
      <div className="flex p-4 flex-col">
        <h3>{title}</h3>
        <p>{description}</p>
        <div className="flex justify-between">
          <Link
            to={pagelink?.uri.replace("/steun-missie-tumor-onbekend/", "/")}
            className="flex justify-center px-12 py-4 items-center rounded-full text-white font-semibold bg-yellow-500 hover:bg-brown-100 hover:text-brown-200 hover:no-underline"
          >
            {buttontitle}
          </Link>
          <div className="flex flex-col">
            <span className="font-extrabold text-md">Doel:</span>
            <span className="text-2xl"> € {totalAmount}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

ProjectInfoCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.object.isRequired,
  buttontitle: PropTypes.string.isRequired,
  pagelink: PropTypes.object.isRequired,
  target: PropTypes.string.isRequired,
  pogress: PropTypes.string,
}

export default ProjectInfoCard
