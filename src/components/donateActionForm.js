import React from "react"

const DonateActionForm = ({ title, description, ctaTitle, ctalink }) => {
  return (
    <div className="w-full h-full p-4">
      <div className="bg-gray-200 h-full w-full p-8">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  )
}

export default DonateActionForm
