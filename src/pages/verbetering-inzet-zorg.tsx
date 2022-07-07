import React from "react"
import { graphql } from "gatsby"
import ProjectPageTemplate from "../templates/projectPageTemplate"

const ProjectPageVerbeteringInzetZorg = ({ data }): JSX.Element => {
  return <ProjectPageTemplate data={data} />
}

export const query = graphql`
  query verbeteringInzetZorgPage {
    page: allContentfulProjectPage(
      filter: { id: { eq: "96643049-f7a1-5853-a165-a58348b09ddb" } }
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

export default ProjectPageVerbeteringInzetZorg
