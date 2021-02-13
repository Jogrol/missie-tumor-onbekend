import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import PageSection from "../components/pageSection"
import DonateSection from "../components/donateSection"

const ProjectPage = ({ data }) => {
  const donateOptions = data.page.donateOptions

  return (
    <Layout>
      <PageSection>
        <div
          className="container sm:max-w-screen-md"
          dangerouslySetInnerHTML={{ __html: data.page.content }}
        />
      </PageSection>

      {donateOptions && (
        <PageSection>
          <DonateSection {...donateOptions} />
        </PageSection>
      )}
    </Layout>
  )
}

export const query = graphql`
  query projectPage($id: String) {
    page: wpPage(id: { eq: $id }) {
      uri
      title
      content
      donateOptions {
        tikkie {
          title
          description
          ctaTitle
          ctalink {
            ... on WpPage {
              uri
            }
          }
        }
        form {
          title
          description
          ctaTitle
          ctalink {
            ... on WpPage {
              uri
            }
          }
        }
        digicollect {
          title
          description
          ctaTitle
          ctalink {
            ... on WpPage {
              uri
            }
          }
        }
      }
    }
  }
`

export default ProjectPage
