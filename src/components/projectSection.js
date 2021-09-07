import React from "react"
import ProjectInfoCard from "../components/projectInfoCard"

const ProjectSection = projects => {
  const projectsArray = Object.values(projects).filter(item => item.title)

  if (!projectsArray.length) {
    return null
  }

  return (
    <>
      <ul className="md:flex gap-8 justify-center">
        {projectsArray.map((item, index) => {
          return (
            <li key={index} className="w-full md:w-1/3 mt-8 md:m-0 list-none">
              <ProjectInfoCard {...item} />
            </li>
          )
        })}
      </ul>
    </>
  )
}

export default ProjectSection
