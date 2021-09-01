import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import PageSection from "../components/pageSection"
import DonateSection from "../components/donateSection"
import PageHero from "../components/pageHero"
import VideoSection from "../components/videoSection"
import ProjectSection from "../components/projectSection"
import Stats from "../components/stats"
import donateOptions from "../donateOptions"

const DonatePage = ({ data }) => {
  const projectInfo = data.page.listOfProjects
  const videoSectionInfo = data.page.videoSection
  const pageHeroInfo = data.page.hero

  return (
    <Layout>
      <div className="relative  w-screen">
        <PageHero {...pageHeroInfo} />
        <div className="-mt-14 sm:-mt-20 relative z-40 sm:max-w-screen-md md:max-w-screen-xl px-4 sm:px-12 divide-y-2 container">
          <Stats />
        </div>
      </div>
      <PageSection color="bg-white-200">
        <VideoSection {...videoSectionInfo} />
      </PageSection>
      {projectInfo && (
        <PageSection width="xl" color="bg-brown-100">
          <h2 id="projecten" className="text-center text-white pb-12">
            Projecten die we steunen
          </h2>
          <ProjectSection {...projectInfo} />
        </PageSection>
      )}
      <div id="scroll-to-donate">
        <PageSection width="xl">
          <h2 className="text-center pb-12">Doneer nu</h2>
          <DonateSection {...donateOptions} />
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
