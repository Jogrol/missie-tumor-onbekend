import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import DonateInfoCard from "../components/donateInfoCard"
import DonateAmountCard from "../components/donateAmountCard"
import ProjectInfo from "../components/projectInfo"

const DonatePage = ({ data }) => {
  const donateOptions = data.page.donateOptions
  const projectInfo = data.page.projectInfo

  return (
    <Layout>
      <div className="container sm:max-w-screen-lg">
        <div
          className="container sm:max-w-screen-md"
          dangerouslySetInnerHTML={{ __html: data.page.content }}
        />
      </div>
      <div className="container sm:max-w-screen-lg">
        <DonateAmountCard />
      </div>
      {donateOptions && (
        <div className="container sm:max-w-screen-lg">
          <h2 className="text-center py-4 sm:py-8">Donatie mogelijkheden</h2>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 ">
            <DonateInfoCard {...donateOptions.tikkie} />
            <DonateInfoCard {...donateOptions.form} />
            <DonateInfoCard {...donateOptions.digicollect} />
          </div>
        </div>
      )}
      {projectInfo && (
        <div className="container sm:max-w-screen-xl">
          <div className="grid grid-cols-4 gap-6">
            <div className="col-span-2">
              {projectInfo.firstproject.description && (
                <ProjectInfo {...projectInfo.firstproject} />
              )}
            </div>
            {/* <div className="col-span-2">
              <ProjectInfo />
            </div>
            <div className="col-span-2">
              <ProjectInfo />
            </div> */}
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
