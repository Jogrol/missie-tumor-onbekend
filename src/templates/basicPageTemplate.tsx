import React from "react"
import Layout from "../components/layout"
import PageSection from "../components/pageSection"
import PageHeroSmall from "../components/pageHeroSmall"
import { renderRichText } from "gatsby-source-contentful/rich-text"

const BasicPageTemplate = ({ data }): JSX.Element => {
  const contenful = data.page.edges[0].node
  const pageTitle = contenful.title
  const pageHero = contenful.hero
  const pageContent = contenful.content

  return (
    <Layout title={pageTitle}>
      <PageHeroSmall pageHeroSmallProps={pageHero} />
      <PageSection width="md">
        <div>{renderRichText(pageContent)}</div>
      </PageSection>
    </Layout>
  )
}

export default BasicPageTemplate
