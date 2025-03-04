import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import PageSection from "../components/pageSection"
import DonateSection from "../components/donateSection"
import VideoSection from "../components/videoSection"
import ProjectSection from "../components/projectSection"
import Stats from "../components/stats"
import { DonatePageDataModel } from "../models/pages/donatePageData.model"
import { ProjectItemDataModel } from "../models/projectItemData.model"
import PatientStoriesSection from "../components/patientStoriesSection"
import PageHero from "../components/pageHero"
import YouTubeCarousel from "../components/YouTubeCarousel"

const DonatePage = ({ data }: DonatePageDataModel): JSX.Element => {
  // Add null checks to prevent errors
  if (!data || !data.page) {
    return (
      <Layout title="Error Loading Page">
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-3xl font-bold text-red-600">Error Loading Page</h1>
          <p className="mt-4">There was an error loading the page data. Please try again later.</p>
        </div>
      </Layout>
    )
  }

  const pageTitle = data.page.title || "Donate Page"
  const projectsList = data.page.listOfProjects ? Object.values(data.page.listOfProjects).filter(
    (item: ProjectItemDataModel) => item && item.title
  ) : []

  const videoSectionInfo = data.page.videoSection || {}
  const pageHeroInfo = data.page.hero || {}

  return (
    <Layout title={pageTitle}>
      <div className="relative w-screen bg-gray-100">
        <PageHero {...pageHeroInfo} />
        <div className="container relative z-40 px-4 divide-y-2 -mt-14 sm:-mt-20 sm:max-w-screen-md md:max-w-screen-xl sm:px-12">
          <Stats />
        </div>
      </div>
      <PageSection width="sm" color="bg-gray-100">
        <h2 className="pb-8 font-black text-center">Wat is PTO?</h2>
        <p>
          In Nederland krijgen jaarlijkse ongeveer 1.500 patiënten de diagnose
          'primaire tumor onbekend' (PTO). Dit betekent dat er sprake is van
          uitgezaaide kanker, zonder dat de bron (de primaire tumor) bekend is.
          Doordat de bron van de uitzaaiingen onbekend is, is het moeilijk een
          goede behandeling te vinden.
        </p>

        <h3 className="text-2xl font-bold text-center mt-8 mb-6">Bekijk onze video's</h3>
        
        <YouTubeCarousel 
          videos={[
            "yBsA7BGOYFE",
            "SO_OOrSfs68",
            "7AR89PinbEc"
          ]}
          names={[
            "Hedwig",
            "Peter",
            "Inke"
          ]}
        />
      
        <div className="text-center mt-8">
          <a href="https://www.missietumoronbekend.nl/pto/" target="_blank">
            Meer informatie over PTO
          </a>
        </div>
      </PageSection>
      <PageSection color="bg-white-200">
        <VideoSection {...videoSectionInfo} />
      </PageSection>
      <PageSection width="xl" color="bg-gray-100">
        <h2 className="pb-8 font-black text-center">
            Deel jouw ervaring met PTO als patiënt of naaste
        </h2>
        <PatientStoriesSection />
      </PageSection>
      <PageSection width="sm" color="bg-white-200">
        <div className="aspect-w-16 aspect-h-9">
          <iframe
            src="https://www.youtube.com/embed/pOFXZT6j8S0"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </PageSection>
      {projectsList && (
        <PageSection width="xl" color="bg-gray-100">
          <h2 id="projecten" className="pb-8 font-black text-center">
            Projecten die we steunen
          </h2>
          <ProjectSection projects={projectsList} />
        </PageSection>
      )}
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
  query donatePage($id: String) {
    page: wordpressDataJson(id: {eq: $id}) {
      uri
      title
      videoSection {
        introductiontext
        videolink {
          url
          target
          title
        }
      }
      listOfProjects {
        projecta {
          title
          description
          buttontitle
          target
          progress
          pagelink {
            uri
          }
        }
        projectb {
          title
          description
          buttontitle
          target
          progress
          pagelink {
            uri
          }
        }
        projectc {
          title
          description
          buttontitle
          target
          progress
          pagelink {
            uri
          }
        }
      }
    }
  }
`

export default DonatePage
