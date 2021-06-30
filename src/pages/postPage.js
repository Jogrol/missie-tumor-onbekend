import React from "react"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import PageSection from "../components/pageSection"
import LatestNewsList from "../components/latestNewsList"
import PageHeroSmall from "../components/pageHeroSmall"

const PostPage = ({ data }) => {
  const image = getImage(data.page.featuredImage?.node?.localFile)
  const pageHero = data.header.heroSmall

  return (
    <Layout siteTitle={data.page.title}>
      {pageHero && <PageHeroSmall {...pageHero} />}
      <PageSection width="lg">
        <div className="w-full sm:grid sm:grid-cols-3">
          <div className="sm:col-span-2 sm:pr-12">
            {image && (
              <GatsbyImage image={image} alt="header" className="w-full mb-4" />
            )}
            
            <h1>{data.page.title}</h1>
            <p className="mb-4">{data.page.date}</p>
            <div dangerouslySetInnerHTML={{ __html: data.page.content }} />
          </div>
          <div className="sm:col-span-">
            <LatestNewsList />
          </div>
        </div>
      </PageSection>
    </Layout>
  )
}

export const query = graphql`
  query postPage($id: String) {
    page: wpPost(id: { eq: $id }) {
      uri
      title
      content
      date(formatString: "DD MMMM, YYYY", locale: "NL")
      featuredImage {
        node {
          id
          localFile {
            childImageSharp {
              gatsbyImageData(
                width: 1200
                placeholder: BLURRED
                formats: [AUTO, WEBP, AVIF]
              )
            }
          }
        }
      }
    }
    header: wpPage(id: { eq: "cG9zdDo0NzA=" }) {
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

export default PostPage
