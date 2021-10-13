import React from "react"
import { ProjectItemDataModel } from "../models/projectItemData.model"
import ProjectInfoCard from "./projectInfoCard"

export interface ProjectSectionPropsModel {
  readonly projects: ProjectItemDataModel[]
}

const ProjectSection = ({
  projects,
}: ProjectSectionPropsModel): JSX.Element => {
  return (
    <ul className="flex flex-col lg:flex-row gap-8 justify-center">
      {projects.map((item: ProjectItemDataModel, index: number) => {
        return (
          <li key={index} className="w-full lg:w-1/3 mt-8 md:m-0 list-none">
            <ProjectInfoCard {...item} />
          </li>
        )
      })}
    </ul>
  )
}

export default ProjectSection
