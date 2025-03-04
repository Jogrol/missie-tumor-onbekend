import React from "react"
import scrollTo from "gatsby-plugin-smoothscroll"
import MtoLogoWhiteIcon from "../assets/mtoLogoWhiteIcon.svg"
import { useInView } from "react-intersection-observer"
import { HeroDataModel } from "../models/heroData.model"
import pageHeroImage from "../images/hero-image.jpeg"

const PageHero = ({ title, description, image }: HeroDataModel) => {
  const [ref, inView] = useInView({
    threshold: 0,
  })


  return (
    <div className="h-screen hero bg-base-200">
      <img
        src={pageHeroImage}
        alt="header"
        className="object-cover w-full h-full hero-overlay"
      />
      <div className="relative z-20 w-full px-4 pt-6 sm:pb-4 h-5/6">
        <div className="flex flex-col justify-center h-full pb-4">
          <div className="flex items-center justify-center flex-grow h-2/3">
            <MtoLogoWhiteIcon className="object-fill w-full md:w-2/3" />
          </div>
          <div
            ref={ref}
            className="flex flex-col flex-wrap w-full gap-4 sm:flex-row sm:justify-center md:flex-row sm:gap-8"
          >
            <button
              className="w-full btn sm:btn-lg btn-primary sm:w-96"
              onClick={() => scrollTo("#scroll-to-donate")}
            >
              Doneer nu
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PageHero
