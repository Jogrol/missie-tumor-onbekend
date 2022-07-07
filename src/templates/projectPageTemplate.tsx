import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import PageSection from "../components/pageSection"
import PageHeroSmall from "../components/pageHeroSmall"
import DonateSection from "../components/donateSection"
import ProgressBar from "../components/progressBar"
import { renderRichText } from "gatsby-source-contentful/rich-text"
import { formatNumberToDots } from "../helpers/formatNumberToDots"

const ProjectPageTemplate = ({ data }): JSX.Element => {
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

export default ProjectPageTemplate
