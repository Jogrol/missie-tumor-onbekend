import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"

const DefaultPage = ({ data }) => (
  <Layout siteTitle={data.page.title}>
    <div className="container sm:max-w-screen-lg">
      <div dangerouslySetInnerHTML={{ __html: data.page.content }} />
    </div>
  </Layout>
)

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
