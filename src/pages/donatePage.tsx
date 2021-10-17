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
import BackgroundVideo from "../assets/videos/tumorfonds.webm"

const DonatePage = ({ data }: DonatePageDataModel): JSX.Element => {
  const pageTitle = data.page.title
  const projectsList = Object.values(data.page.listOfProjects).filter(
    (item: ProjectItemDataModel) => item.title
  )

  const videoSectionInfo = data.page.videoSection
  const pageHeroInfo = data.page.hero

  return (
    <Layout title={pageTitle}>
      <div className="relative w-screen bg-gray-100">
        <PageHero {...pageHeroInfo} />
        <div className="-mt-14 sm:-mt-20 relative z-40 sm:max-w-screen-md md:max-w-screen-xl px-4 sm:px-12 divide-y-2 container">
          <Stats />
        </div>
      </div>
      <PageSection width="sm" color="bg-gray-100">
        <h2 className="text-center font-black pb-8">Wat is PTO?</h2>
        <p>
          In Nederland krijgen jaarlijkse ongeveer 1.500 patiënten de diagnose
          'primaire tumor onbekend' (PTO). Dit betekent dat er sprake is van
          uitgezaaide kanker, zonder dat de bron (de primaire tumor) bekend is.
          Doordat de bron van de uitzaaiingen onbekend is, is het moeilijk een
          goede behandeling te vinden.
        </p>
        <div className="text-center">
          <a href="https://www.missietumoronbekend.nl/pto/" target="_blank">
            Meer informatie over PTO
          </a>
        </div>
      </PageSection>
      <PageSection color="bg-white-200">
        <VideoSection {...videoSectionInfo} />
      </PageSection>
      <PageSection width="xl" color="bg-gray-100">
        <h2 className="text-center font-black pb-8">
          Deel nu jouw ervaring met PTO en verbeter de zorg
        </h2>
        <PatientStoriesSection />
      </PageSection>
      <PageSection width="sm" color="bg-white-200">
        <div className="relative overflow-hidden pb-2/3 h-96">
          <iframe
            className="absolute h-full w-full object-cover"
            width="560"
            height="315"
            src="https://www.youtube.com/embed/pOFXZT6j8S0"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media;"
            allowFullScreen
          ></iframe>
        </div>
      </PageSection>
      {projectsList && (
        <PageSection width="xl" color="bg-gray-100">
          <h2 id="projecten" className="text-center font-black pb-8">
            Projecten die we steunen
          </h2>
          <ProjectSection projects={projectsList} />
        </PageSection>
      )}
      <div id="scroll-to-donate">
        <PageSection width="xl">
          <h2 className="text-center font-black pb-8">Doneer nu</h2>
          <DonateSection />
        </PageSection>
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
      hero {
        title
        description
        donationcta
        image {
          localFile {
            childImageSharp {
              gatsbyImageData(
                width: 2600
                placeholder: BLURRED
                formats: [AUTO, WEBP, AVIF]
              )
            }
          }
        }
      }
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
            ... on WpContentNode {
              uri
            }
          }
          image {
            localFile {
              childImageSharp {
                gatsbyImageData(
                  width: 300
                  placeholder: BLURRED
                  formats: [AUTO, WEBP, AVIF]
                )
              }
            }
          }
        }
        projectb {
          title
          description
          buttontitle
          target
          progress
          pagelink {
            ... on WpContentNode {
              uri
            }
          }
          image {
            localFile {
              childImageSharp {
                gatsbyImageData(
                  width: 300
                  placeholder: BLURRED
                  formats: [AUTO, WEBP, AVIF]
                )
              }
            }
          }
        }
        projectc {
          title
          description
          buttontitle
          target
          progress
          pagelink {
            ... on WpContentNode {
              uri
            }
          }
          image {
            localFile {
              childImageSharp {
                gatsbyImageData(
                  width: 300
                  placeholder: BLURRED
                  formats: [AUTO, WEBP, AVIF]
                )
              }
            }
          }
        }
      }
    }
  }
`

export default DonatePage
