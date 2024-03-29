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
                    <p>Missie Tumor Onbekend, de patiëntenorganisatie voor primaire tumor onbekend (PTO) patiënten, is
                        actief betrokken bij het landelijke PTO zorgpad en werkt samen met zorgverleners in het hele
                        land om zo de beste zorg voor deze patiënten te realiseren.</p>


                    <p>Als patiënt of naaste met PTO te maken krijgen voelt vaak als onduidelijk traject, waarbij je je
                        door de onbekendheid ook mogelijk eenzaam kan voelen.</p>

                    <p>Echter ben je niet alleen, er zijn meer mensen die helaas met PTO te maken krijgen. Het lezen van
                        ervaringen van anderen zouden je ook kunnen helpen in jouw patiëntreis.</p>

                    <p>Daarom wil Missie Tumor Onbekend graag - met jouw hulp – meer patiënten ervaringen optekenen, om
                        steun en herkenning te bieden.</p>

                    <p>En om ook met jullie hulp suggesties voor het verbeteren van de patiënten route in kaart te
                        brengen, die we dan ook kunnen terugkoppelen aan zorgverleners binnen het landelijke PTO
                        zorgpad.</p>
                </div>
                <div className="flex sm:justify-center">
                    <a
                        className="w-full sm:w-96"
                        href="mailto:info@missietumoronbekend.nl"
                        target="_blank"
                    >
                        Wil je ook je verhaal delen, neem contact op
                    </a>
                </div>
            </div>
        </>
    )
}

export default PatientStoriesSection
