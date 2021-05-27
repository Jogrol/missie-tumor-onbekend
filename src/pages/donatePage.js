import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import PageSection from "../components/pageSection"
import DonateSection from "../components/donateSection"
import PageHero from "../components/pageHero"
import useIntersect from "../hooks/useIntersect"
import VideoSection from "../components/videoSection"
import ProjectSection from "../components/projectSection"
import FactSection from "../components/factsSection"

const DonatePage = ({ data }) => {
  const { observable, inView } = useIntersect({ threshold: 1 })

  const donateOptions = data.page.donateOptions
  const projectInfo = data.page.projectInfo
  // const pageHeroInfo = data.page.hero

  return (
    <Layout pageHeroInview={inView}>
      <div ref={observable} className="relative  w-screen">
        {/* <PageHero {...pageHeroInfo} /> */}
      </div>
      <PageSection width="xl" color="bg-yellow-600">
        <FactSection />
      </PageSection>
      <PageSection color="bg-white-200">
        <VideoSection />
      </PageSection>
      {projectInfo && (
        <PageSection width="xl" color="bg-yellow-600">
          <h2 className="text-center text-white pb-12">
            Projecten die we steunen
          </h2>
          <ProjectSection {...projectInfo} />
        </PageSection>
      )}
      {/* {donateOptions && (
        <div id="scroll-to-donate">
          <PageSection>
            <h2 className="text-center pb-12">Doneer nu</h2>
            <DonateSection {...donateOptions} />
          </PageSection>
        </div>
      )} */}
    </Layout>
  )
}

export const query = graphql`
  query donatePage($id: String) {
    page: wpPage(id: { eq: $id }) {
      uri
      title
      content
    }
  }
`

export default DonatePage
