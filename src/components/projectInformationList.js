import React from "react"
import ProjectInformationCard from "./projectInformationCard"

const ProjectInformationList = projects => {
  const projectsArray = Object.values(projects).filter(item => item.title)

  if (!projectsArray.length) {
    return null
  }

  return (
    <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
      {projectsArray.map((item, index) => {
        return <ProjectInformationCard key={index} {...item} />
      })}
    </div>
  )
}

export default ProjectInformationList
