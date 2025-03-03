import React from "react"
import { graphql } from "gatsby"
import scrollTo from "gatsby-plugin-smoothscroll"

// Import project images directly
import informatievoorziening from "../images/informatievoorziening.jpeg"
import wetenschappelijkonderzoek from "../images/wetenschappelijkonderzoek.jpeg"
import zorg from "../images/zorg.jpeg"

import Layout from "../components/layout"
import PageSection from "../components/pageSection"
import PageHeroSmall from "../components/pageHeroSmall"
import DonateSection from "../components/donateSection"
import ProgressBar from "../components/progressBar"
import { ProjectPageDataModel } from "../models/pages/projectPageData.model"

const ProjectPage = ({ data }: ProjectPageDataModel): JSX.Element => {
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

  const pageTitle = data.page.title || "Project Page"
  const pageContent = data.page.content || ""
  const pageHero = data.page.heroSmall || null
  const projectProgress = data.page.projectProgress || {
    progressie: 0,
    target: 100,
  }

  // Select the appropriate image based on the project title
  const getProjectImage = () => {
    if (pageTitle === "Informatievoorziening & bewustwording")
      return informatievoorziening
    if (pageTitle === "Ondersteunen van wetenschappelijk onderzoek")
      return wetenschappelijkonderzoek
    if (pageTitle === "Verbetering inzet zorg") return zorg
    return null
  }

  const projectImage = getProjectImage()

  return (
    <Layout title={pageTitle}>
      {pageHero && <PageHeroSmall {...pageHero} />}
      <PageSection width="md" color="bg-gray-100 ">
        {projectImage && (
          <img
            src={projectImage}
            alt={`${pageTitle} afbeelding`}
            className="w-full object-cover rounded-t-lg h-64"
          />
        )}
        {projectProgress && <ProgressBar {...projectProgress} />}
        <div className="mt-4">
          {pageTitle === "Ondersteunen van wetenschappelijk onderzoek" && (
            <div className="col-span-4 sm:col-span-2">
              <h3>
                <strong>Doel: €100.000</strong>
              </h3>
              <p>
                Missie Tumor Onbekend steunt wetenschappers en zorgverleners
                graag in relevante onderzoeken naar betere diagnostiek,
                geneesmiddelen, tumorgerichte behandelingen en palliatieve zorg
                voor een onbekende primaire tumor. Door nieuwe inzichten kan de
                schrijnende lage overleving van een PTO verbeteren en de
                kwaliteit van leven voor de patiënt vooruit. Daarnaast neemt
                Missie Tumor Onbekend ook zelf het voortouw in het bijeenbrengen
                van coalities om gezamenlijk wetenschappelijk onderzoek uit te
                voeren dat in het belang van de PTO-patiënt is. Bij het
                beoordelen van wetenschappelijk onderzoeksvoorstellen krijgt
                Missie Tumor Onbekend steun van
                <a
                  href="http://cupp-nl.eu/"
                  data-type="URL"
                  data-id="http://cupp-nl.eu/"
                >
                  CUPP-NL
                </a>
                , het landelijke expertplatform over PTO.
              </p>
              <p>
                <strong>
                  Missie Tumor Onbekend wil onder andere de volgende projecten
                  realiseren in het kader van het ondersteunen van
                  wetenschappelijk onderzoek.
                </strong>
              </p>
              <ul>
                <li>
                  Extra ondersteuning voor FAPI-PET studie (ingediend bij KWF,
                  in afwachting van besluit), voor meer informatie kunt u
                  terecht bij:
                  <a
                    href="http://cupp-nl.eu/projects/18f-f-fapi-petct-to-identify-carcinoma-of-hitherto-unknown-primary-origin-improving-minimally-invasive-cancer-diagnostics/"
                    data-type="URL"
                    data-id="http://cupp-nl.eu/projects/18f-f-fapi-petct-to-identify-carcinoma-of-hitherto-unknown-primary-origin-improving-minimally-invasive-cancer-diagnostics/"
                  >
                    [18F]F-FAPI PET/CT to Identify Carcinoma of hitherto Unknown
                    Primary origin: improving minimally-invasive cancer
                    diagnostics. | CUPP NL
                  </a>
                </li>
                <li>
                  Het ondersteunen van de landelijke database van klinische
                  geanonimiseerde data van PTO- patiënten om zo de impact van
                  het PTO-zorgpad in kaart te brengen en ook toekomstig
                  wetenschappelijk onderzoek te faciliteren
                </li>
              </ul>
            </div>
          )}
          {pageTitle === "Informatievoorziening & bewustwording" && (
            <div className="col-span-4 sm:col-span-2">
              <h3>
                <strong>Doel: €25.000</strong>
              </h3>

              <p>
                Primaire tumor onbekend is een relatief onbekende
                kankerdiagnose, juist omdat er geen complete diagnose gegeven
                kan worden. Echter hebben deze mensen wel te maken met
                uitgezaaide kanker. Missie Tumor Onbekend wil graag dat alle
                patiënten, naasten, zorgverleners en onderzoekers goed op de
                hoogte blijven van de laatste kennis en&nbsp; vooruitgang, en
                ontwikkelt materialen ten behoeve hiervan. Daarnaast werkt
                Missie Tumor Onbekend ook aan bredere maatschappelijke awareness
                en bewustwording, zodat PTO-patiënten zich meer gesteund voelen.
                Meer bekendheid creëert ook nieuwe mogelijkheden om meer
                projecten voor PTO-patiënten te realiseren.
              </p>

              <p>
                <strong>
                  Missie Tumor Onbekend wil onder andere de volgende projecten
                  realiseren in het kader van informatievoorziening &amp;
                  bewustwording.
                </strong>
              </p>

              <ul>
                <li>
                  Meer verspreiding van de
                  <a
                    href="/static/1aae3e7b2fba425c574c27affa8dc961/PZK-folder-PTO_online.pdf"
                    data-type="URL"
                    data-id="/static/1aae3e7b2fba425c574c27affa8dc961/PZK-folder-PTO_online.pdf"
                  >
                    PTO informatiefolder
                  </a>
                  voor patiënten en naasten
                </li>
                <li>
                  Organisatie van het eerste landelijke PTO symposium voor
                  zorgverleners, patiënten en wetenschappers. Het symposium zal
                  in samenwerking met
                  <a
                    href="http://cupp-nl.eu/"
                    data-type="URL"
                    data-id="http://cupp-nl.eu/"
                  >
                    CUPP-NL
                  </a>
                  georganiseerd worden
                </li>
                <li>Extra inzet van de PTO awareness campagne </li>
              </ul>
            </div>
          )}
          {pageTitle === "Verbetering inzet zorg" && (
            <div className="col-span-4 sm:col-span-2">
              <h3>
                <strong>Doel: €75.000</strong>
              </h3>

              <p>
                Momenteel wordt twee-derde van de PTO-patiënten niet behandeld. Missie Tumor Onbekend werkt samen met zorgverleners hard aan het vergroten van de toegang tot diagnostiek, tumorgerichte behandelingen, palliatieve zorg en psychosociale steun. Missie Tumor Onbekend is betrokken bij de inrichting van het landelijke zorgpad voor PTO en vernieuwingen van de landelijke klinische richtlijn, en steunt projecten die de implementatie en inzet hiervan vergroten.
              </p>

              <p>
                <strong>
                  Missie Tumor Onbekend wil onder andere de volgende projecten realiseren in het kader van het verbeteren van de inzet van zorg voor PTO-patiënten.
                </strong>
              </p>

              <ul>
                <li>Ontwikkeling en uitvoer van een patient journey mapping voor PTO</li>
                <li>Ontwikkeling van een e-learning voor verpleegkundigen over de tijdige inzet van palliatieve zorg bij patiënten met een relatief korte levensverwachting</li>
                <li>Ondersteunen van naasten en nabestaanden die met onzekerheid en/of complexe rouw te maken hebben</li>
              </ul>

              <p></p>
            </div>
          )}
        </div>
      </PageSection>
      <div id="scroll-to-donate">
        <PageSection width="xl">
          <h2 className="text-center font-black pb-8">Doneer nu</h2>
          <DonateSection projectName={pageTitle} />
        </PageSection>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query projectPage($id: String) {
    page: wordpressDataJson(id: { eq: $id }) {
      uri
      title

  
      projectProgress {
        target
        progressie
      }
    }
  }
`

export default ProjectPage
