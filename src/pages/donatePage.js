import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import PageSection from "../components/pageSection"
import DonateSection from "../components/donateSection"
import PageHero from "../components/pageHero"
import useIntersect from "../hooks/useIntersect"
import VideoSection from "../components/videoSection"
import ProjectSection from "../components/projectSection"
import FactSection from "../components/factsSection"

const DonatePage = ({ data }) => {
  const { observable, inView } = useIntersect({ threshold: 1 })


  // Should come from WP
  const donateOptions = [
    {
      title: "Eenmalige donatie algemeen",
      description:
        "Met een algemene eenmallige donatie aan Missie Tumor Onbekend draag je bij aan algehele zorgverbeteringen voor PTO-patiënten in hun strijd tegen de onbekende primaire tumor. Doneer snel en gemakkelijk online via iDeal.",
    },
    {
      title: "Periodieke donatie en schenking",
      description:
        "Wil je Missie Tumor Onbekend structureel en duurzaam ondersteunen, vul dan hier ons donatie formulier in.",
    },
    {
      title: "Nalatenschap",
      description:
        "Vindt u het belangrijk dat er ook na uw overlijden doorgewerkt wordt aan baanbrekend onderzoek en innovatie voor PTO-patiënten, op dat deze groep een grotere kans op leven krijgt? Dan kunt u Missie Tumor Onbekend opnemen in uw testament.",
    },
    {
      title: "Kom zelf in actie / organiseer zelf een collecte",
      description:
        "Wil jij ook in actie komen voor Missie Tumor Onbekend? Dat kan, neem hiervoor contact met ons op via warnyta@missietumoronbekend.nl. Bijvoorbeeld als je een leuke sportieve of andersoortige uitdaging wil aangaan en daarvoor donaties voor Missie Tumor Onbekend wil ophalen. Wij zullen je ondersteunen met informatie en materialen over onze Missie om jouw actie tot een succes te maken.",
    },
  ]

  const projectInfo = data.page.listOfProjects
  const videoSectionInfo = data.page.videoSection
  const pageHeroInfo = data.page.hero

  return (
    <Layout pageHeroInview={inView}>
      <div ref={observable} className="relative  w-screen">
        <PageHero {...pageHeroInfo} />
      </div>
      <PageSection width="xl" color="bg-brown-100">
        <FactSection />
      </PageSection>
      <PageSection color="bg-white-200">
        <VideoSection {...videoSectionInfo} />
      </PageSection>
      {projectInfo && (
        <PageSection width="xl" color="bg-brown-100">
          <h2 className="text-center text-white pb-12">
            Projecten die we steunen
          </h2>
          <ProjectSection {...projectInfo} />
        </PageSection>
      )}
      {donateOptions && (
        <div id="scroll-to-donate">
          <PageSection  width="xl">
            <h2 className="text-center pb-12">Doneer nu</h2>
            <DonateSection {...donateOptions} />
          </PageSection>
        </div>
      )}
    </Layout>
  )
}

export const query = graphql`
  query donatePage($id: String) {
    page: wpPage(id: { eq: $id }) {
      uri
      title
      content
      hero {
        title
        description
        donationcta
        image {
          localFile {
            childImageSharp {
              gatsbyImageData(
                width: 2600
                placeholder: BLURRED
                formats: [AUTO, WEBP, AVIF]
              )
            }
          }
        }
      }
      videoSection {
        introductiontext
        videolink {
          url
          target
          title
        }
      }
      listOfProjects {
        projecta {
          title
          description
          buttontitle
          target
          pogress
          pagelink {
            ... on WpContentNode {
              uri
            }
          }
          image {
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
        projectb {
          title
          description
          buttontitle
          target
          pogress
          pagelink {
            ... on WpContentNode {
              uri
            }
          }
          image {
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
        projectc {
          title
          description
          buttontitle
          target
          pogress
          pagelink {
            ... on WpContentNode {
              uri
            }
          }
          image {
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
      }
    }
  }
`

export default DonatePage
