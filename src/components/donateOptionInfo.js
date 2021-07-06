import React from "react"
import DonateActionForm from "./donateActionForm"

const DonateOptionInfo = ({
  title,
  description,
  hasDonateActionForm = false,
}) => {
  
  return (
    <div className="w-full h-full p-2">
      <div className="bg-white h-full w-full p-4 rounded flex flex-col">
        <h4 className="mb-4">{title}</h4>
        <p className="flex-grow">{description}</p>
        <div className="w-full h-full">
          {hasDonateActionForm && <DonateActionForm />}
        </div>
      </div>
    </div>
  )
}

export default DonateOptionInfo
