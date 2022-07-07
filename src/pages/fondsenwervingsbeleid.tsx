import React from "react"
import { graphql } from "gatsby"
import BasicPageTemplate from "../templates/basicPageTemplate"

const BasicPageFondsenWervingsbeleid = ({ data }): JSX.Element => {
  return <BasicPageTemplate data={data} />
}

export const query = graphql`
  query fondsenWerveringsBeleidPage {
    page: allContentfulDefaultPage(
      filter: { id: { eq: "bb3140ff-283f-5ea4-b0d5-b5a319917a0b" } }
    ) {
      edges {
        node {
          id
          title
          content {
            raw
          }
          hero {
            title
            heroImage {
              description
              gatsbyImageData(placeholder: DOMINANT_COLOR)
            }
          }
          content {
            raw
          }
        }
      }
    }
  }
`

export default BasicPageFondsenWervingsbeleid
