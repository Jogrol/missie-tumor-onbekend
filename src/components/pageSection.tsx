import React from "react"
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
    <section className={`pb-16 pt-8 ${color} rounded relative`}>
      <div className={`container px-2 px-4 w-full ${screenSize[width]} z-10`}>
        {children}
      </div>
    </section>
  )
}

export default PageSection
