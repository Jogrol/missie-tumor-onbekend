import React from "react"
import { ProjectItemDataModel } from "../models/projectItemData.model"
import ProjectInfoCard from "./projectInfoCard"

export interface ProjectSectionPropsModel {
  readonly projects: ProjectItemDataModel[]
}

const ProjectSection = ({ projectSectionProps }): JSX.Element => {
  console.log(projectSectionProps)
  return (
    <ul className="flex flex-col justify-center gap-8 lg:flex-row">
      {projectSectionProps.map((i, index: number) => {
        return (
          <li key={i.id} className="w-full mt-8 list-none lg:w-1/3 md:m-0">
            <ProjectInfoCard projectInfoCardProps={i} />
          </li>
        )
      })}
    </ul>
  )
}

export default ProjectSection
