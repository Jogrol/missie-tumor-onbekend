import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import PageSection from "../components/pageSection"
import DonateInformation from "../components/donateInformation"
import ProjectInformationList from "../components/projectInformationList"
import PageHero from "../components/pageHero"
import StatsInformation from "../components/statsInformation"
import useIntersect from "../hooks/useIntersect"

const DonatePage = ({ data }) => {
  const { observable, inView } = useIntersect({ threshold: 1 })

  const donateOptions = data.page.donateOptions
  const projectInfo = data.page.projectInfo
  const pageHero = data.page.hero

  return (
    <Layout pageHeroInview={inView}>
      <div ref={observable} className="relative h-screen w-screen">
        <div className="absolute left-0 top-0 h-full w-full z-0">
          <PageHero {...pageHero} />
        </div>
        <div className="relative w-full h-full pt-20 z-10">
          <StatsInformation />
        </div>
      </div>
      <PageSection>
        <div
          className="container sm:max-w-screen-md"
          dangerouslySetInnerHTML={{ __html: data.page.content }}
        />
      </PageSection>

      {donateOptions && (
        <PageSection>
          <DonateInformation {...donateOptions} />
        </PageSection>
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
