import React from "react"
import { graphql } from "gatsby"
import ProjectPageTemplate from "../templates/projectPageTemplate"

const ProjectPageInformatieVoorziening = ({ data }): JSX.Element => {
  return <ProjectPageTemplate data={data} />
}

export const query = graphql`
  query informatievoorzieningPage {
    page: allContentfulProjectPage(
      filter: { id: { eq: "6d5d8a23-6bea-518e-b196-a14d351662dd" } }
    ) {
      edges {
        node {
          title
          hero {
            title
            heroImage {
              description
              gatsbyImageData(placeholder: DOMINANT_COLOR)
            }
          }
          projectInfo {
            id
            title
            image {
              description
              gatsbyImageData(placeholder: DOMINANT_COLOR)
            }
            content {
              raw
            }
            target {
              goal
              label
              progress
            }
          }
        }
      }
    }
  }
`

export default ProjectPageInformatieVoorziening
