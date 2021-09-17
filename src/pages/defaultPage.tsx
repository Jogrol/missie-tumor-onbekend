import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import PageSection from "../components/pageSection"
import PageHeroSmall from "../components/pageHeroSmall"
import Seo from "../components/seo"
import { DefaultPageDataModel } from "../models/pages/defaultPageData.model"

const DefaultPage = ({ data }: DefaultPageDataModel): JSX.Element => {
  const pageTitle = data.page.title
  const pageContent = data.page.content
  const pageHero = data.page.heroSmall

  return (
    <Layout>
      <Seo title={pageTitle} />
      {pageHero && <PageHeroSmall {...pageHero} />}
      <PageSection width="sm">
        <div dangerouslySetInnerHTML={{ __html: pageContent }} />
      </PageSection>
    </Layout>
  )
}

export const query = graphql`
  query defaultPage($id: String) {
    page: wpPage(id: { eq: $id }) {
      uri
      title
      content
      heroSmall {
        title
        image {
          localFile {
            childImageSharp {
              gatsbyImageData(
                width: 1400
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

export default DefaultPage