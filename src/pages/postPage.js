import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import PageSection from "../components/pageSection"

const PostPage = ({ data }) => (
  <Layout siteTitle={data.page.title}>
    <PageSection width="lg">
      <div className="grid  sm:grid-cols-3">
        <div className="col-span-2">
          <h1>{data.page.title}</h1>
          <div dangerouslySetInnerHTML={{ __html: data.page.content }} />
        </div>
      </div>
    </PageSection>
  </Layout>
)

export const query = graphql`
  query postPage($id: String) {
    page: wpPost(id: { eq: $id }) {
      uri
      title
      content
    }
  }
`

export default PostPage
