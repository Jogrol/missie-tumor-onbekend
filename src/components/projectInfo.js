import React from "react"
import Layout from "./layout"
import content from "../content.json"

const ProjectInfo = () => {
  return (
    <div className="flex space-x-4">
      <img src="https://placem.at/places?h=150" />
      <div className="mt-4">
        <h4>Image</h4>
        <span>
          Li Europan lingues es membres del sam familie. Lor separat existentie
          es un myth. Por scientie, musica, sport etc, litot Europa usa li sam
          vocabular. Li lingues differe solmen in li grammatica, li
          pronunciation e li plu commun vocabules. Omnicos directe al
          desirabilit
        </span>
      </div>
    </div>
  )
}

export default ProjectInfo
