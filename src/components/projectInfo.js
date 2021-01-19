import React from "react"
import Layout from "./layout"
import content from "../content.json"

const ProjectInfo = () => {
  return (
    <div className="flex border-gray-200 shadow-lg border rounded-xl h-full w-full">
      <div className="p-6 w-2/3">
        <h4>Project 1 </h4>
        <span className="">
          Li Europan lingues es membres del sam familie. Lor separat existentie
          es un myth. Por scientie, musica, sport etc, litot Europa usa li sam
          vocabular. Li lingues differe solmen in li grammatica, li
          pronunciation e li plu commun vocabules. Omnicos directe al
          desirabilit
        </span>
      </div>
      <img
        className="objec-cover w-1/2 border rounded-xl"
        src="https://placem.at/places?h=150"
      />
    </div>
  )
}

export default ProjectInfo
