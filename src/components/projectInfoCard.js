import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { numberWithDots } from "./../helpers/numberWithDots"

const ProjectInfoCard = ({
  title,
  description,
  image,
  buttontitle,
  pagelink,
  target,
  progress,
}) => {
  const projectImage = getImage(image?.localFile)
  const totalAmount = numberWithDots(target)

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
          <div className="text-xl font-bold pl-4">{progressPercentage}</div>
        </div>
      </div>
      <div className="flex p-4 flex-col">
        <h3>{title}</h3>
        <p>{description}</p>
        <div className="flex justify-between items-center">
          <Link
            to={pagelink?.uri.replace("/steun-missie-tumor-onbekend/", "/")}
            className="btn btn-primary"
          >
            {buttontitle}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              class="inline-block w-6 h-6 ml-2 stroke-current"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 5l7 7-7 7"
              ></path>
            </svg>
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
