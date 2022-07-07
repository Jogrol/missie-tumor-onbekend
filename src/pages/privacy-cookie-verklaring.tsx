import React from "react"
import { graphql } from "gatsby"
import BasicPageTemplate from "../templates/basicPageTemplate"

const BasicPagePrivacyCookieVerklaring = ({ data }): JSX.Element => {
  return <BasicPageTemplate data={data} />
}

export const query = graphql`
  query privacyCookieVerklaringPage {
    page: allContentfulDefaultPage(
      filter: { id: { eq: "7a2acbf1-a2ac-5892-8c6b-44333cec18e6" } }
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

export default BasicPagePrivacyCookieVerklaring
