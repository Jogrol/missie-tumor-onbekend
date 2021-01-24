import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import PageSection from "../components/pageSection"
import DonateInformation from "../components/donateInformation"
import DonateAmountCard from "../components/donateAmountCard"
import ProjectInfo from "../components/projectInformationCard"
import ProjectInformationList from "../components/projectInformationList"

const DonatePage = ({ data }) => {
  const donateOptions = data.page.donateOptions
  const projectInfo = data.page.projectInfo

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
          <DonateInformation {...donateOptions} />
        </PageSection>
      )}

      {projectInfo && (
        <PageSection width="xl">
          <ProjectInformationList {...projectInfo} />
        </PageSection>
      )}
    </Layout>
  )
}

export const query = graphql`
  query donatePage($id: String) {
    page: wpPage(id: { eq: $id }) {
      uri
      title
      content
      projectInfo {
        firstproject {
          title
          buttontitle
          description
          fieldGroupName
          pagelink {
            ... on WpPage {
              uri
            }
          }
        }
        secondproject {
          buttontitle
          description
          fieldGroupName
          title
          pagelink {
            ... on WpPage {
              uri
            }
          }
        }
      }
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

export default DonatePage
