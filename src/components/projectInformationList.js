import React from "react"
import ProjectInformationCard from "./projectInformationCard"
import PropTypes from "prop-types"

const ProjectInformationList = projects => {
  const projectsArray = Object.values(projects).filter(item => item.title)

  console.log(projectsArray)
  if (!projectsArray.length) {
    return null
  }

  return (
    <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
      {projectsArray.map(item => {
        return <ProjectInformationCard {...item} />
      })}
    </div>
  )
}

ProjectInformationList.propTypes = {
  projects: PropTypes.object.isRequired,
}

export default ProjectInformationList
