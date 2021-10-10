import React from "react"
import { PatientStoriesDataModel } from "../models/patientStoriesData.model"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

export interface PatientStoriesSectionPropsModel {
  readonly patientStoriesImages: PatientStoriesDataModel[]
}

const PatientStoriesSection = ({
  patientStoriesImages,
}: PatientStoriesSectionPropsModel): JSX.Element => {
  // Moet uit nieuwe CMS komen.
  const contentData = [
    {
      discription: "Hederik heeft van niemand afscheid genomen",
      link: "https://www.missietumoronbekend.nl/hederiks-verhaal/",
    },
    {
      discription:
        "Ik hoop dat ze iets kunnen vinden met DNA onderzoek, dat is afwachten.",
      link: "https://www.missietumoronbekend.nl/patientenverhalen/",
    },
    {
      discription: "Machteloos tegen een onzichtbare vijand.",
      link: "https://www.missietumoronbekend.nl/carins-verhaal/",
    },
  ]

  return (
    <>
      <div className="flex flex-wrap w-full gap-8 sm:gap-16 justify-center">
        {patientStoriesImages.map((item, index) => {
          const image = getImage(item.localFile)
          return (
            <a key={index} href={contentData[index].link} target="_blank">
              <div 
                className={`bg-white-100 p-4 shadow-xl w-80 origin-center animate-polaroid hover:animate-polaroidHoverState cursor-pointer`}
              >
                <div className="flex flex-col">
                  <GatsbyImage
                    image={image}
                    alt={item.altText}
                    className="h-80 object-cover"
                  />
                  <span className="my-4 text-black italic text-md">
                    "{contentData[index].discription}"
                  </span>
                </div>
              </div>
            </a>
          )
        })}
      </div>
      <div className="w-full flex justify-center flex-col mt-8">
        <p className="text-center text-lg container sm:w-2/3">
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
