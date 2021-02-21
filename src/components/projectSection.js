import React from "react"
import ProjectInfoCard from "./projectInfoCard"

const ProjectSection = projects => {
  const projectsArray = Object.values(projects).filter(item => item.title)
  console.log(projectsArray)
  if (!projectsArray.length) {
    return null
  }

  return (
    <>
      <h2 className="text-center text-white py-12">Projecten die we steunen</h2>
      <ul className="sm:flex gap-8 justify-center">
        {projectsArray.map((item, index) => {
          return (
            <li key={index} className="w-full sm:w-1/3 mt-8 sm:m-0">
              <ProjectInfoCard {...item} />
            </li>
          )
        })}
      </ul>
    </>
  )
}

export default ProjectSection
