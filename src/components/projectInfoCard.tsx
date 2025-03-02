import React from "react"
import { Link } from "gatsby"
import { formatNumberToDots } from "../helpers/formatNumberToDots"
import { ProjectItemDataModel } from "../models/projectItemData.model"
import { formatToCorrectUrl } from "../helpers/formatToCorrectUrl"

// Import project images directly
import informatievoorziening from "../images/informatievoorziening.jpeg"
import wetenschappelijkonderzoek from "../images/wetenschappelijkonderzoek.jpeg"
import zorg from "../images/zorg.jpeg"

const ProjectInfoCard = ({
  title,
  description,
  image,
  buttontitle,
  pagelink,
  target,
  progress,
}: ProjectItemDataModel): JSX.Element => {
  // Select the appropriate image based on the project title
  const getProjectImage = () => {
    if (title === "Informatievoorziening & Bewustwording") return informatievoorziening
    if (title === "Ondersteunen van Wetenschappelijk Onderzoek") return wetenschappelijkonderzoek
    if (title === "Verbetering Inzet Zorg") return zorg
    return null
  }
  
  const totalAmount = formatNumberToDots(target)
  const progressPercentage = `${Math.round((progress / target) * 100)}%`
  const projectImage = getProjectImage()

  return (
    <div className="card row-span-3 shadow-lg compact bg-base-100">
      <img
        src={projectImage}
        alt={title}
        className="w-full h-52 rounded-t-lg object-cover"
      />
      <div className="overflow-hidden h-8 mb-4 text-xs flex bg-brown-100">
        <div
          style={{ width: progressPercentage }}
          className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-brown-200"
        >
          <div className="text-xl font-bold pl-4">{progressPercentage}</div>
        </div>
      </div>
      <div className="flex px-6 pb-6 flex-col">
        <h3 className="text-xl sm:text-2xl">{title}</h3>
        <p>{description}</p>
        <div className="flex justify-between items-center flex-wrap">
          <div className="flex items-center">
            <span className="font-extrabold text-md">Doel:</span>
            <span className="ml-4 text-2xl"> € {totalAmount}</span>
          </div>
          <Link
            to={pagelink && formatToCorrectUrl(pagelink.uri)}
            className="link link-primary"
          >
            {buttontitle}
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
