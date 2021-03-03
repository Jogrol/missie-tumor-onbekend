import React from "react"
import { graphql } from "gatsby"
import PageSection from "../components/pageSection"
import useIntersect from "../hooks/useIntersect"
import Layout from "../components/layout"
import PageHero from "../components/pageHero"

const HomePage = ({ data }) => {
  console.log("data", data)
  const { observable, inView } = useIntersect({ threshold: 1 })
  const pageHeroInfo = data.page.hero

  return (
    <Layout pageHeroInview={inView}>
      <div ref={observable} className="relative  w-screen">
        <PageHero center {...pageHeroInfo} />
      </div>
      <PageSection>
        <div dangerouslySetInnerHTML={{ __html: data.page.content }} />
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
      mainContent {
        richttextfield
      }
    }
  }
`

export default HomePage
