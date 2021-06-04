import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import PageSection from "../components/pageSection"
import PageHeroSmall from "../components/pageHeroSmall"
import StoriesSection from "../components/storiesSection"

const StoriesPage = ({ data }) => {
  const pageTitle = data.page.title
  const pageContent = data.page.content
  const pageHero = data.page.heroSmall
  const pageStories = data.page.listOfStoryCards

  return (
    <Layout siteTitle={pageTitle}>
      {pageHero && <PageHeroSmall {...pageHero} />}
      <PageSection width="md">
        <div dangerouslySetInnerHTML={{ __html: pageContent }} />
      </PageSection>
      <PageSection width="lg">
        <StoriesSection {...pageStories} />
      </PageSection>
    </Layout>
  )
}

export const query = graphql`
  query storiesPage($id: String) {
    page: wpPage(id: { eq: $id }) {
      uri
      title
      content
      listOfStoryCards {
        fieldGroupName
        storycarda {
          title
          label
          pagelink {
            ... on WpPage {
              uri
            }
          }
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
        storycardb {
          title
          label
          pagelink {
            ... on WpPage {
              uri
            }
          }
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
        storycardc {
          title
          label
          pagelink {
            ... on WpPage {
              uri
            }
          }
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
        storycardd {
          title
          label
          pagelink {
            ... on WpPage {
              uri
            }
          }
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

export default StoriesPage
