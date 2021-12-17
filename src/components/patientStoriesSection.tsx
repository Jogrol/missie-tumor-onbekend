import React from "react"
import { renderRichText } from "gatsby-source-contentful/rich-text"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const PatientStoriesSection = ({ patientStoriesProps }): JSX.Element => {
  const patientStories = patientStoriesProps.patientStories

  return (
    <>
      <div className="flex flex-wrap justify-center w-full gap-8 sm:gap-16">
        {patientStories.map((item, index) => {
          const patientImage = getImage(item.image.gatsbyImageData)

          return (
            <a href={item.url} target="_blank" key={index}>
              <div
                className={`bg-white-100 p-4 shadow-xl w-80 origin-center animate-polaroid hover:animate-polaroidHoverState cursor-pointer`}
              >
                <div className="flex flex-col">
                  <GatsbyImage
                    image={patientImage}
                    alt={item.image.description}
                    className="w-full rounded-t-lg h-52"
                  />
                  <span className="h-16 my-4 italic text-black text-md">
                    {item.title}
                  </span>
                </div>
              </div>
            </a>
          )
        })}
      </div>
      <div>
        <div className="container py-8 sm:max-w-screen-md">
          {renderRichText(patientStoriesProps.description)}
        </div>
        <div className="flex sm:justify-center">
          <a
            className="w-full btn sm:btn-lg btn-secondary sm:w-96"
            href={patientStoriesProps.callToAction.url}
            target="_blank"
          >
            {patientStoriesProps.callToAction.title}
          </a>
        </div>
      </div>
    </>
  )
}

export default PatientStoriesSection
