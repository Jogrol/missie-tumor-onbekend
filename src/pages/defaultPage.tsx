import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import PageSection from "../components/pageSection"
import PageHeroSmall from "../components/pageHeroSmall"
import { DefaultPageDataModel } from "../models/pages/defaultPageData.model"
import PrivacyStatement from "../components/content/PrivacyStament"
import ThankYouMessage from "../components/content/ThankYouMessage"
import MissionBackground from "../components/content/MissionBackground"

const DefaultPage = ({ data }: DefaultPageDataModel): JSX.Element => {
  // Add null checks to prevent errors
  if (!data || !data.page) {
    return (
      <Layout title="Error Loading Page">
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-3xl font-bold text-red-600">
            Error Loading Page
          </h1>
          <p className="mt-4">
            There was an error loading the page data. Please try again later.
          </p>
        </div>
      </Layout>
    )
  }

  const pageTitle = data.page.title || "Default Page"
  const pageHero = data.page.heroSmall || null

  // Function to render the appropriate content based on page title
  const renderContent = () => {
    switch (pageTitle) {
      case "Privacy & cookie verklaring":
        return <PrivacyStatement />;
      case "Bedankt voor uw donatie":
        return <ThankYouMessage />;
      case "Fondsenwervingsbeleid":
        return <MissionBackground />;
      default:
        return <div dangerouslySetInnerHTML={{ __html: data.page.content || "" }} />;
    }
  };

  return (
    <Layout title={pageTitle}>
      {pageHero && <PageHeroSmall {...pageHero} />}
      <PageSection width="md">
        {renderContent()}
      </PageSection>
    </Layout>
  )
}

export const query = graphql`
  query defaultPage($id: String) {
    page: wordpressDataJson(id: { eq: $id }) {
      uri
      title
      content
      heroSmall {
        title
        image {
          localFile {
            childImageSharp {
              gatsbyImageData {
                images {
                  fallback {
                    src
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`

export default DefaultPage
