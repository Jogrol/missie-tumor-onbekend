import React from "react"
import { graphql } from "gatsby"
import scrollTo from "gatsby-plugin-smoothscroll"

// Import project images directly
import informatievoorziening from "../images/informatievoorziening.jpeg"
import wetenschappelijkonderzoek from "../images/wetenschappelijkonderzoek.jpeg"
import zorg from "../images/zorg.jpeg"

import Layout from "../components/layout"
import PageSection from "../components/pageSection"
import PageHeroSmall from "../components/pageHeroSmall"
import DonateSection from "../components/donateSection"
import ProgressBar from "../components/progressBar"
import { ProjectPageDataModel } from "../models/pages/projectPageData.model"

// Import content components
import InformatieVoorzieningContent from "../components/content/InformatieVoorzieningContent"
import WetenschappelijkOnderzoekContent from "../components/content/WetenschappelijkOnderzoekContent"
import VerbeteringZorgContent from "../components/content/VerbeteringZorgContent"

const ProjectPage = ({ data }: ProjectPageDataModel): JSX.Element => {
  // Add null checks to prevent errors
  if (!data || !data.page) {
    return (
      <Layout title="Error Loading Page">
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-3xl font-bold text-red-600">
            Error Loading Page
          </h1>
          <p className="mt-4">
            There was an error loading the page data. Please try again later.
          </p>
        </div>
      </Layout>
    )
  }

  const pageTitle = data.page.title || "Project Page"
  const projectProgress = data.page.projectProgress || {
    progressie: 0,
    target: 100,
  }

  // Select the appropriate image based on the project title
  const getProjectImage = () => {
    if (pageTitle === "Informatievoorziening & bewustwording")
      return informatievoorziening
    if (pageTitle === "Ondersteunen van wetenschappelijk onderzoek")
      return wetenschappelijkonderzoek
    if (pageTitle === "Verbetering inzet zorg") return zorg
    return null
  }

  const projectImage = getProjectImage()

  return (
    <Layout title={pageTitle}>
      <PageHeroSmall title={pageTitle} />
      <PageSection width="md" color="bg-gray-100 ">
        {projectImage && (
          <img
            src={projectImage}
            alt={`${pageTitle} afbeelding`}
            className="w-full object-cover rounded-t-lg h-64"
          />
        )}
        {projectProgress && <ProgressBar {...projectProgress} />}
        <div className="mt-4">
          {/* Use a function to render the appropriate content component */}
          {(() => {
            switch (pageTitle) {
              case "Ondersteunen van wetenschappelijk onderzoek":
                return <WetenschappelijkOnderzoekContent />;
              case "Informatievoorziening & bewustwording":
                return <InformatieVoorzieningContent />;
              case "Verbetering inzet zorg":
                return <VerbeteringZorgContent />;
              default:
                return null;
            }
          })()}
        </div>
      </PageSection>
      <div id="scroll-to-donate">
        <PageSection width="xl">
          <h2 className="text-center font-black pb-8">Doneer nu</h2>
          <DonateSection projectName={pageTitle} />
        </PageSection>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query projectPage($id: String) {
    page: wordpressDataJson(id: { eq: $id }) {
      uri
      title
      projectProgress {
        target
        progressie
      }
    }
  }
`

export default ProjectPage
