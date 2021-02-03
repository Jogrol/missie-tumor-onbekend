import React from "react"

const PageSection = ({ children, width = "lg" }) => {
  return (
    <section className={`container px-4 w-full sm:max-w-screen-${width}`}>
      {children}
    </section>
  )
}

export default PageSection
