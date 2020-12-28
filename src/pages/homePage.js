import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"

const HomePage = ({ data }) => (
  <Layout>
    <div>
      <div>{JSON.stringify(data)}</div>
    </div>
  </Layout>
)

export const query = graphql`
  query HomePage($id: String) {
    page: wpPage(id: { eq: $id }) {
      uri
      title
      hero {
        description
        fieldGroupName
        subtitle
        title
      }
      mainContent {
        richttextfield
      }
    }
  }
`

export default HomePage
