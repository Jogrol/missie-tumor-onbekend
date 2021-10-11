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
      link: "https://www.missietumoronbekend.nl/hederiks-verhaal/",
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
      link: "https://www.missietumoronbekend.nl/carins-verhaal/",
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
      <div className="w-full flex justify-center flex-col mt-8">
        <p className="text-center text-white text-lg container sm:w-2/3">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolo
        </p>
        <div className="flex sm:justify-center">
          <a className="btn btn-secondary w-full sm:w-96" href="#">
            Deel nu jouw verhaal met PTO
          </a>
        </div>
      </div>
    </>
  )
}

export default PatientStoriesSection
