import React from "react"
import ProjectInfoCard from "./projectInfoCard"

const ProjectSection = projects => {
  const projectsArray = Object.values(projects).filter(item => item.title)

  if (!projectsArray.length) {
    return null
  }

  return (
    <>
      <ul className="sm:flex gap-8 justify-center">
        {projectsArray.map((item, index) => {
          return (
            <li key={index} className="w-full sm:w-1/3 mt-8 sm:m-0 list-none">
              <ProjectInfoCard {...item} />
            </li>
          )
        })}
      </ul>
    </>
  )
}

export default ProjectSection
