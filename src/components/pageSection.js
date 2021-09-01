import React from "react"
import PropTypes from "prop-types"


 //tailwind-add: sm:max-w-screen-sm, sm:max-w-screen-md, sm:max-w-screen-lg 

const PageSection = ({ children, width = "lg", color = "bg-white"}) => {

  const screenSize = {
    sm: "sm:max-w-screen-sm",
    md: "sm:max-w-screen-md",
    lg: "sm:max-w-screen-lg",
    xl: "sm:max-w-screen-xl",
  }


  return (
    <section className={`py-8 ${color} rounded`} >
      <div className={`container px-4 w-full ${screenSize[width]}`}>
        {children}
      </div>
    </section>
  )
}

PageSection.propTypes = {
  children: PropTypes.node.isRequired,
  width: PropTypes.string,
  color: PropTypes.string,
}

export default PageSection
