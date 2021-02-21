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
  const pageHero = data.page.hero

  return (
    <Layout pageHeroInview={inView}>
      <div ref={observable} className="relative  w-screen">
        <PageHero {...pageHero} />
      </div>
      <PageSection width="xl" color="bg-yellow-600">
        <FactSection />
      </PageSection>
      <PageSection color="bg-white-200">
        <VideoSection />
      </PageSection>
      {projectInfo && (
        <PageSection width="xl" color="bg-yellow-600">
          <ProjectSection {...projectInfo} />
        </PageSection>
      )}
      {donateOptions && (
        <div id="scroll-to-donate">
          <PageSection>
            <DonateSection {...donateOptions} />
          </PageSection>
        </div>
      )}
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
        subtitle
        description
        image {
          uri
          localFile {
            childImageSharp {
              fluid(maxWidth: 1280) {
                ...GatsbyImageSharpFluid_noBase64
              }
            }
          }
        }
      }
      projectInfo {
        projecta {
          title
          buttontitle
          description
          fieldGroupName
          pagelink {
            ... on WpPage {
              uri
            }
          }
          image {
            uri
            localFile {
              childImageSharp {
                fluid(maxWidth: 600) {
                  ...GatsbyImageSharpFluid_noBase64
                }
              }
            }
          }
        }
        projectb {
          buttontitle
          description
          fieldGroupName
          title
          pagelink {
            ... on WpPage {
              uri
            }
          }
          image {
            uri
            localFile {
              childImageSharp {
                fluid(maxWidth: 600) {
                  ...GatsbyImageSharpFluid_noBase64
                }
              }
            }
          }
        }
      }
      donateOptions {
        tikkie {
          title
          description
          ctaTitle
          ctalink {
            ... on WpPage {
              uri
            }
          }
        }
        form {
          title
          description
          ctaTitle
          ctalink {
            ... on WpPage {
              uri
            }
          }
        }
        digicollect {
          title
          description
          ctaTitle
          ctalink {
            ... on WpPage {
              uri
            }
          }
        }
      }
    }
  }
`

export default DonatePage
