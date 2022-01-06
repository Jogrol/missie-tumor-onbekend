import React from "react"
import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { formatNumberToDots } from "../helpers/formatNumberToDots"

const ProjectInfoCard = ({ projectInfoCardProps }): JSX.Element => {
  const projectImage = getImage(projectInfoCardProps.image?.gatsbyImageData)
  const totalAmount = formatNumberToDots(projectInfoCardProps.target.goal)
  const progressPercentage = `${projectInfoCardProps.target.progress}%`

  return (
    <div className="row-span-3 shadow-lg card compact bg-base-100">
      <GatsbyImage
        image={projectImage}
        alt="image"
        className="w-full rounded-t-lg h-52"
      />
      <div className="flex h-8 mb-4 overflow-hidden text-xs bg-brown-100">
        <div
          style={{ width: progressPercentage }}
          className="flex flex-col justify-center text-center text-white shadow-none whitespace-nowrap bg-brown-200"
        >
          <div className="pl-4 text-xl font-bold">{progressPercentage}</div>
        </div>
      </div>
      <div className="flex flex-col px-6 pb-6">
        <h3 className="text-xl sm:text-2xl">{projectInfoCardProps.title}</h3>
        <p>{projectInfoCardProps.summary.summary}</p>
        <div className="flex flex-wrap items-center justify-between">
          <div className="flex items-center">
            <span className="font-extrabold text-md">
              {projectInfoCardProps.target.label}
            </span>
            <span className="ml-4 text-2xl"> € {totalAmount}</span>
          </div>
          <Link
            to={projectInfoCardProps.projectLink.url}
            className="link link-primary"
          >
            {projectInfoCardProps.projectLink.title}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-6 h-6 ml-2 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              ></path>
            </svg>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ProjectInfoCard
