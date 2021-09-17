import React from "react"
import Backgroundlogo from "../assets/images/backgroundLogo.svg"

interface PageSectionPropsModel {
  readonly children: JSX.Element | JSX.Element[]
  readonly width?: string
  readonly color?: string
}

//tailwind-add: sm:max-w-screen-sm, sm:max-w-screen-md, sm:max-w-screen-lg
const PageSection = ({
  children,
  width = "lg",
  color = "bg-white",
}: PageSectionPropsModel) => {
  const screenSize = {
    sm: "sm:max-w-screen-sm",
    md: "sm:max-w-screen-md",
    lg: "sm:max-w-screen-lg",
    xl: "sm:max-w-screen-xl",
  }

  return (
    <section className={`py-8 ${color} rounded relative`}>
      <div className="absolute h-full w-full z-0 overflow-hidden ">
        {/* <Backgroundlogo className="w-full h-full" /> */}
      </div>

      <div className={`container px-4 w-full ${screenSize[width]} z-10`}>
        {children}
      </div>
    </section>
  )
}

export default PageSection
