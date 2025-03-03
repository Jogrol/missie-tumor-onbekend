import React from "react"
import { HeroSmallDataModel } from "../models/heroSmallData.model"
import projectHero from "../images/hero-project.jpeg"

const PageHeroSmall = ({ title }: HeroSmallDataModel): JSX.Element => {
  return (
    <div className="relative h-64 w-full">
      <div className="absolute left-0 top-0 h-64 w-full z-0">
        <img
          src={projectHero}
          alt={`${title} header`}
          className="h-full w-full object-cover"
        />
      </div>
      <div className="absolute pt-28 w-full h-64 flex justify-center items-center px-4">
        <h1 className="text-white italic text-3xl sm:text-4xl md:text-5xl">
          {title}
        </h1>
      </div>
    </div>
  )
}

export default PageHeroSmall
