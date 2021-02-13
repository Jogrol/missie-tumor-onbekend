import React from "react"

const ProjectSection = projects => {
  const projectsArray = Object.values(projects).filter(item => item.title)
  console.log(projectsArray)
  if (!projectsArray.length) {
    return null
  }

  return (
    <>
      <h2 className="text-center">Steun ook:</h2>
      <ul className="flex w-full justify-center">
        {projectsArray.map((item, index) => {
          return (
            <li className="p-20 border bg-yellow-200 rounded-md">
              Project {index}
            </li>
          )
        })}
      </ul>
    </>
  )
}

export default ProjectSection
