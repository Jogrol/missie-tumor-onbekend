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

const IndexPage = ({ data }): JSX.Element => {
  const contenful = data.page.edges[0].node
  const pageTitle = contenful.pageTitle
  const introSection = contenful.introSection

  // const pageTitle = data.page.title
  //   const projectsList = Object.values(data.page.listOfProjects).filter(
  //     (item: ProjectItemDataModel) => item.title
  //   )

  //   const videoSectionInfo = data.page.videoSection
  //   const pageHeroInfo = data.page.hero

  return (
    <Layout title={pageTitle}>
      <PageSection width="xl" color="bg-gray-100">
        <h2 className="pb-8 font-black text-center">{introSection.title}</h2>
        <PatientStoriesSection patientStoriesProps={introSection} />
      </PageSection>
      {/* <div className="relative w-screen bg-gray-100">
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
        <div className="text-center">
          <a href="https://www.missietumoronbekend.nl/pto/" target="_blank">
            Meer informatie over PTO
          </a>
        </div>
      </PageSection>
      <PageSection color="bg-white-200">
        <VideoSection {...videoSectionInfo} />
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
      </div> */}
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
          introSection {
            patientStories {
              url
              title
              image {
                description
                gatsbyImageData(placeholder: DOMINANT_COLOR)
              }
            }
            callToAction {
              ... on ContentfulButton {
                id
                title
                url
                openInAnotherTab
              }
            }
            title
            node_locale
            description {
              raw
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
