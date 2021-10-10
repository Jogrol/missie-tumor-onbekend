import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import PageSection from "../components/pageSection"
import DonateSection from "../components/donateSection"
import PageHero from "../components/pageHero"
import VideoSection from "../components/videoSection"
import ProjectSection from "../components/projectSection"
import Stats from "../components/stats"
import { DonatePageDataModel } from "../models/pages/donatePageData.model"
import { ProjectItemDataModel } from "../models/projectItemData.model"
import PageHeroWithVideo from "../components/pageHeroWithVideo"
import PatientStoriesSection from "../components/patientStoriesSection"

const DonatePage = ({ data }: DonatePageDataModel): JSX.Element => {
  const pageTitle = data.page.title
  const projectsList = Object.values(data.page.listOfProjects).filter(
    (item: ProjectItemDataModel) => item.title
  )
  const patientStoriesImages = Object.values(data.page.patientstoriesimages)
  const videoSectionInfo = data.page.videoSection
  const pageHeroInfo = data.page.hero

  console.log(patientStoriesImages)
  return (
    <Layout title={pageTitle}>
      <div className="relative w-screen bg-gray-100">
        <PageHeroWithVideo />
        <div className="-mt-14 sm:-mt-20 relative z-40 sm:max-w-screen-md md:max-w-screen-xl px-4 sm:px-12 divide-y-2 container">
          <Stats />
        </div>
      </div>
      <PageSection width="xl" color="bg-gray-100">
        <h2 className="text-center font-black my-8">
          Titel van deze sectie
        </h2>
        <PatientStoriesSection patientStoriesImages={patientStoriesImages} />
      </PageSection>
      <PageSection color="bg-white-200">
        <VideoSection {...videoSectionInfo} />
      </PageSection>
      {projectsList && (
        <PageSection width="xl" color="bg-gray-100">
          <h2 id="projecten" className="text-center font-black my-8">
            Projecten die we steunen
          </h2>
          <ProjectSection projects={projectsList} />
        </PageSection>
      )}
      <div id="scroll-to-donate">
        <PageSection width="xl">
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
      patientstoriesimages {
        patientenverhaalA {
          altText
          localFile {
            childImageSharp {
              gatsbyImageData(
                width: 400
                placeholder: BLURRED
                formats: [AUTO, WEBP, AVIF]
              )
            }
          }
        }
        patientenverhaalB {
          altText
          localFile {
            childImageSharp {
              gatsbyImageData(
                width: 400
                placeholder: BLURRED
                formats: [AUTO, WEBP, AVIF]
              )
            }
          }
        }
        patientenverhaalC {
          altText
          localFile {
            childImageSharp {
              gatsbyImageData(
                width: 400
                placeholder: BLURRED
                formats: [AUTO, WEBP, AVIF]
              )
            }
          }
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
