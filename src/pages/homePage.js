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

  return (
    <Layout pageHeroInview={inView}>
      <div ref={observable} className="relative  w-screen">
        <PageHero center {...pageHeroInfo} />
      </div>
      <PageSection width="sm">
        <div dangerouslySetInnerHTML={{ __html: data.page.content }} />
      </PageSection>
      <PageSection width="xl" color="bg-brown-100">
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
              fluid(maxWidth: 2560, quality: 92) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      }
    }
  }
`

export default HomePage
