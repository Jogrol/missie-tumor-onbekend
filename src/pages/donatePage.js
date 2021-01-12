import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import InfoCard from "../ui-kit/infoCard"
import DonateAmountCard from "../components/donateAmountCard"
import ProjectInfo from "../components/projectInfo"

const DonatePage = ({ data }) => {
  const donateOptions = data.page.donateOptions

  return (
    <Layout>
      <div className="container sm:max-w-screen-lg">
        <h1>{data.page.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: data.page.content }} />
      </div>
      <div className="container sm:max-w-screen-lg">
        <DonateAmountCard />
      </div>
      {donateOptions && (
        <div className="container sm:max-w-screen-lg">
          <h2>Doneer mogelijkheden</h2>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 ">
            <InfoCard {...donateOptions.tikkie} />
            <InfoCard {...donateOptions.form} />
            <InfoCard {...donateOptions.digicollect} />
          </div>
        </div>
      )}
      <div className="container sm:max-w-screen-lg">
        <h2>Projecten die je kan steunen</h2>
        <ProjectInfo />
      </div>
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
