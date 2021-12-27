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
import { renderRichText } from "gatsby-source-contentful/rich-text"

const IndexPage = ({ data }): JSX.Element => {
  const contenful = data.page.edges[0].node
  const pageTitle = contenful.pageTitle
  const introSectionData = contenful.introSection
  const heroData = contenful.hero
  const infoSectionData = contenful.infoSection
  const videoSectionData = contenful.videoSection
  const campaingVideoSectionData = contenful.campaignVideoSection
  const projectSectionData = contenful.projectSection

  // const pageTitle = data.page.title
  //   const projectsList = Object.values(data.page.listOfProjects).filter(
  //     (item: ProjectItemDataModel) => item.title
  //   )

  //   const videoSectionInfo = data.page.videoSection
  //   const pageHeroInfo = data.page.hero

  return (
    <Layout title={pageTitle}>
      <div className="relative w-screen bg-gray-100">
        <PageHero pageHeroProps={heroData} />
        <div className="container relative z-40 px-4 divide-y-2 -mt-14 sm:-mt-20 sm:max-w-screen-md md:max-w-screen-xl sm:px-12">
          <Stats />
        </div>
      </div>
      <PageSection width="sm" color="bg-gray-100">
        <h2 className="pb-8 font-black text-center">{infoSectionData.title}</h2>
        <div>{renderRichText(infoSectionData.description)}</div>
        <div className="text-center">
          <a href={infoSectionData.callToAction.url} target="_blank">
            {infoSectionData.callToAction.title}
          </a>
        </div>
      </PageSection>
      <PageSection color="bg-white-200">
        <VideoSection videoSectionProps={videoSectionData} />
      </PageSection>
      <PageSection width="xl" color="bg-gray-100">
        <PatientStoriesSection patientStoriesProps={introSectionData} />
      </PageSection>

      <PageSection width="sm" color="bg-white-200">
        <div className="aspect-w-16 aspect-h-9">
          <iframe
            src={campaingVideoSectionData.videoUrl}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </PageSection>
      <PageSection width="xl" color="bg-gray-100">
        <h2 id="projecten" className="pb-8 font-black text-center">
          Projecten die we steunen
        </h2>
        <ProjectSection projectSectionProps={projectSectionData} />
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
export default IndexPage

export const query = graphql`
  query indexQuery {
    page: allContentfulHomePage {
      edges {
        node {
          pageTitle
          hero {
            title
            image {
              description
              gatsbyImageData(placeholder: DOMINANT_COLOR)
            }
          }
          videoSection {
            description {
              id
              description
            }
            videoUrl
          }
          introSection {
            patientStories {
              url
              title
              image {
                description
                gatsbyImageData(placeholder: DOMINANT_COLOR)
              }
            }
            title
            node_locale
            description {
              raw
            }
            callToAction {
              ... on ContentfulButton {
                title
                url
                openInAnotherTab
              }
            }
          }
          campaignVideoSection {
            videoUrl
          }
          infoSection {
            title
            description {
              raw
            }
            callToAction {
              ... on ContentfulLink {
                title
                url
                openInAnotherTab
              }
            }
          }
          projectSection {
            id
            title
            image {
              description
              gatsbyImageData(placeholder: DOMINANT_COLOR)
            }
            description {
              id
              description
            }
            projectLink {
              ... on ContentfulLink {
                title
                url
                openInAnotherTab
              }
            }
            target {
              goal
              progress
            }
          }
        }
      }
    }
  }
`

// export const query = graphql`
//   query donatePage($id: String) {
//     page: wpPage(id: { eq: $id }) {
//       uri
//       title
//       content
//       hero {
//         title
//         description
//         donationcta
//         image {
//           localFile {
//             childImageSharp {
//               gatsbyImageData(
//                 width: 2600
//                 placeholder: BLURRED
//                 formats: [AUTO, WEBP, AVIF]
//               )
//             }
//           }
//         }
//       }
//       videoSection {
//         introductiontext
//         videolink {
//           url
//           target
//           title
//         }
//       }
//       listOfProjects {
//         projecta {
//           title
//           description
//           buttontitle
//           target
//           progress
//           pagelink {
//             ... on WpContentNode {
//               uri
//             }
//           }
//           image {
//             localFile {
//               childImageSharp {
//                 gatsbyImageData(
//                   width: 300
//                   placeholder: BLURRED
//                   formats: [AUTO, WEBP, AVIF]
//                 )
//               }
//             }
//           }
//         }
//         projectb {
//           title
//           description
//           buttontitle
//           target
//           progress
//           pagelink {
//             ... on WpContentNode {
//               uri
//             }
//           }
//           image {
//             localFile {
//               childImageSharp {
//                 gatsbyImageData(
//                   width: 300
//                   placeholder: BLURRED
//                   formats: [AUTO, WEBP, AVIF]
//                 )
//               }
//             }
//           }
//         }
//         projectc {
//           title
//           description
//           buttontitle
//           target
//           progress
//           pagelink {
//             ... on WpContentNode {
//               uri
//             }
//           }
//           image {
//             localFile {
//               childImageSharp {
//                 gatsbyImageData(
//                   width: 300
//                   placeholder: BLURRED
//                   formats: [AUTO, WEBP, AVIF]
//                 )
//               }
//             }
//           }
//         }
//       }
//     }
//   }
// `
