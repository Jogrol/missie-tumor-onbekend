import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import PageSection from "../components/pageSection"
import DonateInformation from "../components/donateInformation"
import PageHero from "../components/pageHero"
import useIntersect from "../hooks/useIntersect"
import VideoSection from "../components/videoSection"

const DonatePage = ({ data }) => {
  const { observable, inView } = useIntersect({ threshold: 1 })

  const donateOptions = data.page.donateOptions
  const pageHero = data.page.hero

  return (
    <Layout pageHeroInview={inView}>
      <div ref={observable} className="relative  w-screen">
        <PageHero {...pageHero} />
      </div>

      <PageSection color="bg-gray-200">
        <VideoSection />
      </PageSection>
      {donateOptions && (
        <div id="scroll-to-donate" className="sm:h-screen">
          <PageSection>
            <DonateInformation {...donateOptions} />
          </PageSection>
        </div>
      )}
      {/* 
      {projectInfo && (
        <PageSection width="xl">
          <ProjectInformationList {...projectInfo} />
        </PageSection>
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
