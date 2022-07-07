import React from "react"
import { graphql } from "gatsby"
import ProjectPageTemplate from "../templates/projectPageTemplate"

const ProjectPageOndersteuningWetenschappelijkOnderzoek = ({
  data,
}): JSX.Element => {
  return <ProjectPageTemplate data={data} />
}

export const query = graphql`
  query ondersteuningWetenschappelijkOnderzoekPage {
    page: allContentfulProjectPage(
      filter: { id: { eq: "709fa4d0-c479-5872-af9a-93ff63703ea1" } }
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

export default ProjectPageOndersteuningWetenschappelijkOnderzoek
