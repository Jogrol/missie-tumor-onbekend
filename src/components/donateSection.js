import React, { useState } from "react"
import DonateActionForm from "./donateActionForm"
import DonateInformationCard from "./donateInformationCard"

// REFACTOR

const DonateInformation = info => {
  const infoArray = Object.values(info).filter(item => item.title)

  const [currentOption, setOption] = useState(infoArray[0])

  if (!infoArray.length) {
    return null
  }

  const handleClick = item => {
    setOption(item)
  }

  return (
    <>
      <div className="flex flex-wrap w-full bg-brown-100 rounded-lg shadow-md p-8">
        <DonateActionForm />
      </div>
    </>
  )
}

export default DonateInformation
