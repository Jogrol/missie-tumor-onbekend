import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import PageSection from "../components/pageSection"

const DefaultPage = ({ data }) => {
  return (
    <Layout siteTitle={data.page.title}>
      <PageSection>
        <div
          className="pt-8"
          dangerouslySetInnerHTML={{ __html: data.page.content }}
        />
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
    }
  }
`

export default DefaultPage
