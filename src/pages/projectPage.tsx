import React from "react"
import { graphql } from "gatsby"
import scrollTo from "gatsby-plugin-smoothscroll"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import PageSection from "../components/pageSection"
import PageHeroSmall from "../components/pageHeroSmall"
import DonateSection from "../components/donateSection"
import ProgressBar from "../components/progressBar"
import { ProjectPageDataModel } from "../models/pages/projectPageData.model"

const ProjectPage = ({ data }: ProjectPageDataModel): JSX.Element => {
  const pageTitle = data.page.title
  const pageContent = data.page.content
  const pageHero = data.page.heroSmall
  const projectProgress = data.page.projectProgress

  const pageHeroImage = getImage(data.page.project.projectimage?.localFile)

  return (
    <Layout title={pageTitle}>
      {pageHero && <PageHeroSmall {...pageHero} />}
      <PageSection width="md" color="bg-gray-100 ">
        <GatsbyImage
          image={pageHeroImage}
          alt="project afbeelding"
          className="w-full object-fill rounded-t-lg"
        />
        <ProgressBar {...projectProgress} />
        <div className="mt-4">
          <div
            className="col-span-4 sm:col-span-2"
            dangerouslySetInnerHTML={{ __html: pageContent }}
          />
        </div>
      </PageSection>
      <div id="scroll-to-donate">
        <PageSection width="xl">
          <h2 className="text-center pb-12">Doneer nu</h2>
          <DonateSection />
        </PageSection>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query projectPage($id: String) {
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
      project {
        projectimage {
          localFile {
            childImageSharp {
              gatsbyImageData(
                width: 300
                placeholder: BLURRED
                formats: [AUTO, WEBP, AVIF]
              )
            }
          }
        }
      }
      projectProgress {
        target
        progressie
      }
    }
  }
`

export default ProjectPage
