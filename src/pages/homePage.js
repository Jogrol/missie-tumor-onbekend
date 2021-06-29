import React from "react"
import { graphql } from "gatsby"
import PageSection from "../components/pageSection"
import useIntersect from "../hooks/useIntersect"
import Layout from "../components/layout"
import PageHero from "../components/pageHero"
import LatestNewsSection from "../components/latestNewsSection"

const HomePage = ({ data }) => {
  const { observable, inView } = useIntersect({ threshold: 1 })
  const pageHeroInfo = data.page.hero
  const pageContent = data.page.content

  return (
    <Layout pageHeroInview={inView}>
      <div ref={observable} className="relative  w-screen">
        <PageHero center {...pageHeroInfo} />
      </div>
      <PageSection width="sm">
        <div dangerouslySetInnerHTML={{ __html: pageContent }} />
      </PageSection>
      <PageSection width="lg" color="bg-brown-100">
        <LatestNewsSection />
      </PageSection>
    </Layout>
  )
}

export const query = graphql`
  query HomePage($id: String) {
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
    }
  }
`

export default HomePage
