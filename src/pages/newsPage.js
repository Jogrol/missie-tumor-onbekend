import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import PageSection from "../components/pageSection"
import PageHeroSmall from "../components/pageHeroSmall"
import NewsPageSection from "../components/newsPageSection"

const NewsPage = ({ data }) => {
  const pageTitle = data.page.title
  const pageHero = data.page.heroSmall
  const posts = data.posts.nodes

  return (
    <Layout siteTitle={pageTitle}>
      {pageHero && <PageHeroSmall {...pageHero} />}
      <PageSection width="lg">
        <NewsPageSection posts={posts} />
      </PageSection>
    </Layout>
  )
}

export const query = graphql`
  query newsPage($id: String) {
    posts: allWpPost {
      nodes {
        id
        content
        date(fromNow: false, formatString: "DD MMMM, YYYY", locale: "NL")
        title
        uri
        featuredImage {
          node {
            id
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

export default NewsPage
