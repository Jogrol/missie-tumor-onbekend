import React from "react"
import PropTypes from "prop-types"

const PageSection = ({ children, width = "lg", color = "bg-white" }) => {
  return (
    <section className={`py-8 ${color}`}>
      <div className={`container px-4 w-full sm:max-w-screen-${width}`}>
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
