import React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"

import PageSection from "../components/pageSection"
import { Link } from "gatsby"

const NotFoundPage = (): JSX.Element => (
  <Layout>
    <Seo title="404: Not found" />
    <PageSection width="xl">
      <div className="w-full h-lg flex flex-col justify-center items-center">
        <h1>404: Not Found</h1>
        <p>Er is iets fout gegaan.</p>

        <Link to="/">Ga naar de homepage</Link>
      </div>
    </PageSection>
  </Layout>
)

export default NotFoundPage
