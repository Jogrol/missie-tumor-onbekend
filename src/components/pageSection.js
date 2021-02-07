import React from "react"

const PageSection = ({ children, width = "lg", color = "bg-white" }) => {
  return (
    <section className={`py-16 ${color}`}>
      <div className={`container px-4 w-full sm:max-w-screen-${width}`}>
        {children}
      </div>
    </section>
  )
}

export default PageSection
