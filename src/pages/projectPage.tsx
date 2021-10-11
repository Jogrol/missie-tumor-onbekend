import React from "react"
import { graphql } from "gatsby"
import scrollTo from "gatsby-plugin-smoothscroll"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import PageSection from "../components/pageSection"
import PageHeroSmall from "../components/pageHeroSmall"
import DonateSection from "../components/donateSection"
import donateOptions from "../donateOptions"
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
      <PageSection width="md">
        <div className="rounded-t-md">
          <ProgressBar {...projectProgress} />
        </div>
        <div className="w-full bg-gray-100 rounded-md pt-8">
          <div className="sm:w-full flex justify-center bg-gray-100 px-4 sm:px:0">
            <button
              onClick={() => scrollTo("#scroll-to-donate")}
              className="btn btn-primary w-full sm:w-auto"
            >
              Doneer nu
            </button>
          </div>
          <div className="w-full sm:px-12">
            <GatsbyImage
              image={pageHeroImage}
              alt="project afbeelding"
              className="mt-8 w-full h-full object-fill sm:rounded-lg"
            />
          </div>
          <div className="px-4 sm:px-12 pb-8 sm:pb-12">
            <div
              className="col-span-4 sm:col-span-2"
              dangerouslySetInnerHTML={{ __html: pageContent }}
            />
          </div>
        </div>
      </PageSection>
      <div id="scroll-to-donate">
        <PageSection width="xl">
          <h2 className="text-center pb-12">Doneer nu</h2>
          <DonateSection {...donateOptions} />
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
