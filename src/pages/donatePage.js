import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import PageSection from "../components/pageSection"
import DonateSection from "../components/donateSection"
import PageHero from "../components/pageHero"
import useIntersect from "../hooks/useIntersect"
import VideoSection from "../components/videoSection"
import ProjectSection from "../components/projectSection"

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
      <PageSection color="bg-gray-200">
        <VideoSection />
      </PageSection>
      {projectInfo && (
        <PageSection width="xl">
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
        firstproject {
          title
          buttontitle
          description
          fieldGroupName
          pagelink {
            ... on WpPage {
              uri
            }
          }
        }
        secondproject {
          buttontitle
          description
          fieldGroupName
          title
          pagelink {
            ... on WpPage {
              uri
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
