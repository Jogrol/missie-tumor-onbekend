import React from "react"
import patientImageA from "../images/patientA.jpg"
import patientImageB from "../images/patientB.jpg"
import patientImageC from "../images/patientC.jpg"
interface PatientStoriesContentDatasModel {
  readonly imageSrc: string
  readonly imageAlt: string
  readonly discription: string
  readonly link: string
}

const PatientStoriesSection = (): JSX.Element => {
  // Moet uit nieuwe CMS komen.
  const contentData = [
    {
      imageSrc: patientImageA,
      imageAlt: "Afbeelding van een patient",
      discription: "Hederik heeft van niemand afscheid genomen",
      link: "https://www.missietumoronbekend.nl/patientenverhalen/hederiks-verhaal/",
    },
    {
      imageSrc: patientImageB,
      imageAlt: "Afbeelding van een patient",
      discription:
        "Ik hoop dat ze iets kunnen vinden met DNA onderzoek, dat is afwachten.",
      link: "https://www.missietumoronbekend.nl/patientenverhalen/",
    },
    {
      imageSrc: patientImageC,
      imageAlt: "Afbeelding van een patient",
      discription: "Machteloos tegen een onzichtbare vijand.",
      link: "https://www.missietumoronbekend.nl/patientenverhalen/carins-verhaal/",
    },
  ] as PatientStoriesContentDatasModel[]

  return (
    <>
      <div className="flex flex-wrap w-full gap-8 sm:gap-16 justify-center">
        {contentData.map((item, index) => {
          return (
            <a href={item.link} target="_blank" key={index}>
              <div
                className={`bg-white-100 p-4 shadow-xl w-80 origin-center animate-polaroid hover:animate-polaroidHoverState cursor-pointer`}
              >
                <div className="flex flex-col">
                  <img
                    src={item.imageSrc}
                    alt={item.imageAlt}
                    className="h-80 object-cover"
                  />
                  <span className="my-4 h-16 text-black italic text-md">
                    "{item.discription}"
                  </span>
                </div>
              </div>
            </a>
          )
        })}
      </div>
      <div>
        <div className="container sm:max-w-screen-md py-8">
          <p>
            Missie Tumor Onbekend, de patiëntenorganisatie voor primaire tumor
            onbekend (PTO) patiënten, is actief betrokken bij het PTO zorgpad en
            werkt samen met zorgverleners in het hele land om zo de beste zorg
            voor deze patiënten te realiseren.
          </p>
          <p>
            U bent niet de enige die met PTO te maken heeft als patiënt of
            naaste, ook al is het vaak een onbekende diagnose, kan het eenzaam
            aanvoelen en breekt er een moeilijke tijd aan.
          </p>
          <p>
            Missie Tumor Onbekend wil graag - met jouw hulp - de optimale
            patiënten route in kaart brengen zodat we de zorg kunnen verbeteren,
            uitdagingen kunnen aanpakken en mogelijkheden kunnen benutten. Dit
            in samenwerking met zorgverleners, zorgverzekeraars en andere
            betrokken stakeholders.
          </p>
          <p>
            Er zijn 3 concrete projecten waar we jouw hulp nu goed bij kunnen
            gebruiken: de komst van een landelijk PTO zorgpad, de update van de
            klinische richtlijn over PTO en de organisatie van eerste landelijk
            symposium over PTO in 2022.{" "}
          </p>
        </div>
        <div className="flex sm:justify-center">
          <a
            className="btn sm:btn-lg btn-secondary w-full sm:w-96"
            href="https://nl.research.net/r/PTO_2021"
            target="_blank"
          >
            Deel nu jouw verhaal met PTO
          </a>
        </div>
      </div>
    </>
  )
}

export default PatientStoriesSection
