import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import PageSection from "../components/pageSection"
import PageHeroSmall from "../components/pageHeroSmall"
import { DefaultPageDataModel } from "../models/pages/defaultPageData.model"

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

  return (
    <Layout title={pageTitle}>
      {pageHero && <PageHeroSmall {...pageHero} />}
      <PageSection width="md">
        {pageTitle === "Bedankt voor uw donatie" && (
          <div>
            <p>
              Vriendelijk bedankt voor uw donatie aan Missie Tumor Onbekend. Met
              uw steun kunnen wij projecten realiseren en initiatieven aanjagen
              die de zorg voor patiënten met een onbekende primaire tumor
              verbeteren.
            </p>

            <p>
              Voor meer informatie over onze huidige projecten kunt u terecht
              bij '
              <a
                href="https://steunmissietumoronbekend.nl/#projecten"
                data-type="URL"
                data-id="https://steunmissietumoronbekend.nl/#projecten"
              >
                projecten die we steunen
              </a>
              '
            </p>

            <p>
              Wij zouden u graag op de hoogte houden van onze vorderingen door u
              elk kwartaal onze nieuwsbrief te sturen. Klik{" "}
              <a
                href="https://www.missietumoronbekend.nl/info/#nieuwsbriefpto"
                data-type="URL"
                data-id="https://www.missietumoronbekend.nl/info/#nieuwsbriefpto"
              >
                hier
              </a>
              als u deze wenst te ontvangen.
            </p>
          </div>
        )}
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
