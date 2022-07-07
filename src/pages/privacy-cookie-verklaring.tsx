import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import PageSection from "../components/pageSection"
import PageHeroSmall from "../components/pageHeroSmall"
import { renderRichText } from "gatsby-source-contentful/rich-text"

const ProjectPage = ({ data }): JSX.Element => {
  const contenful = data.page.edges[0].node
  const pageTitle = contenful.title
  const pageHero = contenful.hero
  const pageContent = contenful.content

  return (
    <Layout title={pageTitle}>
      <PageHeroSmall pageHeroSmallProps={pageHero} />
      <PageSection width="md">
        <div>{renderRichText(pageContent)}</div>
      </PageSection>
    </Layout>
  )
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

export default ProjectPage
