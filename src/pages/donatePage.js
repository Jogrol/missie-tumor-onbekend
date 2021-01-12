import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import InfoCard from "../ui-kit/infoCard"

const DonatePage = ({ data }) => {
  const donateOptions = data.page.donateOptions

  return (
    <Layout>
      <div className="container sm:max-w-screen-lg">
        <h1>{data.page.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: data.page.content }} />
      </div>
      {donateOptions && (
        <div className="container sm:max-w-screen-lg">
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 ">
            <InfoCard {...donateOptions.tikkie} />
            <InfoCard {...donateOptions.form} />
            <InfoCard {...donateOptions.digicollect} />
          </div>
        </div>
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
