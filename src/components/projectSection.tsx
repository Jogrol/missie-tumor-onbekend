import React from "react"
import { ProjectItemDataModel } from "../models/projectItemData.model"
import ProjectInfoCard from "./projectInfoCard"

export interface ProjectSectionPropsModel {
  readonly projects: ProjectItemDataModel[]
}

const ProjectSection = ({ projectSectionProps }): JSX.Element => {
  return (
    <>
      <h2 id="projecten" className="pb-8 font-black text-center">
        {projectSectionProps.title}
      </h2>
      <ul className="flex flex-col justify-center gap-8 lg:flex-row">
        {projectSectionProps.projectCards.map(i => {
          return (
            <li key={i.id} className="w-full mt-8 list-none lg:w-1/3 md:m-0">
              <ProjectInfoCard projectInfoCardProps={i} />
            </li>
          )
        })}
      </ul>
    </>
  )
}

export default ProjectSection
