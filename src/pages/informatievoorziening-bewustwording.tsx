import React from "react"
import { graphql } from "gatsby"
import scrollTo from "gatsby-plugin-smoothscroll"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import PageSection from "../components/pageSection"
import PageHeroSmall from "../components/pageHeroSmall"
import DonateSection from "../components/donateSection"
import ProgressBar from "../components/progressBar"
import { renderRichText } from "gatsby-source-contentful/rich-text"
import { formatNumberToDots } from "../helpers/formatNumberToDots"

const ProjectPage = ({ data }): JSX.Element => {
  const contenful = data.page.edges[0].node
  const pageTitle = contenful.title
  const pageHero = contenful.hero
  const projectInfo = contenful.projectInfo
  const target = contenful.projectInfo.target
  const targetTotalAmount = formatNumberToDots(
    contenful.projectInfo.target.goal
  )
  const pageHeroImage = getImage(projectInfo.image)

  return (
    <Layout title={pageTitle}>
      <PageHeroSmall pageHeroSmallProps={pageHero} />
      <PageSection width="md" color="bg-gray-100 ">
        <GatsbyImage
          image={pageHeroImage}
          alt={projectInfo.image.description}
          className="object-fill w-full h-40 rounded-t-lg"
        />
        <ProgressBar progressBarProps={target.progress} />
        <div className="mt-4">
          <div className="col-span-4 sm:col-span-2">
            <h3>
              {target.label} €{targetTotalAmount}
            </h3>
            {renderRichText(projectInfo.content)}
          </div>
        </div>
      </PageSection>
      <div id="scroll-to-donate">
        <PageSection width="xl">
          <h2 className="pb-8 font-black text-center">Doneer nu</h2>
          <DonateSection />
        </PageSection>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query informatievoorzieningPage {
    page: allContentfulProjectPage(
      filter: { id: { eq: "6d5d8a23-6bea-518e-b196-a14d351662dd" } }
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

export default ProjectPage
